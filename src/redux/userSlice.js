import { createSlice } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

// Fungsi untuk memuat state dari localStorage
const loadState = () => {
  try {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const isLoggedin = JSON.parse(localStorage.getItem("isLoggedin")) || false;
    const loggedInUser =
      JSON.parse(localStorage.getItem("loggedInUser")) || null;
    return {
      users,
      isLoggedin,
      loggedInUser,
    };
  } catch (e) {
    console.warn("Gagal memuat state dari localStorage:", e);
    return {
      users: [],
      isLoggedin: false,
      loggedInUser: null,
    };
  }
};

// Inisialisasi state dari localStorage
const initialState = loadState();

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.users.push(action.payload);
      // Update localStorage
      try {
        const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
        existingUsers.push(action.payload);
        localStorage.setItem("users", JSON.stringify(existingUsers));
      } catch (e) {
        console.log("Error saving user to localStorage", e);
      }
    },
    loginUser: (state, action) => {
      const user = state.users.find(
        (user) =>
          user.email === action.payload.email &&
          user.password === action.payload.password
      );
      if (user) {
        state.isLoggedin = true;
        state.loggedInUser = user;
        // Update localStorage
        try {
          localStorage.setItem("isLoggedin", true);
          localStorage.setItem("loggedInUser", JSON.stringify(user));
        } catch (e) {
          console.log("Error saving login state to localStorage", e);
        }
      } else {
        state.isLoggedin = false;
        state.loggedInUser = null;
        Swal.fire("Email atau password salah");
      }
    },
    logoutUser: (state) => {
      state.isLoggedin = false;
      state.loggedInUser = null;
      // Update localStorage
      try {
        localStorage.removeItem("isLoggedin");
        localStorage.removeItem("loggedInUser");
      } catch (e) {
        console.log("Error removing login state from localStorage", e);
      }
    },
  },
});

const generateId = (currentUsers) => {
  if (currentUsers.length === 0) {
    return 1;
  } else {
    const lastUser = currentUsers[currentUsers.length - 1];
    return lastUser.id + 1;
  }
};

export function Registration(input) {
  return (dispatch, getState) => {
    const { fullname, email, gender, file, password, cpassword } = input;

    // Validasi input
    if (!fullname) {
      Swal.fire("Nama Lengkap tidak boleh kosong");
      return;
    }

    if (!email) {
      Swal.fire("Email tidak boleh kosong");
      return;
    }

    if (!gender) {
      Swal.fire("Jenis Kelamin tidak boleh kosong");
      return;
    }

    if (!file) {
      Swal.fire("Bukti Identitas tidak boleh kosong");
      return;
    }

    if (!password || !cpassword) {
      Swal.fire("Password tidak boleh kosong");
      return;
    }

    if (password !== cpassword) {
      Swal.fire("Password tidak sesuai");
      return;
    }

    const currentUsers = getState().users.users;
    const newId = generateId(currentUsers);

    const currentDate = new Date();
    let newUser = {
      id: newId,
      fullname,
      email,
      gender,
      file,
      password,
      active: 1,
      status: 1,
      createdate: currentDate.toISOString(),
    };

    dispatch(addUser(newUser));

    Swal.fire("Pengguna berhasil ditambahkan");
  };
}

export function Auth(input) {
  return (dispatch, getState) => {
    const { email, password } = input;
    const { users } = getState().users;

    const user = users.find(
      (user) => user.email === email && user.password === password
    );

    if (user) {
      dispatch(loginUser({ email, password }));
      Swal.fire("Pengguna berhasil Login").then(() => {
        window.location.href = "/skills";
      });
    } else {
      Swal.fire("Email atau password salah");
    }
  };
}

export function Logout() {
  return (dispatch) => {
    dispatch(logoutUser());
    Swal.fire("berhasil logout").then(() => {
      window.location.href = "/";
    });
  };
}

export const { addUser, loginUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;

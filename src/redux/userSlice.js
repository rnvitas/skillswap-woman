import { createSlice } from "@reduxjs/toolkit";
import Swal from "sweetalert2";

const userSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
  },
  reducers: {
    addUser: (state, action) => {
      state.users.push(action.payload);
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
    if (!input.fullname) {
      Swal.fire("Nama Lengkap tidak boleh kosong");
      return;
    }

    if (!input.email) {
      Swal.fire("Email tidak boleh kosong");
      return;
    }

    if (!input.gender) {
      Swal.fire("Jenis Kelamin tidak boleh kosong");
      return;
    }

    if (!input.file) {
      Swal.fire("Bukti Identitas tidak boleh kosong");
      return;
    }

    if (!input.password || !input.cpassword) {
      Swal.fire("Password tidak boleh kosong");
      return;
    }

    if (input.password !== input.cpassword) {
      Swal.fire("Password tidak sesuai");
      return;
    }

    const currentUsers = getState().users.users;
    const newId = generateId(currentUsers);

    const currentDate = new Date();
    let newUser = {
      id: newId,
      fullname: input.fullname,
      email: input.email,
      gender: input.gender,
      file: input.file,
      password: input.password,
      active: 1,
      status: 1,
      createdate: currentDate.toISOString(),
    };
    dispatch(addUser(newUser));

    try {
      const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
      existingUsers.push(newUser);
      localStorage.setItem("users", JSON.stringify(existingUsers));
      Swal.fire("Pengguna berhasil ditambahkan");
    } catch (e) {
      console.log("Error saving state to localStorage", e);
    }
  };
}

export const { addUser } = userSlice.actions;
export default userSlice.reducer;

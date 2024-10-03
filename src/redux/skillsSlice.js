import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import Swal from "sweetalert2";

// Fungsi untuk memuat state dari localStorage
const loadState = () => {
  try {
    const postskills = JSON.parse(localStorage.getItem("post-skills")) || [];

    return {
      postskills,
    };
  } catch (e) {
    console.warn("Gagal memuat state dari localStorage:", e);
    return {
      postskills: [],
    };
  }
};

// Inisialisasi state dari localStorage
const initialState = loadState();

const skillsSlice = createSlice({
  name: "skill",
  initialState,
  reducers: {
    addSkills: (state, action) => {
      state.postskills.push(action.payload);
      // Update localStorage
      try {
        const existingSkills =
          JSON.parse(localStorage.getItem("post-skills")) || [];
        existingSkills.push(action.payload);
        localStorage.setItem("post-skills", JSON.stringify(existingSkills));
      } catch (e) {
        console.log("Error saving skills to localStorage", e);
      }
    },
  },
});

export function Skills(input) {
  return (dispatch) => {
    const {
      skillCategory,
      skillName,
      skillDesc,
      skillLearn,
      availableDay,
      time,
      metode,
      notes,
    } = input;

    console.log("Input diterima:", input);

    // Validasi input
    if (!skillCategory) {
      Swal.fire("Kategori Keterampilan tidak boleh kosong");
      return;
    }

    if (!skillName) {
      Swal.fire("Nama Keterampilan tidak boleh kosong");
      return;
    }

    if (!skillDesc) {
      Swal.fire("Deskripsi Keterampilan  tidak boleh kosong");
      return;
    }

    if (!skillLearn) {
      Swal.fire("Nama Keterampilan yang ingin dipelajari tidak boleh kosong");
      return;
    }

    if (!availableDay) {
      Swal.fire("Ketersediaan Hari tidak boleh kosong");
      return;
    }

    if (!time) {
      Swal.fire("Ketersediaan Waktu tidak boleh kosong");
      return;
    }

    if (!metode) {
      Swal.fire("Metode tidak boleh kosong");
      return;
    }

    // Mendapatkan informasi pengguna yang login
    const userLogin = JSON.parse(localStorage.getItem("loggedInUser")) || null;

    console.log("User Login:", userLogin);

    const newId = uuidv4();
    const currentDate = new Date();

    let newSkills = {
      id_post: newId,
      id_user: userLogin.id,
      fullname: userLogin.fullname,
      skillCategory,
      skillName,
      skillDesc,
      skillLearn,
      availableDay,
      time,
      metode,
      notes: notes || "", // Pastikan notes tidak undefined
      active: 1,
      status: 1,
      createdate: currentDate.toISOString(),
    };

    // Dispatch action untuk menambahkan keterampilan
    dispatch(addSkills(newSkills));

    Swal.fire("Keterampilan berhasil ditambahkan").then(() => {
      window.location.href = "/skills";
    });
  };
}

export const { addSkills } = skillsSlice.actions;
export default skillsSlice.reducer;

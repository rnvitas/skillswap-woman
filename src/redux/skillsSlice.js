import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import Swal from "sweetalert2";

// Fungsi untuk memuat state dari localStorage
const loadState = () => {
  try {
    // const skillSwap = JSON.parse(localStorage.getItem("request-swap")) || [];
    const postskills = JSON.parse(localStorage.getItem("post-skills")) || [];
    const selectedSkill =
      JSON.parse(localStorage.getItem("selected-skill")) || null;

    return {
      postskills,
      selectedSkill,
      //   skillSwap,
    };
  } catch (e) {
    console.warn("Gagal memuat state dari localStorage:", e);
    return {
      postskills: [],
      selectedSkill: null,
      //   skillSwap: [],
    };
  }
};

const loadStateSwap = () => {
  try {
    const skillSwap = JSON.parse(localStorage.getItem("request-swap")) || [];

    return {
      skillSwap,
    };
  } catch (e) {
    console.warn("Gagal memuat state dari localStorage:", e);
    return {
      skillSwap: [],
    };
  }
};

// Inisialisasi state dari localStorage
const dataskills = loadState();
const swapskills = loadStateSwap();

const skillsSlice = createSlice({
  name: "skill",
  initialState: {
    postskills: dataskills.postskills,
    selectedSkill: dataskills.selectedSkill,
    skillSwap: swapskills.skillSwap,
  },
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
    loadSkills: (state, action) => {
      state.selectedSkill = action.payload || null;
      // Simpan selectedSkill ke localStorage
      try {
        if (action.payload) {
          localStorage.setItem(
            "selected-skill",
            JSON.stringify(action.payload)
          );
        } else {
          localStorage.removeItem("selected-skill");
        }
      } catch (e) {
        console.log("Error saving selectedSkill to localStorage", e);
      }
    },
    addRequest: (state, action) => {
      state.skillSwap.push(action.payload);
      // Update localStorage
      try {
        const existingSkills =
          JSON.parse(localStorage.getItem("request-swap")) || [];
        existingSkills.push(action.payload);
        localStorage.setItem("request-swap", JSON.stringify(existingSkills));
      } catch (e) {
        console.log("Error saving skills to localStorage", e);
      }
    },

    confirmReq: (state, action) => {
      const updatedRequest = action.payload;

      // Perbarui state.skillSwap dengan request yang sudah diubah
      state.skillSwap = state.skillSwap.map((req) =>
        req.id_request === updatedRequest.id_request ? updatedRequest : req
      );

      try {
        // Ambil data request-swap dari localStorage
        const requests = JSON.parse(localStorage.getItem("request-swap")) || [];

        // Temukan indeks request yang akan diperbarui
        const index = requests.findIndex(
          (s) => s.id_request === updatedRequest.id_request
        );

        if (index !== -1) {
          // Perbarui request di array
          requests[index] = updatedRequest;

          // Simpan kembali ke localStorage
          localStorage.setItem("request-swap", JSON.stringify(requests));
        }
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

export function getSkillsbyId(id) {
  return (dispatch, getState) => {
    try {
      const skills = getState().skills.postskills;
      const skillById = skills.find((skill) => skill.id_post === id);

      if (skillById) {
        dispatch(loadSkills(skillById));
      } else {
        Swal.fire("Skill not found");
      }
    } catch (error) {
      console.error("Error loading skill by ID:", error);
      Swal.fire("An error occurred while fetching the skill.");
    }
  };
}

export function skillRequest(input, id) {
  return (dispatch, getState) => {
    const {
      skillSwapCategory,
      skillswapDesc,
      reasonLearn,
      dateSession,
      timeSession,
      //   skillMethod,
      skillComments,
    } = input;

    if (!skillSwapCategory) {
      Swal.fire("Kategori Keterampilan tidak boleh kosong");
      return;
    }

    if (!skillswapDesc) {
      Swal.fire("Nama Keterampilan tidak boleh kosong");
      return;
    }

    if (!reasonLearn) {
      Swal.fire("Field tidak boleh kosong");
      return;
    }

    if (!dateSession) {
      Swal.fire("Tanggal Sesi tidak boleh kosong");
      return;
    }

    if (!timeSession) {
      Swal.fire("Waktu Sesi tidak boleh kosong");
      return;
    }

    // if (!skillMethod) {
    //   Swal.fire("Metode Pertukaran tidak boleh kosong");
    //   return;
    // }

    const userLogin = JSON.parse(localStorage.getItem("loggedInUser")) || null;
    // console.log("User Login:", userLogin);

    const skills = getState().skills.postskills;
    const skillById = skills.find((skill) => skill.id_post === id);

    if (skillById) {
      const newId = uuidv4();
      const currentDate = new Date();

      let newSkills = {
        id_request: newId,
        id_post: skillById.id_post,
        id_requester: userLogin.id,
        id_receiver: skillById.id_user,
        fullname_requester: userLogin.fullname,
        fullname_receiver: skillById.fullname,
        skill_rev_cat: skillById.skillCategory,
        skill_rev_name: skillById.skillName,
        skillSwapCategory,
        skillswapDesc,
        reasonLearn,
        dateSession,
        timeSession,
        skillMethod: skillById.metode,
        skillComments,
        active: 1,
        status: "request",
        createdate: currentDate.toISOString(),
      };

      // Dispatch action untuk menambahkan keterampilan
      dispatch(addRequest(newSkills));
      //   Swal.fire(
      //     "Request berhasil diajukan , silahkan lihat di menu Pertukaran AKtif"
      //   );
      Swal.fire(
        "Request berhasil diajukan , silahkan lihat di menu Pertukaran AKtif"
      ).then(() => {
        window.location.href = "/skills";
      });
    }
  };
}

export function confirmRequest(id) {
  return (dispatch, getState) => {
    Swal.fire({
      title: "Apa kamu yakin ingin menerima pertukaran?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Ya",
      reverseButtons: true,
      denyButtonText: `Menolak`,
      cancelButtonText: "Pikir-pikir lagi",
    }).then((result) => {
      if (result.isConfirmed) {
        // const listReq = JSON.parse(localStorage.getItem("request-swap"));
        const listReq = getState().skills.skillSwap;
        const data = listReq.find((item) => item.id_request === id);

        if (data) {
          let newSesi = {
            ...data,
            status: "Menyetujui",
          };
          dispatch(confirmReq(newSesi));
        }
        Swal.fire("Anda Menerima", "", "success");
      } else if (result.isDenied) {
        // const listReq = JSON.parse(localStorage.getItem("request-swap"));
        const listReq = getState().skills.skillSwap;
        const data = listReq.find((item) => item.id_request === id);

        if (data) {
          let newSesi = {
            ...data,
            status: "Menolak",
          };
          dispatch(confirmReq(newSesi));
        }
        Swal.fire("Anda Menolak Pertukaran", "", "info");
      }
    });
  };
}

export const { addSkills, loadSkills, addRequest, confirmReq } =
  skillsSlice.actions;
export default skillsSlice.reducer;

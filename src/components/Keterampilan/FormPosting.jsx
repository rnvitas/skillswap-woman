import { Icon } from "@iconify/react/dist/iconify.js";
import styles from "../../assets/Skills.module.css";
import { useEffect, useState } from "react";
import { Skills } from "../../redux/skillsSlice"; // Ubah import di sini
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function FormPosting() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [input, setInput] = useState({
    skillCategory: "",
    skillName: "",
    skillLearn: "",
    availableDay: "",
    time: "",
    metode: "",
    notes: "",
  });

  useEffect(() => {
    const userLogin = JSON.parse(localStorage.getItem("loggedInUser")) || null;
    if (!userLogin) {
      navigate("/"); 
    }
  }, [navigate]);

  const handleInput = (event) => {
    const { name, value } = event.target;
    setInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  };

  const handleAdd = (e) => {
    e.preventDefault();

    dispatch(Skills(input));
  };

  return (
    <>
      <div className="wrapper w-full bg-[#BA324F] rounded-b-[50px] flex flex-col gap-3 justify-center items-center">
        <div
          className={`${styles["skills-header-form"]} container flex flex-col gap-3`}>
          <div className="py-3 flex gap-10 items-center">
            <Icon
              icon="fluent:ios-arrow-24-filled"
              width="48"
              height="48"
              style={{ color: "white" }}
            />
            <h6 className="text-white text-[1.2rem]">kembali</h6>
          </div>
          <h1>Tawarkan Keterampilan Kamu dan Mulai Pertukaran!</h1>
          <p>
            Ayo Bagikan Ilmumu! Jangan ragu untuk membagikan keterampilan yang
            kamu miliki. Dengan setiap pertukaran, kamu akan mendapatkan teman
            baru dan kesempatan untuk belajar keterampilan lain dari sesama
            perempuan. Mulai perjalananmu sekarang!
          </p>
        </div>
      </div>

      <div className="wrapper container ">
        <div className={`${styles["skills-section"]} my-10`}>
          <div className="flex justify-center items-center">
            <h1 className="font-bold text-[2rem] text-[#BA324F]">
              Formulir Posting Keterampilan
            </h1>
          </div>

          <div
            className={`${styles["skills-content"]} container mt-10 flex justify-center items-center gap-5 mx-3 flex-col`}>
            <form >
              <h4 className="text-[#BA324F] text-[1rem] font-bold">
                Keterampilan yang ingin Kamu Tawarkan
              </h4>
              <div className="py-3 flex gap-5">
                {/* Input Kategori Keterampilan */}
                <div>
                  <label
                    htmlFor="skillCategory"
                    className="text-[#04395E] font-semibold">
                    Kategori Keterampilan
                  </label>
                  <select
                    id="skillCategory"
                    name="skillCategory"
                    value={input.skillCategory}
                    onChange={handleInput}
                    className="w-full rounded-[10px] p-[12px_24px] bg-[#F2F5F7] border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option value="">Pilih Kategori</option>
                    <option value="design">Desain Grafis</option>
                    <option value="web-development">Pengembangan Web</option>
                    <option value="marketing">Pemasaran</option>
                  </select>
                </div>

                {/* Input Nama Keterampilan */}
                <div>
                  <label
                    className="text-[#04395E] font-semibold"
                    htmlFor="skillName">
                    Nama Keterampilan
                  </label>
                  <input
                    className="w-full rounded-[10px] p-[12px_24px] bg-[#F2F5F7] border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    name="skillName"
                    value={input.skillName}
                    onChange={handleInput}
                    id="skillName"
                    placeholder="Nama Keterampilan"
                    type="text"
                  />
                </div>

                <div>
                  <label
                    className="text-[#04395E] font-semibold"
                    htmlFor="skillLearn">
                    Deskripsi Keterampilan yang Ditawarkan
                  </label>
                  <textarea
                    className="w-full rounded-[10px] p-[12px_24px] bg-[#F2F5F7] border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    name="skillDesc"
                    onChange={handleInput}
                    value={input.skillDesc}
                    id="skillLearn"
                    placeholder="Ceritakan sedikit tentang keterampilan yang kamu tawarkan"
                    rows="4"
                  />
                </div>
              </div>

              <h4 className="text-[#BA324F] text-[1rem] font-bold">
                Keterampilan yang ingin dipelajari
              </h4>
              <div className="py-3 gap-5">
                {/* Textarea Keterampilan yang Ingin Dipelajari */}
                <div>
                  <label
                    className="text-[#04395E] font-semibold"
                    htmlFor="skillLearn">
                    Deskripsi Keterampilan
                  </label>
                  <textarea
                    className="w-full rounded-[10px] p-[12px_24px] bg-[#F2F5F7] border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    name="skillLearn"
                    onChange={handleInput}
                    value={input.skillLearn}
                    id="skillLearn"
                    placeholder="Ceritakan sedikit tentang keterampilan yang kamu tawarkan"
                    rows="4"
                  />
                </div>
              </div>

              <h4 className="text-[#BA324F] text-[1rem] font-bold">
                Detail Pertukaran Keterampilan
              </h4>
              <div className="py-3 flex gap-5">
                {/* Input Ketersediaan Hari */}
                <div>
                  <label className="text-[#04395E] font-semibold" htmlFor="availableDay">
                    Ketersediaan Hari
                  </label>
                  <input
                    className="w-full rounded-[10px] p-[12px_24px] bg-[#F2F5F7] border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    name="availableDay"
                    id="availableDay"
                    value={input.availableDay}
                    onChange={handleInput}
                    placeholder="Saya tersedia pada hari Sabtu-Minggu"
                    type="text"
                  />
                </div>

                {/* Input Waktu Usulan Sesi */}
                <div>
                  <label className="text-[#04395E] font-semibold" htmlFor="time">
                    Waktu Usulan Sesi
                  </label>
                  <input
                    className="w-full rounded-[10px] p-[12px_24px] bg-[#F2F5F7] border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    name="time"
                    id="time"
                    placeholder="Saya bisa pada jam 13:00 - 15:00"
                    value={input.time}
                    onChange={handleInput}
                    type="text"
                  />
                </div>

                {/* Input Metode Pertukaran */}
                <div>
                  <label
                    htmlFor="metode"
                    className="text-[#04395E] font-semibold">
                    Metode Pertukaran
                  </label>
                  <select
                    id="metode"
                    name="metode"
                    value={input.metode}
                    onChange={handleInput}
                    className="w-full rounded-[10px] p-[12px_24px] bg-[#F2F5F7] border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option value="">Pilih Metode</option>
                    <option value="online">Online Zoom/Gmeet</option>
                    <option value="material">Tukar Materi</option>
                  </select>
                </div>
              </div>

              <h4 className="text-[#BA324F] text-[1rem] font-bold">
                Catatan untuk Mitra
              </h4>
              <div className="py-3 w-full gap-5">
                {/* Textarea Catatan */}
                <div>
                  <label
                    className="text-[#04395E] font-semibold"
                    htmlFor="notes">
                    Catatan/Komentar untuk Mitra
                  </label>
                  <textarea
                    className="w-full rounded-[10px] p-[12px_24px] bg-[#F2F5F7] border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    name="notes"
                    value={input.notes}
                    onChange={handleInput}
                    id="notes"
                    placeholder="Deskripsikan keterampilan yang ingin Anda tukarkan"
                    rows="4"
                  />
                </div>
              </div>

              <div className="flex justify-center items-center">
                <button onClick={handleAdd} className="lg-btn-primary">
                  Tambah Keterampilan
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default FormPosting;

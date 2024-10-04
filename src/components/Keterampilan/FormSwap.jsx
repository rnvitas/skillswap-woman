import { Icon } from "@iconify/react/dist/iconify.js";
import styles from "../../assets/Skills.module.css";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { skillRequest } from "../../redux/skillsSlice";
import { useParams } from "react-router-dom";

function FormSwap() {
  const dispatch = useDispatch();
  const { id_post } = useParams();

  const [input, setInput] = useState({
    skillSwapCategory: "", 
    skillswapDesc: "", 
    reasonLearn: "", 
    dateSession: "", 
    timeSession: "", 
    skillMethod: "", 
    skillComments: "", 
  });

  const handleInput = (event) => {
    const { name, value } = event.target;
    setInput((input) => ({
      ...input,
      [name]: value,
    }));
  };

  const handleRequest = (e) =>{
    e.preventDefault()

    dispatch(skillRequest(input,id_post));
  }

  return (
    <>
      <div className="wrapper w-full bg-[#BA324F] rounded-b-[50px] flex flex-col gap-3 justify-center items-center">
        <div className={`${styles["skills-header-form"]} container flex flex-col gap-3`}>
          <div className="py-3 flex gap-10 items-center">
            <Icon icon="fluent:ios-arrow-24-filled" width="48" height="48" style={{ color: 'white' }} />
            <h6 className="text-white text-[1.2rem]">kembali</h6>
          </div>
          <h1>Ajukan Pertukaran Keterampilan</h1>
          <p>
            Temukan keterampilan baru yang bisa Anda pelajari dari sesama
            perempuan! Pilih keterampilan yang menarik minat Anda, ajukan
            pertukaran, dan mulai belajar hari ini.
          </p>
        </div>
      </div>

      <div className="wrapper container ">
        <div className={`${styles["skills-section"]} my-10`}>
          <div className="flex justify-center items-center">
            <h1 className="font-bold text-[2rem] text-[#BA324F]">
              Formulir Ajukan Pertukaran
            </h1>
          </div>

          <div className={`${styles["skills-content"]} container mt-10 flex justify-center items-center gap-5 mx-3 flex-col`}>
            <form action="">
              <h4 className="text-[#BA324F] text-[1rem] font-bold">
                Keterampilan yang ingin Kamu Tukarkan (opsional)
              </h4>
              <div className="py-3 flex gap-5">
                {/* Input Kategori Keterampilan */}
                <div>
                  <label
                    htmlFor="skill-category"
                    className="text-[#04395E] font-semibold">
                    Kategori Keterampilan
                  </label>
                  <select
                    id="skill-category"
                    name="skillSwapCategory" // Changed to match the state
                    value={input.skillSwapCategory}
                    onChange={handleInput}
                    className="w-full rounded-[10px] p-[12px_24px] bg-[#F2F5F7] border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option value="">Pilih Kategori</option>
                    <option value="design">Desain Grafis</option>
                    <option value="web-development">Pengembangan Web</option>
                    <option value="marketing">Pemasaran</option>
                  </select>
                </div>

                {/* Textarea Keterampilan yang Ingin Ditukar */}
                <div>
                  <label
                    className="text-[#04395E] font-semibold"
                    htmlFor="skillswapDesc">
                    Keterampilan yang Ingin Anda Tukar
                  </label>
                  <textarea
                    className="w-full rounded-[10px] p-[12px_24px] bg-[#F2F5F7] border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    name="skillswapDesc" // Changed to match the state
                    id="skillswapDesc"
                    value={input.skillswapDesc}
                    onChange={handleInput}
                    placeholder="Deskripsikan keterampilan yang ingin Anda tukarkan"
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
                    htmlFor="reasonLearn">
                    Alasan kamu ingin belajar
                  </label>
                  <textarea
                    className="w-full rounded-[10px] p-[12px_24px] bg-[#F2F5F7] border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    name="reasonLearn" // Changed to match the state
                    id="reasonLearn"
                    value={input.reasonLearn}
                    onChange={handleInput}
                    placeholder="Deskripsikan keterampilan yang ingin Anda tukarkan"
                    rows="4"
                  />
                </div>
              </div>

              <h4 className="text-[#BA324F] text-[1rem] font-bold">
                Detail Pertukaran Keterampilan
              </h4>
              <div className="py-3 flex gap-5">
                {/* Input Tanggal Usulan Sesi */}
                <div>
                  <label className="text-[#04395E] font-semibold">
                    Tanggal Usulan Sesi
                  </label>
                  <input
                    className="w-full rounded-[10px] p-[12px_24px] bg-[#F2F5F7] border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    name="dateSession" // Changed to match the state
                    id="date"
                    value={input.dateSession}
                    onChange={handleInput}
                    placeholder="dd/mm/yyy"
                    type="date"
                  />
                </div>

                {/* Input Waktu Usulan Sesi */}
                <div>
                  <label className="text-[#04395E] font-semibold">
                    Waktu Usulan Sesi
                  </label>
                  <input
                    className="w-full rounded-[10px] p-[12px_24px] bg-[#F2F5F7] border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    name="timeSession" // Changed to match the state
                    id="time"
                    type="time"
                    value={input.timeSession}
                    onChange={handleInput}
                  />
                </div>

                {/* Input Metode Pertukaran */}
                <div>
                  <label
                    htmlFor="skillMethod"
                    className="text-[#04395E] font-semibold">
                    Metode Pertukaran
                  </label>
                  <select
                    id="skillMethod"
                    name="skillMethod" // Changed to match the state
                    value={input.skillMethod}
                    onChange={handleInput}
                    className="w-full rounded-[10px] p-[12px_24px] bg-[#F2F5F7] border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option value="">Pilih Metode</option>
                    <option value="online">Online Zoom/Gmeet</option>
                    <option value="material-exchange">Tukar Materi</option>
                  </select>
                </div>
              </div>

              <h4 className="text-[#BA324F] text-[1rem] font-bold">
                Catatan untuk Mitra
              </h4>
              <div className="py-3 w-full gap-5">
                {/* Textarea Catatan untuk Mitra */}
                <div>
                  <label
                    className="text-[#04395E] font-semibold"
                    htmlFor="skillComments">
                    Catatan/Komentar untuk Mitra
                  </label>
                  <textarea
                    className="w-full rounded-[10px] p-[12px_24px] bg-[#F2F5F7] border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    name="skillComments" // Changed to match the state
                    id="skillComments"
                    value={input.skillComments}
                    onChange={handleInput}
                    placeholder="Deskripsikan keterampilan yang ingin Anda tukarkan"
                    rows="4"
                  />
                </div>
              </div>

              <div className="flex justify-center items-center">
                <button onClick={handleRequest} className="lg-btn-primary">Ajukan Pertukaran</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default FormSwap;

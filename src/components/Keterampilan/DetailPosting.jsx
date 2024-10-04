import { Icon } from "@iconify/react/dist/iconify.js";
import styles from "../../assets/Skills.module.css";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSkillsbyId } from "../../redux/skillsSlice";

function DetailPosting() {
  const { selectedSkill } = useSelector((state) => state.skills);

  const { id_post } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if (id_post) {
      dispatch(getSkillsbyId(id_post));
    }
  }, [dispatch, id_post]);

 
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
          <h1>Detail Keterampilan yang Ditawarkan</h1>
        </div>
      </div>

      <div className="wrapper container ">
        <div
          className={`${styles["skills-section"]} flex justify-center items-center`}>
          <div
            className={`${styles["skills-content"]} rounded-[20px] shadow-lg bg-white shadow-neutral-600/50 w-[900px]  px-5 py-10 my-4 flex justify-center items-center gap-5 mx-3 flex-col`}>
            <form action="">
              <h4 className="text-[#BA324F] text-[1.3rem] font-bold mb-3">
                Nama Pengguna : {selectedSkill.fullname}
              </h4>
              <h4 className="text-[#BA324F] text-[1rem] font-bold">
                Keterampilan yang Ditawarkan
              </h4>
              <div className="py-3 flex gap-5">
                {/* Input Kategori Keterampilan */}
                <div>
                  <label
                    htmlFor="skill-category"
                    className="text-[#04395E] font-semibold">
                    Kategori Keterampilan
                  </label>
                  <h4 className="mt-3">{selectedSkill.skillCategory}</h4>
                </div>

                {/* Textarea Keterampilan yang Ingin Ditukar */}
                <div>
                  <label
                    className="text-[#04395E] font-semibold"
                    htmlFor="skillsswap">
                    Nama Keterampilan
                  </label>
                  <h4 className="mt-3">{selectedSkill.skillName}</h4>
                </div>
              </div>

              <div className="py-3 gap-5">
                {/* Textarea Keterampilan yang Ingin Dipelajari */}
                <div>
                  <label
                    className="text-[#04395E] font-semibold"
                    htmlFor="skillsswap">
                    Deskripsi Keterampilan{" "}
                  </label>
                  <p className="mt-3">{selectedSkill.skillDesc}</p>
                </div>
              </div>

              <div className="py-3 gap-5">
                {/* Textarea Keterampilan yang Ingin Dipelajari */}
                <div>
                  <label
                    className="text-[#04395E] font-semibold"
                    htmlFor="skillsswap">
                    Keterampilan yang Dicari untuk Ditukar{" "}
                  </label>
                  <p className="mt-3">{selectedSkill.skillLearn}</p>
                </div>
              </div>

              <h4 className="text-[#BA324F] text-[1rem] font-bold">
                Detail Pertukaran Keterampilan
              </h4>
              <div className="py-3 flex gap-5">
                {/* Textarea Keterampilan yang Ingin Dipelajari */}
                <div>
                  <label className="text-[#04395E] font-semibold">
                    Ketersediaan Waktu
                  </label>
                  <p className="mt-3">
                    {selectedSkill.availableDay}, Pukul : {selectedSkill.time}
                  </p>
                </div>
              </div>

              <div className="py-3 w-full gap-5">
                {/* Textarea Keterampilan yang Ingin Dipelajari */}
                <div>
                  <label
                    className="text-[#04395E] font-semibold"
                    htmlFor="skillsswap">
                    Catatan
                  </label>
                  <p className="mt-3">{}</p>
                </div>
              </div>

              <div className="flex justify-center items-center my-6">
                {" "}
                <button className="lg-btn-primary">Ajukan Pertukaran</button>
              </div>

              <div className="flex justify-center flex-col items-center my-8">
                <p className="text-[#BA324F] text-center">
                  Tertarik dengan Keterampilan Ini?{" "}
                </p>
                <p className="text-[#BA324F] text-center">
                  Segera ajukan pertukaran dan mulai belajar Desain Grafis
                  bersama Rina A. Pilih keterampilanmu, ajukan jadwal, dan
                  lakukan pertukaran untuk saling berbagi pengetahuan!
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default DetailPosting;

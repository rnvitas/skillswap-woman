import styles from "../../assets/Skills.module.css";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

function SkillsSwap() {
  return (
    <>
      <div className="wrapper w-full bg-[#BA324F] rounded-b-[50px] flex flex-col gap-3 justify-center items-center ">
        <div
          className={`${styles["skills-header"]} container flex flex-col gap-3 `}>
          <h1>Pertukaran AKtif</h1>
          <p>
          Lihat semua pertukaran keterampilan yang sedang berlangsung. Kelola sesi, akses materi, dan pastikan pengalaman belajar Anda berjalan lancar.
          </p>
        </div>
      </div>

      <div className="wrapper container">
        <div className={`${styles["skills-section"]} `}>
          <div
            className={`${styles["skills-heading"]} flex justify-between items-center `}>
            <h1>Pertukaran Keterampilan</h1>
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-[#BA324F] px-3 py-3 text-sm font-semibold text-white shadow-sm ">
                  Terbaru
                  <ChevronDownIcon
                    aria-hidden="true"
                    className="-mr-1 h-5 w-5 text-white"
                  />
                </MenuButton>
              </div>

              <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in">
                <div className="py-1">
                  <MenuItem>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900">
                      Account settings
                    </a>
                  </MenuItem>
                </div>
              </MenuItems>
            </Menu>
          </div>


          <div
            className={`${styles["skills-content"]} mt-10 flex gap-5 mx-3 flex-wrap `}>
            <div className={`${styles["skills-card"]}`}>
              <div
                className={`px-4 py-5 rounded-t-[10px]
            border-2 border-x-[#BA324F] border-t-[#BA324F] border-b-0`}>
                <div className={`flex justify-between `}>
                  <div className={`flex flex-col gap-1`}>
                    <h4 className="text-[#BA324F] font-bold text-[1rem]">
                      Jessica Mulan
                    </h4>
                    <p className="text-[#8C8C8C]">11 Oktober 2024 |20:00 WIB</p>
                  </div>

                  <div
                    className={`px-2 py-3 bg-[#F8EBED] flex justify-center rounded-[10px] items-center`}>
                    <h6 className="font-bold text-[#BA324F]">
                      Keterampilan Teknologi
                    </h6>
                  </div>
                </div>

                <div className={`mt-3 flex gap-3 flex-col `}>
                  <h4 className="font-bold text-[1.2rem]">Desain Grafis</h4>
                  <p className="font-[400]">
                   Metode Pertukaran : <span className="text-[#BA324F]">Online Via Zoom/Gmeet</span>
                  </p>
                  <p className="font-[400]">
                   Jadwal Sesi : <span className="text-[#BA324F]">20 Oktober 2024</span>
                  </p>
                  <p className="font-[400]">
                   Waktu Sesi : <span className="text-[#BA324F]">17:00 WIB</span>
                  </p>
                  <p className="font-[400]">
                   Status : <span className="text-[#BA324F] font-bold">Menunggu Konfirmasi</span>
                  </p>
                </div>
              </div>
              <div
                className={`bg-[#FCF6F8] rounded-b-[10px] border-2 border-t-0 border-b-[#BA324F] border-x-[#BA324F] px-4 py-2 flex justify-between items-center `}>
                {/* <h6 className="bg-[#FFD9A0] rounded-[10px] px-4 py-3 text-[#BF6300]">
                  Menunggu Konfirmasi
                </h6> */}
                <button className="lg-btn-secondary-stroke">Detail Keterampilan</button>

                <button className="lg-btn-secondary">Detail Keterampilan</button>
              </div>
            </div>

           
          </div>
        </div>
      </div>
    </>
  );
}

export default SkillsSwap;

import styles from "../../assets/Skills.module.css";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { useSelector } from "react-redux";
import SwapCard from "./SwapCard";
import SwapNav from "./SwapNav";
import CardReceive from "./CardReceive";

function SkillsSwap() {
  const { skillSwap } = useSelector((state) => state.skills);
  const { loggedInUser } = useSelector((state) => state.users);


  
   // Filter untuk permintaan yang diajukan oleh user
   const requestedSkills = skillSwap.filter(
    (skills) => skills.id_requester === loggedInUser.id
  );

  // Filter untuk permintaan yang diterima oleh user
  const receivedSkills = skillSwap.filter(
    (skills) => skills.id_receiver === loggedInUser.id
  );

 

  return (
    <>
      <div className="wrapper w-full bg-[#BA324F] rounded-b-[50px] flex flex-col gap-3 justify-center items-center ">
        <div
          className={`${styles["skills-header"]} container flex flex-col gap-3 `}>
          <h1>Pertukaran AKtif</h1>
          <p>
            Lihat semua pertukaran keterampilan yang sedang berlangsung. Kelola
            sesi, akses materi, dan pastikan pengalaman belajar Anda berjalan
            lancar.
          </p>
        </div>
      </div>

      {/* <SwapNav /> */}

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

          {/* <div
            className={`${styles["skills-content"]} mt-10 flex gap-5 mx-3 flex-wrap`}>
            {!skillSwap || skillSwap.length === 0 ? (
              <h1>Belum Ada Keterampilan yang ingin ditukar</h1>
            ) : (
              skillSwap.map((skills) => {
                if (skills.id_requester === loggedInUser.id) {
                  return <SwapCard list={skills} key={skills.id_request} />;
                } else if (skills.id_receiver === loggedInUser.id) {
                  return <CardReceive list={skills} key={skills.id_request} />;
                } else {
                  return null;
                }
              })
            )}
          </div> */}

            {/* Menampilkan permintaan yang diajukan */}
            <div className="mt-10">
            <h2 className="text-lg font-bold mb-4">Permintaan yang Diajukan</h2>
            <div className="flex gap-5 flex-wrap">
              {!requestedSkills.length ? (
                <h1>Belum ada keterampilan yang Anda ajukan.</h1>
              ) : (
                requestedSkills.map((skills) => (
                  <SwapCard list={skills} key={skills.id_request} />
                ))
              )}
            </div>
          </div>

          {/* Menampilkan permintaan yang diterima */}
          <div className="mt-10">
            <h2 className="text-lg font-bold mb-4">Permintaan yang Diterima</h2>
            <div className="flex gap-5 flex-wrap">
              {!receivedSkills.length ? (
                <h1>Belum ada keterampilan yang Anda terima.</h1>
              ) : (
                receivedSkills.map((skills) => (
                  <CardReceive list={skills} key={skills.id_request} />
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SkillsSwap;

import styles from "../../assets/Skills.module.css";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import CardSkills from "./CardSkills";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Keterampilan() {
   const { postskills,
    users,
    isLoggedin,
    loggedInUser,} =useSelector((state)=>state.skills)

  return (
    <>
      <div className="wrapper w-full bg-[#BA324F] rounded-b-[50px] flex flex-col gap-3 justify-center items-center ">
        <div
          className={`${styles["skills-header"]} container flex flex-col gap-3 `}>
          <h1>Eksplor Keterampilan</h1>
          <p>
            Temukan keterampilan baru yang bisa Anda pelajari dari sesama
            perempuan! Pilih keterampilan yang menarik minat Anda, ajukan
            pertukaran, dan mulai belajar hari ini
          </p>
        </div>
      </div>

      <div className="wrapper container">
        <div className={`${styles["skills-section"]} `}>
          <div
            className={`${styles["skills-heading"]} flex justify-between items-center `}>
            <h1>Jelajahi Keterampilan dari Sesama Perempuan</h1>
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-[#BA324F] px-3 py-3 text-sm font-semibold text-white shadow-sm ">
                  Kategori Keterampilan
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

          <div className="my-2 flex flex-col justify-center items-center gap-5">
          <button className="lg-btn-secondary"><Link to="/formskills">Posting Keterampilan</Link></button>

            <p className="text-[#BA324F]">
              Bagikan keterampilan yang kamu kuasai untuk ditukar dengan sesama.{" "}
            </p>

          </div>

          <div
            className={`${styles["skills-content"]} mt-10 flex gap-5 mx-3 flex-wrap `}>
           
           {postskills == "" ?  <h1 className="font-bold text-[1.3rem] text-center text-black">Belum Ada Keterampilan yang Bisa Ditukar</h1> :
           postskills.map((item)=>(
            <CardSkills skills={item} key={item.id_post_skills}/>

           ))
           }
      
          </div>
        </div>
      </div>
    </>
  );
}

export default Keterampilan;

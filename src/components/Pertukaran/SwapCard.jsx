import styles from "../../assets/Skills.module.css";

function SwapCard ({list}) {
    return(
        <>
          <div className={`${styles["skills-card"]}`}>
              <div
                className={`px-4 py-5 rounded-t-[10px]
            border-2 border-x-[#BA324F] border-t-[#BA324F] border-b-0`}>
                <div className={`flex justify-between `}>
                  <div className={`flex flex-col gap-1`}>
                  <h4 className="text-[1rem]">
                      Nama Mitra : <span className="text-[#BA324F] font-bold text-[1rem]">{list.fullname_receiver}</span>
                    </h4>
                    <p className="text-[#8C8C8C]">{list.createdate}</p>
                  </div>

                  <div
                    className={`px-2 py-3 bg-[#F8EBED] flex justify-center rounded-[10px] items-center`}>
                    <h6 className="font-bold text-[#BA324F]">
                      {list.skill_rev_cat}
                    </h6>
                  </div>
                </div>

                <div className={`mt-3 flex gap-3 flex-col `}>
                  <h4 className="font-bold text-[1.2rem]">{list.skill_rev_name}</h4>
                  <p className="font-[400]">
                   Metode Pertukaran : <span className="text-[#BA324F]">{list.skillMethod}</span>
                  </p>
                  <p className="font-[400]">
                   Jadwal Sesi : <span className="text-[#BA324F]">{list.dateSession}</span>
                  </p>
                  <p className="font-[400]">
                   Waktu Sesi : <span className="text-[#BA324F]">{list.timeSession}</span>
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

                <button className="lg-btn-secondary">Edit Keterampilan</button>
              </div>
            </div>
        </>
    )
}

export default SwapCard
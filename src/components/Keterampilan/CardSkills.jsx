import { useNavigate } from "react-router-dom";
import styles from "../../assets/Skills.module.css";


function CardSkills ({skills}){
    const navigate=useNavigate();
 const handleSwap = ()=>{

navigate("/formswap/" + skills.id_post)
 }

 const handleDetail = () => {
    navigate(`/detailskills/${skills.id_post}` )

 }
    
    return(
        <>
         <div className={`${styles["skills-card"]}`}>
              <div
                className={`px-4 py-5 rounded-t-[10px]
            border-2 border-x-[#BA324F] border-t-[#BA324F] border-b-0`}>
                <div className={`flex justify-between `}>
                  <div className={`flex flex-col gap-1`}>
                    <h4 className="text-[#BA324F] font-bold text-[1rem]">
                      {skills.fullname}
                    </h4>
                    <p className="text-[#8C8C8C]">{skills.createdate}</p>
                  </div>

                  <div
                    className={`px-2 py-3 bg-[#F8EBED] flex justify-center rounded-[10px] items-center`}>
                    <h6 className="font-bold text-[#BA324F]">
                      {skills.skillCategory}
                    </h6>
                  </div>
                </div>

                <div className={`mt-3 flex gap-3 flex-col `}>
                  <h4 className="font-bold text-[1.2rem]">{skills.skillName}</h4>
                  <p className="text-[#8C8C8C]">
                {skills.skillDesc}
                  </p>
                </div>
              </div>
              <div
                className={`bg-[#FCF6F8] rounded-b-[10px] border-2 border-t-0 border-b-[#BA324F] border-x-[#BA324F] px-4 py-2 flex justify-between items-center `}>
                <button onClick={handleDetail}  className="lg-btn-secondary-stroke">
                  Detail Keterampilan
                </button>
                <button onClick={handleSwap} className="lg-btn-secondary">Ajukan Pertukaran</button>
              </div>
            </div>
        </>
    )
}

export default CardSkills
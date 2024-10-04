import { Link } from "react-router-dom";
import styles from "../../assets/Landing.module.css";
import foto from "../../foto/hero-img.png";
function Hero() {
  return (
    <>
      <div className={`${styles["hero-section"]} wrapper container`}>
        <div className="flex justify-between flex-wrap items-center gap-20 mx-6">
          <div className={`${styles["hero-info"]}`}>
            <h1 className="font-bolder">
              Belajar dan Bertukar Keterampilan Bersama Sesama Perempuan
            </h1>
            <p>
              <i>#Berkembang Bersama:Belajar, Berbagi dan Memberdayakan!</i>
            </p>

            <h5>Temukan dan Kembangkan Keterampilan Kamu</h5>
            <p>
              Bergabunglah dengan komunitas perempuan yang saling mendukung!
              Ajukan pertukaran keterampilan dengan mudah, pelajari sesuatu yang
              baru, dan berbagi pengetahuan kamu dengan cara yang menyenangkan.
            </p>

            <Link to="/register">
              <button className="lg-btn-secondary mt-6">Mulai Sekarang!</button>{" "}
            </Link>
          </div>

          <div className={`${styles["hero-img"]}`}>
            <img src={foto} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;

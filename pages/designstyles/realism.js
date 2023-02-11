import styles from "@/styles/realism.module.css";
// import Image from "../../assets/pmvchamara.jpg";
import Image from "next/image";

export default function Realism() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.logo}>
          C <div className={styles.lword}>L</div>OCKS
        </div>
        <div className={styles.middle}></div>
        <div className={styles.actionbuttonswrapper}>
          <ul className={styles.actionbuttons}>
            <li>
              <a>Explore</a>
            </li>
            <li>
              <a>About Us</a>
            </li>
            <li>
              <a>Careers</a>
            </li>
            <li>
              <button>SignUp / Login</button>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.sloganwrapper}>
        <h1 className={styles.slogan}>If you dont have time ..well We do</h1>
        <button className={styles.buybutton}>Buy Yours now</button>
      </div>
      <div className={styles.imagewrapper}>
        <img className={styles.bkimage} src="/clock.jpg" />
      </div>
    </div>
  );
}

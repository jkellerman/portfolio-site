import Image from "next/image";
import styles from "../Spheres/Spheres.module.css";
import img from "@/public/assets/sphere.webp";

const Spheres = ({ about }) => {
  return (
    <>
      <div className={styles.sphere}></div>
      <div className={styles.sphere}>
        <Image src={img} alt="" />
      </div>
      <div className={styles.sphere}>
        <Image src={img} alt="" />
      </div>
      <div className={styles.sphere}></div>
    </>
  );
};

export default Spheres;

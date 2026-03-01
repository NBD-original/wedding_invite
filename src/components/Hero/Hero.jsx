import { motion } from "framer-motion";
import styles from "./Hero.module.css";

import { fadeIn } from "../../animations/fadeIn";
import { cinematicScale } from "../../animations/cinematic";
import { stagger } from "../../animations/reveal";

export default function Hero() {
  return (
    <section className={styles.hero}>
      {/* ✅ фон теперь в отдельном wrap с overflow:hidden */}
      <div className={styles.bgWrap} aria-hidden="true">
        <div className={styles.bg} />
      </div>

      <motion.div
        className={styles.inner}
        variants={stagger(0.12)}
        initial="hidden"
        whileInView="show"
        viewport={{ amount: 0.6, once: false }}
      >
        <motion.img
          className={styles.dateFrame}
          src="images/hero/date-frame.png"
          alt="Дата свадьбы"
          variants={fadeIn({ y: 12, duration: 0.8, delay: 0.05 })}
          draggable="false"
        />

        <motion.img
          className={styles.names}
          src="images/hero/names.png"
          alt="Nikita & Maria"
          variants={cinematicScale({ duration: 1.0, delay: 0.15 })}
          draggable="false"
        />
      </motion.div>
    </section>
  );
}

import { motion } from "framer-motion";
import styles from "./Presence.module.css";

export default function Presence() {
  return (
    <section className={styles.section} id="presence">
      {/* фон + угловые орнаменты */}
      <div className={styles.pattern} aria-hidden="true" />

      <div className={styles.stage}>
        <motion.div
          className={styles.card}
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.3, once: false }}
          transition={{ duration: 0.9, ease: [0.2, 0.9, 0.2, 1] }}
        >
          {/* ✅ Заголовок-картинка как на макете */}
          <motion.img
            className={styles.titleImg}
            src="images/presence/presence-title.png"
            alt="Presence"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.35, once: false }}
            transition={{ duration: 0.8, ease: [0.2, 0.9, 0.2, 1] }}
            draggable="false"
          />

          {/* ✅ Текст строго по центру */}
          <motion.p
            className={styles.text}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.35, once: false }}
            transition={{
              duration: 0.8,
              delay: 0.05,
              ease: [0.2, 0.9, 0.2, 1],
            }}
          >
            Дорогие гости!
            <br />
            <br />
            Будем искренне признательны,
            <br />
            если вы сообщите о своём
            <br />
            присутствии на нашем
            <br />
            торжестве до <b>28.02</b>, заполнив
            <br />
            анкету ниже.
          </motion.p>

          {/* ✅ Стрелка ВНУТРИ рамки (как на макете) */}
          <div className={styles.innerArrow} aria-hidden="true">
            <span className={styles.innerArrowIcon} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
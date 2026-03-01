// Gallery.jsx
import { motion } from "framer-motion";
import styles from "./Gallery.module.css";
import { fadeIn } from "../../animations/fadeIn";

export default function Gallery() {
  return (
    <section className={styles.section} id="gallery">
      <div className={styles.media}>
        {/* Картинка на всю ширину */}
        <img
          className={styles.poster}
          src="/images/gallery/bg.png"
          alt="Финальный экран"
          draggable="false"
        />

        {/* Текст поверх */}
        <motion.div
          className={styles.overlay}
          variants={fadeIn({ y: 8, duration: 0.8 })}
          initial="hidden"
          whileInView="show"
          viewport={{ amount: 0.35, once: false }}
        >
          {/* Контакты: слева */}
          <div className={styles.contacts}>
            <div className={styles.contactsTitle}>Контакты:</div>

            <div className={styles.line}>
              Невеста:{" "}
              <a className={styles.phone} href="tel:+79818395943">
                +7 981 839 59 43
              </a>
            </div>

            <div className={styles.line}>
              Жених:{" "}
              <a className={styles.phone} href="tel:+79643606892">
                +7 964 360 68 92
              </a>
            </div>
          </div>

          {/* Благодарность: снизу по центру */}
          <div className={styles.thanks}>
            {/* ✅ картинка над текстом */}
            <img
              className={styles.thanksArt}
              src="/images/gallery/Group.png"
              alt=""
              draggable="false"
            />

            <div className={styles.thanksText}>С нетерпением ждем Вас!</div>
          </div>

          {/* Авторство: слева снизу */}
          <div className={styles.footer}>
            <div>Дизайнер: Некерова Мария</div>
            <div>Разработчик: Бушуев Никита</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
import { motion } from "framer-motion";
import styles from "./DressCode.module.css";
import DressCodeFilmRow from "./DressCodeFilmRow";

export default function DressCode() {
  return (
    <section className={styles.section} id="dresscode">
      {/* Верхняя композиция (кружево+ткань+заголовок+текст+стрелка) */}
      <div className={styles.stage}>
        <motion.img
          className={styles.topArt}
          src="images/dresscode/top.png"
          alt=""
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.25, once: false }}
          transition={{ duration: 0.9, ease: [0.2, 0.9, 0.2, 1] }}
          draggable="false"
        />

        <div className={styles.inner}>
          <motion.img
            className={styles.title}
            src="images/dresscode/dresscode-title.png"
            alt="Dress-code"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.3, once: false }}
            transition={{ duration: 0.9, ease: [0.2, 0.9, 0.2, 1] }}
            draggable="false"
          />

          <motion.p
            className={styles.text}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.3, once: false }}
            transition={{ duration: 0.8, delay: 0.05, ease: [0.2, 0.9, 0.2, 1] }}
          >
            Дорогие гости, цветовая палитра остаётся на Ваше усмотрение, однако мы
            будем рады, если в своих образах Вы вдохновитесь эстетикой винтажного кино.
          </motion.p>

          <motion.div
            className={styles.hint}
            aria-hidden="true"
            initial={{ opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.35, once: false }}
            transition={{ duration: 0.6, ease: [0.2, 0.9, 0.2, 1] }}
          >
            <div className={styles.pill}>
              <motion.span
                className={styles.arrow}
                animate={{ x: [0, 6, 0] }}
                transition={{ duration: 1.1, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Ленты */}
      <div className={styles.films}>
        <DressCodeFilmRow
          title="Women"
          photos={[
            "images/dresscode/women/01.jpg",
            "images/dresscode/women/02.jpg",
            "images/dresscode/women/03.jpg",
            "images/dresscode/women/04.jpg",
          ]}
          speed={18}
        />

        <DressCodeFilmRow
          title="Men"
          photos={[
            "images/dresscode/men/01.jpg",
            "images/dresscode/men/02.jpg",
            "images/dresscode/men/03.jpg",
            "images/dresscode/men/04.jpg",
          ]}
          speed={20}
          reverse
        />
      </div>
    </section>
  );
}

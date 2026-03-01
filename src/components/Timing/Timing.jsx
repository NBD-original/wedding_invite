import { motion } from "framer-motion";
import styles from "./Timing.module.css";
import { cinematicScale } from "../../animations/cinematic";
import { fadeIn } from "../../animations/fadeIn";

const timelineContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const timelineItem = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.2, 0.9, 0.2, 1] },
  },
};


function TimelineItem({ time, title, text = [] }) {
  return (
    <motion.div className={styles.item} variants={timelineItem}>
      <div className={styles.head}>
        <div className={styles.time}>{time}</div>
        <div className={styles.titleText}>{title}</div>
      </div>

      {text.length > 0 && (
        <div className={styles.textBlock}>
          {text.map((line, i) => (
            <div key={i} className={styles.textLine}>
              <span className={styles.pin} aria-hidden="true">📍</span>
              <span>{line}</span>
            </div>
          ))}
        </div>
      )}
    </motion.div>
  );
}
export default function Timing() {
  return (
    <section className={styles.section} id="timing">
      {/* Свет картинкой */}
      <motion.img
        className={styles.light}
        src="/images/timing/light.png"
        alt=""
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ amount: 0.25, once: false }}
        transition={{ duration: 0.9, ease: [0.2, 0.9, 0.2, 1] }}
        draggable="false"
      />

      {/* Заголовок + кресла */}
      <div className={styles.stage}>
        <motion.img
          className={styles.title}
          src="/images/timing/timing-title.png"
          alt="Timing"
          variants={cinematicScale({ duration: 1 })}
          initial="hidden"
          whileInView="show"
          viewport={{ amount: 0.4, once: false }}
          draggable="false"
        />

        <motion.img
          className={styles.seats}
          src="/images/timing/seats.png"
          alt=""
          variants={fadeIn({ y: 18, duration: 0.9 })}
          initial="hidden"
          whileInView="show"
          viewport={{ amount: 0.25, once: false }}
          draggable="false"
        />
      </div>

      {/* ✅ Белая зона начинается тут и продолжается ниже */}
      <motion.div
        className={styles.timeline}
        variants={timelineContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ amount: 0.25, once: false }}
      >
        <div className={styles.timelineInner}>
          <TimelineItem
            time="12:00"
            title="Трансфер"
            text={[
              "Гатчина, д. Большая Ивановка, массив Западный, д. 123",
              "Тельмана, ул. Онежская 1 (напротив отеля «Онегин»)",
            ]}
          />

          <TimelineItem
            time="13:30"
            title="Фуршет"
            text={["Таврический сад, ул. Потемкинская, 4А"]}
          />

          <TimelineItem time="14:00" title="Выездная регистрация" />
          <TimelineItem time="15:00" title="Банкет" />

          <TimelineItem
            time="23:00"
            title="Трансфер"
            text={["Привезёт на ту локацию, с которой забрал"]}
          />
        </div>
        <motion.div
          className={styles.scrollHint}
          aria-hidden="true"
          initial={{ opacity: 0, y: 6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.35, once: false }}
          transition={{ duration: 0.6, ease: [0.2, 0.9, 0.2, 1] }}
        >
          <div className={styles.pill}>
            <motion.span
              className={styles.arrow}
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.1, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

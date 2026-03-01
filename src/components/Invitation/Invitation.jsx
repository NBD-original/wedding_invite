import { motion } from "framer-motion";
import styles from "./Invitation.module.css";
import { fadeIn } from "../../animations/fadeIn";

export default function Invitation() {
  return (
    <section className={styles.section}>
      <div className={styles.stage}>
        {/* Рука + карточка: выезжает слева */}
        <motion.img
          className={styles.hand}
          src="/images/invitation/hand-card.png"
          alt="Приглашение"
          initial={{ x: -140, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ amount: 0.3, once: false }}
          transition={{
            duration: 1,
            ease: [0.2, 0.9, 0.2, 1],
          }}
          draggable="false"
        />


        {/* Рамка с фото: мягкое появление */}
        <motion.img
          className={styles.frame}
          src="/images/invitation/photo-frame.png"
          alt="Фото"
          variants={fadeIn({ y: 16, duration: 0.9 })}
          initial="hidden"
          whileInView="show"
          viewport={{ amount: 0.35, once: false }}
          draggable="false"
        />

        {/* Билеты: появление снизу слева */}
        <motion.img
          className={styles.tickets}
          src="/images/invitation/tickets.png"
          alt=""
          initial={{ y: 18, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ amount: 0.35, once: false }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.2, 0.9, 0.2, 1] }}
          draggable="false"
        />

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

      </div>
    </section>
  );
}

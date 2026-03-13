import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Form.module.css";

const MAX_DRINKS = 3;

// ✅ твой Web App URL
const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbxpme3RFKci-3afXY6TJ0VvY3KqgQ5dTwJ_l618xOg4r8ZOuEjewJc81wN-DWO5GDbL/exec";

export default function GuestForm() {
  const [fullname, setFullname] = useState("");
  const [attendance, setAttendance] = useState(""); // "", "yes", "no"
  const [transfer, setTransfer] = useState(""); // "", "yes", "no"
  const [toast, setToast] = useState(""); // "", "yes", "no"
  const [drinks, setDrinks] = useState([]); // ["wine", "vodka", ...]

  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState(null); // null | "ok" | "error"

  const showDetails = attendance === "yes";

  // ✅ лимит + toggle
  function toggleDrink(value) {
    setDrinks((prev) => {
      const has = prev.includes(value);
      if (has) return prev.filter((x) => x !== value);
      if (prev.length >= MAX_DRINKS) return prev; // лимит
      return [...prev, value];
    });
  }

  // если выбрали "не смогу" — очищаем доп.поля
  function onAttendanceChange(val) {
    setAttendance(val);
    if (val !== "yes") {
      setTransfer("");
      setToast("");
      setDrinks([]);
    }
  }

  async function onSubmit(e) {
    e.preventDefault();
    setStatus(null);

    // минимальная валидация
    if (!fullname.trim() || !attendance) {
      setStatus("error");
      return;
    }

    try {
      setSending(true);

      // ✅ отправляем form-urlencoded (без preflight)
      const body = new URLSearchParams();
      body.append("fullname", fullname.trim());
      body.append("attendance", attendance);
      body.append("transfer", showDetails ? transfer : "");
      body.append("toast", showDetails ? toast : "");
      (showDetails ? drinks : []).forEach((d) => body.append("drink", d));

      const res = await fetch(SCRIPT_URL, {
        method: "POST",
        body,
      });

      if (!res.ok) throw new Error(`HTTP ${res.status}`);

      setStatus("ok");

      // очистка
      setFullname("");
      setAttendance("");
      setTransfer("");
      setToast("");
      setDrinks([]);
    } catch (err) {
      console.error(err);
      setStatus("error");
    } finally {
      setSending(false);
    }
  }

  return (
    <section className={styles.section} id="form">
      <div className={styles.pattern} aria-hidden="true">
        <img src="images/form/wedding.svg" className={`${styles.word} ${styles.w1}`} />
        <img src="images/form/wedding.svg" className={`${styles.word} ${styles.w2}`} />
        <img src="images/form/wedding.svg" className={`${styles.word} ${styles.w3}`} />
        <img src="images/form/wedding.svg" className={`${styles.word} ${styles.w4}`} />
        <img src="images/form/wedding.svg" className={`${styles.word} ${styles.w5}`} />
        <img src="images/form/wedding.svg" className={`${styles.word} ${styles.w6}`} />
        <img src="images/form/wedding.svg" className={`${styles.word} ${styles.w7}`} />
        <img src="images/form/wedding.svg" className={`${styles.word} ${styles.w8}`} />
        <img src="images/form/wedding.svg" className={`${styles.word} ${styles.w9}`} />
        <img src="images/form/wedding.svg" className={`${styles.word} ${styles.w10}`} />
      </div>
      <div className={styles.inner}>
      <motion.div
        className={styles.title}
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.35, once: false }}
        transition={{ duration: 0.8 }}
      >
        <span className={styles.titleGuest}>Guest</span>
        Form
      </motion.div>

        {/* ✅ добавили onSubmit */}
        <form className={styles.form} onSubmit={onSubmit}>
          {/* Имя */}
          <label className={styles.field}>
            <input
              className={styles.input}
              type="text"
              name="fullname"
              placeholder="Имя Фамилия"
              autoComplete="name"
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
            />
          </label>

          {/* Присутствие */}
          <div className={styles.field}>
            <input
              className={styles.input}
              type="text"
              value="Ваше присутствие на свадьбе"
              readOnly
            />

            <div className={styles.checkRow}>
              <label className={styles.check}>
                <input
                  type="radio"
                  name="attendance"
                  value="yes"
                  checked={attendance === "yes"}
                  onChange={() => onAttendanceChange("yes")}
                />
                <span>Я буду</span>
              </label>

              <label className={styles.check}>
                <input
                  type="radio"
                  name="attendance"
                  value="no"
                  checked={attendance === "no"}
                  onChange={() => onAttendanceChange("no")}
                />
                <span>Не смогу</span>
              </label>
            </div>
          </div>

          {/* Остальные вопросы — только если "Я буду" */}
          <AnimatePresence initial={false}>
            {showDetails && (
              <motion.div
                key="details"
                className={styles.details}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                transition={{ duration: 0.35 }}
              >
                {/* Трансфер */}
                <div className={styles.field}>
                  <input
                    className={styles.input}
                    type="text"
                    value="Понадобится ли Вам трансфер?"
                    readOnly
                  />

                  <div className={styles.checkRow}>
                    <label className={styles.check}>
                      <input
                        type="radio"
                        name="transfer"
                        value="yes"
                        checked={transfer === "yes"}
                        onChange={() => setTransfer("yes")}
                      />
                      <span>Да</span>
                    </label>

                    <label className={styles.check}>
                      <input
                        type="radio"
                        name="transfer"
                        value="no"
                        checked={transfer === "no"}
                        onChange={() => setTransfer("no")}
                      />
                      <span>Нет</span>
                    </label>
                  </div>
                </div>

                {/* Алкоголь */}
                <div className={styles.field}>
                  <input
                    className={styles.input}
                    type="text"
                    value="Что предпочитаете из алкогольных напитков?"
                    readOnly
                  />

                  <div className={styles.checkGrid}>
                    {[
                      { value: "none", label: "Я не пью" },
                      { value: "vodka", label: "Vodka" },
                      { value: "wine", label: "Вино" },
                      { value: "champagne", label: "Шампанское" },
                      { value: "whisky", label: "Whisky" },
                    ].map((item) => (
                      <label key={item.value} className={styles.check}>
                        <input
                          type="checkbox"
                          name="drink"
                          value={item.value}
                          checked={drinks.includes(item.value)}
                          onChange={() => toggleDrink(item.value)}
                        />
                        <span>{item.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Тост */}
                <div className={styles.field}>
                  <input
                    className={styles.input}
                    type="text"
                    value="Хотели бы произнести тост на банкете молодых?"
                    readOnly
                  />

                  <div className={styles.checkRow}>
                    <label className={styles.check}>
                      <input
                        type="radio"
                        name="toast"
                        value="yes"
                        checked={toast === "yes"}
                        onChange={() => setToast("yes")}
                      />
                      <span>Да</span>
                    </label>

                    <label className={styles.check}>
                      <input
                        type="radio"
                        name="toast"
                        value="no"
                        checked={toast === "no"}
                        onChange={() => setToast("no")}
                      />
                      <span>Нет</span>
                    </label>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <motion.button
            type="submit"
            className={styles.submit}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.2 }}
            disabled={sending}
            style={{ opacity: sending ? 0.6 : 1 }}
          >
            {sending ? "Отправка..." : "Отправить"}
          </motion.button>

          {/* Статус */}
            {status && (
              <motion.div
                className={`${styles.message} ${
                  status === "ok" ? styles.success : styles.error
                }`}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                {status === "ok" ? (
                  <>
                    Благодарим за ответ 🤍
                    <br />
                    Нам очень приятно, что вы нашли время заполнить анкету.
                  </>
                ) : (
                  <>
                    Пожалуйста, укажите ваше имя и выберите вариант присутствия,
                    чтобы мы могли всё корректно учесть 🤍
                  </>
                )}
              </motion.div>
            )}
            <p className={styles.footerNote}>
              С нетерпением ждём вас на свадьбе 🤍
            </p>
        </form>
      </div>
    </section>
  );
}
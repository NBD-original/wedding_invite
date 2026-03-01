import styles from "./DressCodeFilmRow.module.css";

function buildUnitsDoubleOnly(photos) {
  const units = [];
  for (let i = 0; i < photos.length; i += 2) {
    // гарантируем 2 фото (если вдруг одно — зациклить/повторить)
    const a = photos[i];
    const b = photos[i + 1] ?? photos[i];
    units.push([a, b]);
  }
  return units;
}

export default function DressCodeFilmRow({
  title = "Women",
  photos = [],
  speed = 18,
  reverse = false,
}) {
  const units = buildUnitsDoubleOnly(photos); // <-- всегда пары
  const loopUnits = [...units, ...units];     // бесконечность

  return (
    <div className={styles.row}>
      <div className={styles.rowHead}>
        <div className={styles.rowTitle}>{title}</div>
      </div>

      <div
        className={styles.loop}
        style={{
          ["--speed"]: `${speed}s`,
          ["--dir"]: reverse ? "reverse" : "normal",
        }}
      >
        <div className={styles.track}>
          {loopUnits.map(([pA, pB], idx) => (
            <div key={idx} className={styles.unit}>
              {/* Окна */}
              <div className={styles.p1}>
                <img src={pA} alt="" draggable="false" />
              </div>
              <div className={styles.p2}>
                <img src={pB} alt="" draggable="false" />
              </div>

              {/* Одна рамка на 2 фото */}
              <img
                className={styles.frame}
                src="/images/dresscode/frames/frame-2.png"
                alt=""
                draggable="false"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

'use client';

import { useEffect, useState } from 'react';
import styles from './index.module.css';   // ⬅️ create the CSS file below

const TOTAL_FACES = 5;

export default function MiniconLogo() {
  const [faceIndex, setFaceIndex] = useState(0);           // 0-based

  /* ---------------- rotate faces every 3 s ---------------- */
  useEffect(() => {
    const id = setInterval(
      () => setFaceIndex((prev) => (prev + 1) % TOTAL_FACES),
      3000
    );
    return () => clearInterval(id);
  }, []);

  return (
    <div className={styles.container}>
      <svg
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.svg}
      >
        <g>
          {/* rounded square */}
          <rect
            x="0"
            y="0"
            width="100"
            height="100"
            rx="20"
            ry="20"
            fill="none"
            stroke="white"
            strokeWidth="10"
          />

          {/* WINK 😉 ------------------------------------------------------- */}
          {faceIndex === 0 && (
            <g className={styles.face}>
              <text
                x="25"
                y="40"
                fontFamily="Arial"
                fontSize="20"
                fill="white"
              >
                {'>'}
              </text>
              <circle cx="70" cy="35" r="5" fill="white" />
              <path
                d="M30 70 Q50 90 70 70"
                stroke="white"
                strokeWidth="5"
                fill="none"
              />
            </g>
          )}

          {/* UNAMUSED 😒 --------------------------------------------------- */}
          {faceIndex === 1 && (
            <g className={styles.face}>
              <circle cx="25" cy="35" r="5" fill="white" />
              <circle cx="70" cy="35" r="5" fill="white" />
              <path
                d="M30 65 Q50 60 70 65"
                stroke="white"
                strokeWidth="4"
                fill="none"
              />
            </g>
          )}

          {/* COOL 😎 -------------------------------------------------------- */}
          {faceIndex === 2 && (
            <g className={styles.face}>
              <rect x="18" y="28" width="20" height="10" fill="white" />
              <rect x="62" y="28" width="20" height="10" fill="white" />
              <line
                x1="38"
                y1="33"
                x2="62"
                y2="33"
                stroke="white"
                strokeWidth="3"
              />
              <path
                d="M30 70 Q50 90 70 70"
                stroke="white"
                strokeWidth="5"
                fill="none"
              />
            </g>
          )}

          {/* SURPRISED 😲 --------------------------------------------------- */}
          {faceIndex === 3 && (
            <g className={styles.face}>
              <circle cx="25" cy="35" r="5" fill="white" />
              <circle cx="70" cy="35" r="5" fill="white" />
              <circle cx="50" cy="70" r="6" fill="white" />
            </g>
          )}

          {/* LAUGHING 😂 ---------------------------------------------------- */}
          {faceIndex === 4 && (
            <g className={styles.face}>
              <path
                d="M22 35 Q25 30 28 35"
                stroke="white"
                strokeWidth="3"
                fill="none"
              />
              <path
                d="M67 35 Q70 30 73 35"
                stroke="white"
                strokeWidth="3"
                fill="none"
              />
              <path
                d="M30 65 Q50 85 70 65"
                stroke="white"
                strokeWidth="5"
                fill="none"
              />
              <circle cx="20" cy="60" r="3" fill="white" />
              <circle cx="80" cy="60" r="3" fill="white" />
            </g>
          )}
        </g>
      </svg>

      <div className={styles.logoText}>MINICON</div>
    </div>
  );
}

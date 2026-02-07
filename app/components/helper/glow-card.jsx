"use client";

import { useEffect } from "react";

export default function GlowCard({ children, identifier }) {

  useEffect(() => {
    const container = document.querySelector(`.glow-container-${identifier}`);
    const cards = document.querySelectorAll(`.glow-card-${identifier}`);

    const UPDATE = (event) => {
      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();

        if (
          event.clientX > rect.left &&
          event.clientX < rect.right &&
          event.clientY > rect.top &&
          event.clientY < rect.bottom
        ) {
          card.style.setProperty("--active", 1);
        } else {
          card.style.setProperty("--active", 0);
        }
      });
    };

    document.body.addEventListener("pointermove", UPDATE);

    return () => {
      document.body.removeEventListener("pointermove", UPDATE);
    };
  }, [identifier]);

  return (
    <div className={`glow-container-${identifier}`}>
      <div className={`glow-card-${identifier}`}>
        {children}
      </div>
    </div>
  );
}

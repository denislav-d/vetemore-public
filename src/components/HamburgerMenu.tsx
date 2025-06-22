import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import "@/styles/components/_hamburger-menu.scss";

const pathVariants1 = {
  open: { d: "M3.06061 2.99999L21.0606 21" },
  closed: { d: "M0 9.5L24 9.5" },
};

const pathVariants2 = {
  open: { d: "M3.00006 21.0607L21 3.06064" },
  moving: { d: "M0 14.5L24 14.5" },
  closed: { d: "M0 14.5L24 14.5" },
};

const navItems = [
  { id: 1, title: "Brands" },
  { id: 2, title: "Designers" },
  { id: 3, title: "Journal" },
  { id: 4, title: "About" },
];

const navEssentials = [
  { id: 1, title: "Login" },
  { id: 2, title: "Search" },
  { id: 3, title: "Cart" },
];

export default function HamburgerMenu() {
  const [animation, setAnimation] = useState("closed");
  const onClick = () => {
    setAnimation("moving");
    setTimeout(() => {
      setAnimation(animation === "closed" ? "open" : "closed");
    }, 200);
  };

  return (
    <>
      <AnimatePresence>
        {animation === "open" && (
          <motion.nav
            className="hamburger-menu"
            key="navmenu"
            initial={{ opacity: 0, x: 175, y: -175 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            exit={{ opacity: 0, x: 175, y: -175 }}
            transition={{
              duration: 0.25,
              velocity: 100,
            }}
          >
            {/* TODO! Fix and optimise below this line! */}
            {navItems.map((item) => (
              <a
                key={item.id}
                className="cursor-pointer text-5xl font-medium tracking-tight opacity-60 hover:opacity-100 transition-all duration-300"
              >
                {item.title}
              </a>
            ))}
            <br />
            {navEssentials.map((item) => (
              <a
                key={item.id}
                className="cursor-pointer text-5xl font-medium tracking-tight opacity-60 hover:opacity-100 transition-all duration-300"
              >
                {item.title}
              </a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>

      <button className="hamburger-menu__button" onClick={onClick}>
        <svg width="24" height="24" viewBox="0 0 24 24">
          <motion.path
            strokeWidth="1.75"
            stroke="#1A1313"
            animate={animation}
            variants={pathVariants1}
          />
          <motion.path
            strokeWidth="1.75"
            stroke="#1A1313"
            animate={animation}
            variants={pathVariants2}
          />
        </svg>
      </button>
    </>
  );
}

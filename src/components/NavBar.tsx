import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navItems, navEssentials, type NavItem } from "@/data/content";

import "@/styles/components/_navbar.scss";

interface NavItemProps {
  items: NavItem[];
}

export default function NavBar() {
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);

  useEffect(() => {
    let prevScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsNavbarVisible(currentScrollY <= prevScrollY);
      prevScrollY = currentScrollY;
    };

    window.onscroll = handleScroll;

    return () => {
      window.onscroll = null;
    };
  }, []);

  const animationVariants = {
    hidden: { y: -100 },
    visible: { y: 0 },
  };

  return (
    <AnimatePresence>
      {isNavbarVisible && (
        <motion.nav
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={animationVariants}
          transition={{ duration: 0.55 }}
          className="navbar"
        >
          <NavItemSection items={navItems} />
          <NavItemSection items={navEssentials} />
        </motion.nav>
      )}
    </AnimatePresence>
  );
}

function NavItemSection({ items }: NavItemProps) {
  return (
    <div className="navbar__section">
      {items.map((item) => (
        <a key={item.id} className="navbar__item">
          {item.title}
        </a>
      ))}
    </div>
  );
}

'use client';

import styles from './about.module.css';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section className={`container ${styles.about}`} id="about">
      <motion.h1
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="title"
      >
        About me
      </motion.h1>
      <motion.p
        className={styles.description}
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        viewport={{ once: true }}
      >
        I&apos;m <span className="font-bold underline text-white">Andres Marino</span>, a front-end
        developer from Argentina. i have 23 years old and im passionate about design, photography,
        music, and video games.
      </motion.p>
    </section>
  );
}

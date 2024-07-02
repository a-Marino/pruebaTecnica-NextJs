'use client';

import styles from './interest.module.css';
import { Music, Code, Component, Shirt, Gamepad2, Car } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Interest() {
  return (
    <section className="container" id="interest">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="title mb-10"
      >
        Interests
      </motion.h2>
      <motion.ul
        className={styles.list}
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <li>
          Music <Music />
        </li>
        <li>
          Programing <Code />
        </li>
        <li>
          Design <Component />
        </li>
        <li>
          Clothes <Shirt />
        </li>
        <li>
          Videogames <Gamepad2 />
        </li>
        <li>
          Racing <Car />
        </li>
      </motion.ul>
    </section>
  );
}

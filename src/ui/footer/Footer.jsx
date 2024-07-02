import styles from './footer.module.css';
import { Linkedin, Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <a href="https://andresmarino.vercel.app/" target="_blank">
        Andres Marino
      </a>
      <span>andresmarinolaiolo@hotmail.com</span>
      <div className={styles.icons}>
        <a href="https://www.linkedin.com/in/andres-marino-16ab14202/" target="_blank">
          <Linkedin size={20} />
        </a>
        <a href="https://github.com/a-Marino" target="_blank">
          <Github />
        </a>
      </div>
    </footer>
  );
}

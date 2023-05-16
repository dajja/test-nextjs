import styles from './page.module.css';
import Link from "next/link";

interface buttonChill {
  text: string,
  abc?: number
}
export default function Home() {
  return (
    <main className={styles.main}>
      <App text="click me" />
      <Link href="/about">
        Go to about page
      </Link>
    </main>
  )
}
function App({ text }: buttonChill) {
  return (
    <div>
      <button className={styles.button}>{text}</button>
    </div>
  );
}
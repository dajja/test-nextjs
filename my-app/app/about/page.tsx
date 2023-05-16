import Link from "next/link";
import style from './styles.module.css';
export default function About() {
  // throw new Error('Errrorrrr')
  return (
    <>
      <nav className={style.nav}>about page</nav>
      <Link href="/">
        <button>Go back homepage</button> 
      </Link>
    </>
  )
}

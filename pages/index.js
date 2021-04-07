import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home () {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas"/>
      </Head>
      <div>
        <h1 className={styles.title}>Hello Website</h1>
        <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed eros at nibh tincidunt dictum in vitae massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin nunc mi, sodales et pulvinar a, fermentum fringilla leo. Duis luctus elit ac urna ullamcorper, ullamcorper mollis ante vulputate. Proin dictum, ipsum vitae tempus scelerisque, ligula ex interdum metus, a euismod nunc libero vel neque. Quisque lacus ex, malesuada a condimentum eget, lacinia sit amet risus. Phasellus ligula turpis, cursus eget nisl ac, faucibus fermentum est. Proin sollicitudin, arcu a cursus vehicula, libero massa semper justo, non maximus nulla nibh vel sapien. Sed diam ipsum, porta at condimentum ut, egestas quis eros. Aenean nec nunc neque. In consequat neque a sapien dictum mattis.</p>
        <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed eros at nibh tincidunt dictum in vitae massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin nunc mi, sodales et pulvinar a, fermentum fringilla leo. Duis luctus elit ac urna ullamcorper, ullamcorper mollis ante vulputate. Proin dictum, ipsum vitae tempus scelerisque, ligula ex interdum metus, a euismod nunc libero vel neque. Quisque lacus ex, malesuada a condimentum eget, lacinia sit amet risus. Phasellus ligula turpis, cursus eget nisl ac, faucibus fermentum est. Proin sollicitudin, arcu a cursus vehicula, libero massa semper justo, non maximus nulla nibh vel sapien. Sed diam ipsum, porta at condimentum ut, egestas quis eros. Aenean nec nunc neque. In consequat neque a sapien dictum mattis.</p>
        <Link href='/ninjas'><a className={styles.btn}>See Game List</a></Link>
      </div>
    </>
  )
}

import styles from '../../styles/Ninjas.module.css'
import Link from 'next/link'

export const getStaticProps = async () => {
  const res = await fetch('https://my-json-server.typicode.com/mridhoputra/rn_myfavoritegames/games')
  const data = await res.json()

  return {
    props: { games: data }
  }
}

const Ninjas = ({ games }) => {
  return (
    <div>
      <h1>Hello Ninjas</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed eros at nibh tincidunt dictum in vitae massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin nunc mi, sodales et pulvinar a, fermentum fringilla leo. Duis luctus elit ac urna ullamcorper, ullamcorper mollis ante vulputate. Proin dictum, ipsum vitae tempus scelerisque, ligula ex interdum metus, a euismod nunc libero vel neque. Quisque lacus ex, malesuada a condimentum eget, lacinia sit amet risus. Phasellus ligula turpis, cursus eget nisl ac, faucibus fermentum est. Proin sollicitudin, arcu a cursus vehicula, libero massa semper justo, non maximus nulla nibh vel sapien. Sed diam ipsum, porta at condimentum ut, egestas quis eros. Aenean nec nunc neque. In consequat neque a sapien dictum mattis.</p>
      { games.map((game) => (
        <Link href={'/ninjas/' + game.id} key={game.id}>
          <a className={styles.single}>
            <h3>{game.title}</h3>
          </a>
        </Link>
      ))}
    </div>
  )
}

export default Ninjas

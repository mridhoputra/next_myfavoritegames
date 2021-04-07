import Image from 'next/image'

export const getStaticPaths = async () => {
  const res = await fetch('https://my-json-server.typicode.com/mridhoputra/rn_myfavoritegames/games')
  const data = await res.json()

  const paths = data.map((game) => {
    return {
      params: { id: game.id.toString() }
    }
  })

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async (context) => {
  const id = context.params.id

  const res = await fetch('https://my-json-server.typicode.com/mridhoputra/rn_myfavoritegames/games/' + id)
  const data = await res.json()

  return {
    props: { game: data }
  }
}

const Details = ({ game }) => {
  return (
    <div>
      <h1>Details Page</h1>
      <p>Title : {game.title}</p>
      <img src={game.photo} width={200} height={340} />
      <p>First Impression : {game.first_impression}</p>
      <p>Platform : {game.platform}</p>
      <p>Genres : {game.genres}</p>
    </div>
  )
}

export default Details

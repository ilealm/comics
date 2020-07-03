import Nav from '../components/Nav'
import Link from 'next/link'

function Home(props){
  return (
    <>
      <Nav />      
      <h1>XKCD Comics</h1>
      <p>{ props.comics.length} </p>
      <ul>
        { props.comics.map(comic => <ComicItem comic={comic} />) }
      </ul>
    </>
  )
}

function ComicItem(props) { 
  return (
      <li key={props.comic.num}>
          <Link href="/comics/[id]" as={`/comics/${props.comic.num}`}>
          <a>
              {props.comic.safe_title}
          </a>
          </Link>
          </li>
  )
}

export default Home

export async function getStaticProps(){
  const url = 'http://localhost:3000/api/comics'
  const response = await fetch(url);
  const comics = await response.json();

  return {
    props: {
      comics : comics,
    },
  }
}
import Nav from '../components/Nav'
import Link from 'next/link'

function Home(props){
  return (
    <>
      <head>
          <title> XKCD Comics</title>
          <link rel="stylesheet"
            href="https://bootswatch.com/4/cerulean/bootstrap.min.css" ></link>
      </head>
      <Nav />      
      <br></br>
      <div  className="container">
        <h3>Last title:</h3>
        <p class="text-info">   { props.comics.num} { props.comics.safe_title}  </p>
        <br></br>
        <ul>
          { props.previous.map(id => <ComicItem id={id} />) }
        </ul>
      </div>
      
      
    </>
  )
}

function ComicItem(props) { 
  const id = props.id;
  return (
      <li key={id}>
          <Link href="/comics/[id]" as={`/comics/${id}`}>
          <a>
              {id}
          </a>
          </Link>
          </li>
  )
}

export default Home

export async function getStaticProps(){
  // const url = 'http://localhost:3000/api/comics'
  const url = 'https://xkcd.com/info.0.json'      // this works for one
  // const url = 'https://xkcd.com/614/info.0.json'   // this works for one
  // https://xkcd.com/2326/info.0.json
  const response = await fetch(url);
  const comics = await response.json();

  return {
    props: {
      comics : comics,
      previous: Array.from({length: 10}, (x, i) => comics.num-i)
      // previous: Array.from({length: 10}, (x, i) => comics.num-i-1)
    },
  }
}
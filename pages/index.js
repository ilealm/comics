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
        <h2> { props.comics.safe_title}   </h2>
        <h4> # { props.comics.num}   </h4>
        <br></br>
        {/* <h3>Last title</h3>
        <label class="text-info">   { props.comics.num} { props.comics.safe_title}  </label>         */}
        <div class="alert alert-dismissible alert-danger">
          <img src={props.comics.img}></img>
        </div>
        <br></br>
        <h5>Last 10 titles</h5>
        <ul>
          { props.previous.map(id => <ComicItem id={id} />) }
        </ul>
        {/* <style jsx>{`
            a {
            margin: 20px;
            padding: 20px;            
            }
            body: {
              border: 1px solid #DDD;
              background-color: floralwhite;
            }
        `}</style> */}

      </div>
      
      
    </>
  )
}

function ComicItem(props) { 
  const id = props.id;
  return (
      // <li key={id}>
          <Link key={id} href="/comics/[id]" as={`/comics/${id}`}>
          <a>
            {id}      -         
          </a>
          </Link>
      // </li>
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
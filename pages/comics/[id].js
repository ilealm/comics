import Nav from '../../components/Nav'

export default function ComicDetail(props){
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
          <h3>{props.comics.safe_title}  </h3>    
          <label class="text-success">Num. </label> 
          <label> {props.comics.num} </label>
          <br></br>
          <label class="text-success">Year </label> 
          <label> {props.comics.year} </label>
          <br></br>     
          <p class="text-muted">{props.comics.alt} </p>
          <br></br>
          <div class="alert alert-dismissible alert-danger">
            <img src={props.comics.img}></img>
          </div>
        </div>
        </>
      )
}

export async function getServerSideProps(context){
  // const response = await fetch(`http://localhost:3000/api/comics/${context.params.id}`);
  const url = `https://xkcd.com/${context.params.id}/info.0.json`
  const response = await fetch(url);
  const comics = await response.json();

  return {
    props: {
      comics : comics,
    },
  }
}
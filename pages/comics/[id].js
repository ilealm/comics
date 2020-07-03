export default function ComicDetail(props){
 
    return (
        <>
          <h3>{props.comics.safe_title}  </h3>    
          <label>Num. </label> 
          <label> {props.comics.num} </label>
          <br></br>
          <label>Year. </label> 
          <label> {props.comics.year} </label>
          <br></br>          
          <p> {props.comics.alt} </p>
          <br></br>
          <img src={props.comics.img}></img>
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
export default function ComicDetail(props){
    // return <h3>Im one comic  {props.comics.safe_title} </h3>
    return (
        <>
          <h3>Im one comic </h3>    
          <label> {props.comics.safe_title} </label>
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
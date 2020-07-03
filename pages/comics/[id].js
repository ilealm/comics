export default function ComicDetail(props){
    return <h3>Im one comic  {props.comics.safe_title} </h3>
}

export async function getServerSideProps(context){
  // https://xkcd.com/2326/info.0.json
  const response = await fetch(`http://localhost:3000/api/comics/${context.params.id}`);
  const comics = await response.json();

  return {
    props: {
      comics : comics,
    },
  }
}
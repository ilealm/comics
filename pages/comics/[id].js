export default function ComicDetail(props){
    return <h3>Im one comic  {props.comics.name} </h3>
}

export async function getServerSideProps(context){
  const response = await fetch(`http://localhost:3000/api/comics/${context.params.id}`);
  const comics = await response.json();

  return {
    props: {
      comics : comics,
    },
  }
}
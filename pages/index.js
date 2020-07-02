import Nav from '../components/Nav'

function Home(props){
  return (
    <>
      <Nav />      
      <h1>home</h1>
      <p>{ props.comics.length} </p>
    </>
  )
}

export default Home

export async function getStaticProps(){
  const response = await fetch('http://localhost:3000/api/comics');
  const comics = await response.json();

  return {
    props: {
      comics : comics,
    },
  }
}
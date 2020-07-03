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
  const url = 'http://localhost:3000/api/comics'
  const response = await fetch(url);
  const comics = await response.json();

  return {
    props: {
      comics : comics,
    },
  }
}
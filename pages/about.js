import Nav from '../components/Nav'

function About(){
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
        <h1>About</h1>
        <br></br>
        <p>
          This is a site that displays the last 10 comics published on XKCD Comics. 
        </p>
      </div>

    </>
  )
}

export default About

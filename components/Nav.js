import Link from 'next/link'

function Nav(){
    return(
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="/">XKCD Comics</a>
                <div className="collapse navbar-collapse" id="navbarColor02">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/about">About</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

// ---
// <div className="container">
// <a className="navbar-brand" href="#"> XKCD Comics  </a>
// <div className="collapse navbar-collapse">
//     <ul className="navbar-nav ml-auto">
//         <li className="nav-item">
//             <Link href="/">
//                 <a>Home</a>
//             </Link>
//         </li>
//         <li className="nav-item">
//             <Link href="/about">
//                 <a>About</a>
//             </Link>
//         </li>
//     </ul>
// </div>
// </div>
// ---





export default Nav
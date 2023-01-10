import "./navbar.css"


function Navbar(props){
    
    return(
        <>
              {/* nav bar */}
            <nav id="nav-top" className="navbar navbar-expand-sm navbar-dark bg-dark" aria-label="Third navbar example">
                <div className="container-fluid">
                {/* <a>spacebun</a>
                <img className="logo" src="images/spacebun_logo_h-200px.png" alt='...'/>  */}
                {/* <a className="navbar-brand navlogo" type="button"> <p>SpaceBun</p>  <img className="logo" src="images/spacebun_logo_h-200px.png" alt='...'/> </a> */}

                <a class="navbar-brand" href="#">SpaceBun</a>
                <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample03" aria-controls="navbarsExample03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarsExample03">
                    <ul className="navbar-nav me-auto mb-2 mb-sm-0 ">
                    <hr className="text-white"/>
                    <li className="nav-item">
                        <a className="nav-link active" type="button" aria-current="page" onClick={() => {props.setPage('Home')}}>Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active" type="button" aria-current="page" onClick={() => {props.setPage('Blog')}}>Blog</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active" type="button" aria-current="page" onClick={() => {props.setPage('Portfolio')}}>Portfolio</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active" type="button" aria-current="page" onClick={() => {props.setPage('AboutUs')}}>About Us</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active" type="button" aria-current="page" onClick={() => {props.setPage('Settings')}}>Settings</a>
                    </li>


                    </ul>
                </div>
                </div>
            </nav>
        </>
    );
}
export default Navbar;
function Navbar(props){
    
    return(
        <>
              {/* nav bar */}
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark" aria-label="Third navbar example">
                <div className="container-fluid">
                <a className="navbar-brand" type="button">SpaceBun Logo</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample03" aria-controls="navbarsExample03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarsExample03">
                    <ul className="navbar-nav me-auto mb-2 mb-sm-0">
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
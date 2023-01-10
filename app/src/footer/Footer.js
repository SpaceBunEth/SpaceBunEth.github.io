function Footer(props){
    return(
        <>
            {/* Start of Footer */}
            <div className="container">
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                <p className="col-md-4 mb-0 text-muted">© 2022 SpaceBun, Inc</p>

                <a type='button' className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
                <svg className="bi me-2" width="40" height="32"></svg>
                </a>

                <ul className="nav col-md-4 justify-content-end">
                <li className="nav-item"><a type="button" className="nav-link px-2 text-muted" onClick={() => {props.setPage('Home')}}>Home</a></li>
                <li className="nav-item"><a type='button' className="nav-link px-2 text-muted" onClick={() => {props.setPage('Blog')}}>Blog</a></li>
                <li className="nav-item"><a type='button' className="nav-link px-2 text-muted" onClick={() => {props.setPage('Portfolio')}}>Portfolio</a></li>
                <li className="nav-item"><a type='button' className="nav-link px-2 text-muted" onClick={() => {props.setPage('AboutUs')}}>About Us</a></li>
                {/* <li className="nav-item"><a type='button' className="nav-link px-2 text-muted" onClick={() => {props.setPage('Settings')}}>Settings</a></li> */}
                </ul>
            </footer>
            </div>
        </>
    );
}
export default Footer;
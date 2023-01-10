function AboutUs(props){
    return(
        <>
        <div className="col-lg-8 mx-auto p-4 py-md-5">
        <header className="d-flex align-items-center pb-3 mb-5 border-bottom">
            <a href="/" className="d-flex align-items-center text-dark text-decoration-none">
            
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#777" className="bi bi-file-earmark-text" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                </svg>
            <span className="fs-4 p-3 text-secondary">About Us</span>
            </a>
        </header>

        <main>
            <h1>What is SpaceBun</h1>
            <p className="fs-5 col-md-8">
                SpaceBun is collection of creative projects both in art and technology that aims to provide a colorful and unique UI/ UX user experience. 
                Attention to detail is priority and focus for both the visual and technical sides of our projects. 
                Great care is taken all the way from the begin of a project to the very end.
                Each line of code to pixel on the page is taken into account during development.
                Our mission is usher in a new wave of design and ideals for the next generation of end users.
            </p>

            <div className="mb-5">
            <button onClick={() => {props.setPage('Portfolio')}} className="btn btn-secondary btn-lg px-4">View Our Portfolio</button>
            </div>

            {/* <hr className="col-3 col-md-2 mb-5"/> */}

            {/* <div className="row g-5">
            <div className="col-md-6">
                <h2>Contact Us</h2>
                <p>
                    Interested in our products and services?
                </p>
                <ul className="icon-list ps-0">
                <li className="d-flex align-items-start mb-1"><a href="https://github.com/twbs/bootstrap-npm-starter" rel="noopener" >Email us!</a></li>
                <li className="text-muted d-flex align-items-start mb-1">Write Us a email we would love to help!</li>
                </ul>
            </div>

            <div className="col-md-6">
                <h2>Other Links</h2>
                <p>You can find us on other social media platforms.</p>
                <ul className="icon-list ps-0">
                <li className="d-flex align-items-start mb-1"><a href="/docs/5.2/getting-started/introduction/">twitter</a></li>
                <li className="d-flex align-items-start mb-1"><a href="/docs/5.2/getting-started/webpack/">youtube</a></li>
                <li className="d-flex align-items-start mb-1"><a href="/docs/5.2/getting-started/parcel/">opensea</a></li>
                <li className="d-flex align-items-start mb-1"><a href="/docs/5.2/getting-started/vite/">other</a></li>
                <li className="d-flex align-items-start mb-1"><a href="/docs/5.2/getting-started/contribute/">other2</a></li>
                </ul>
            </div>
            </div> */}


        </main>
        <footer className="pt-5 my-5 text-muted border-top">
            Created by SpaceBun
        </footer>
        </div>
        </>
    );
}
export default AboutUs;
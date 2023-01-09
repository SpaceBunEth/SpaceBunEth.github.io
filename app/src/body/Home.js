import Banner from "../banner/Banner";

function Home(){
    return(
        <>
        <Banner></Banner>
        {/* Start of body elements */}
            <div className="container marketing">

            {/* <!-- Three columns of text below the carousel --> */}
            <div className="row m-5 mt-1">
            <div className="col-lg-4">
                
                {/* <svg className="bd-placeholder-img rounded-circle"   xmlns="http://www.w3.org/2000/svg" width="140" height="140" role="img" fill="currentColor" class="bi bi-file-earmark-text" viewBox="0 0 16 16">
                <rect width="100%" height="100%" fill="#777"></rect>
                    <path d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z"/>
                    <path d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5L9.5 0zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z"/>
                    </svg> */}

                <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"></rect><text x="50%" y="50%" fill="#733" dy=".3em">
                no
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#733" className="bi bi-file-earmark-text" viewBox="0 0 16 16">
  <path d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z"/>
  <path d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5L9.5 0zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z"/>
</svg>
                    
                    </text></svg>

        



                <h2 className="fw-normal">Blog</h2>
                <p>
                Enjoy educational and creative ideas about technology. Our blog posts focus on the merging of artistic expression through new fields of tech and computer science. 
                We cover a range of topics from; programming tips and tricks to developing a better art's eye for UX and UI. 
                </p>
                <p><button className="btn btn-secondary" href="#">View Blog »</button></p>
            </div>
            {/* <!-- /.col-lg-4 --> */}
            <div className="col-lg-4">
                <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"></rect><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg>

                <h2 className="fw-normal">Portfolio</h2>
                <p>What to see previous projects? Click below and take a look. You'll find we have a ken eye for detail. Full Stack Development development, font-end and back-end</p>
                <p><button className="btn btn-secondary" href="#">View Portfolio »</button></p>
            </div>
            {/* <!-- /.col-lg-4 --> */}
            <div className="col-lg-4">
                <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"></rect><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg>

                <h2 className="fw-normal">About Us</h2>
                <p>What to know more About Us? View our about page and read our mission statement. 

                </p>
                <p><button className="btn btn-secondary" href="#">View About Us »</button></p>
            </div>
            {/* <!-- /.col-lg-4 --> */}
            </div>

            </div>
        </>
    );
}

export default Home;
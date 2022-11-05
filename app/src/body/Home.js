function Home(){
    return(
        <>
        {/* Start of body elements */}
            <div className="container marketing">

            {/* <!-- Three columns of text below the carousel --> */}
            <div className="row m-5 mt-1">
            <div className="col-lg-4">
                <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"></rect><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg>

                <h2 className="fw-normal">Blog</h2>
                <p>
                Enjoy educational and creative ideas about technology. Our blog posts focus on the merging of artistic expression through new fields of tech and computer science. 
                We cover a range of topics from; programming tips and tricks to developing a better art's eye for UX and UI. 
                </p>
                <p><a className="btn btn-secondary" href="#">View Blog »</a></p>
            </div>
            {/* <!-- /.col-lg-4 --> */}
            <div className="col-lg-4">
                <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"></rect><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg>

                <h2 className="fw-normal">Portfolio</h2>
                <p>What to see previous projects? Click below and take a look. You'll find we have a ken eye for detail. Full Stack Development development, font-end and back-end</p>
                <p><a className="btn btn-secondary" href="#">View Portfolio »</a></p>
            </div>
            {/* <!-- /.col-lg-4 --> */}
            <div className="col-lg-4">
                <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"></rect><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg>

                <h2 className="fw-normal">About Us</h2>
                <p>What to know more About Us? View our about page and read our mission statement. 

                </p>
                <p><a className="btn btn-secondary" href="#">View About Us »</a></p>
            </div>
            {/* <!-- /.col-lg-4 --> */}
            </div>

            </div>
        </>
    );
}

export default Home;
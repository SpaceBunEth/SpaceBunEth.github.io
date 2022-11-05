// import logo from 'images/spacebun_final_white.png';
import './App.css';



function App() {
  return (
    <main>
      {/* Logo banner
      <div className='text-center bg-dark text-white pt-2'>
      <h1 className='m-0' >SPACEBUN <img className='' src='images/spacebun_final_small_white.png' alt='...'/> SPACEBUN</h1>
      </div> */}

      {/* nav bar */}
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark" aria-label="Third navbar example">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">SpaceBun Logo</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample03" aria-controls="navbarsExample03" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarsExample03">
        <ul className="navbar-nav me-auto mb-2 mb-sm-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Blog</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Portfolio</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">About Us</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Settings</a>
          </li>

          {/* Nav hyper link and disabled button */}
          {/* <li className="nav-item">
            <a className="nav-link" href="#">Link</a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled">Disabled</a>
          </li> */}

          {/* Nav Drop down menu */}
          {/* <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Action</a></li>
              <li><a className="dropdown-item" href="#">Another action</a></li>
              <li><a className="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li> */}

        </ul>
      </div>
    </div>
  </nav>
 
      {/* image banner */}
          <div className='container-fluid p-0 mb-5'>
            <div className='row'>
              <div className='col-12'>

              <div class="card text-bg-dark border-0">
                  <img src="images/background_banner.png" class="card-img img-fluid" alt="..."/>
                  <div class="card-img-overlay">
                    <h1 className='text-center'><img src="images/spacebun_logo_h-200px.png" alt='...'/></h1>
                    
                  </div>
                </div>

              </div>
            </div>
          </div>



{/* start of carousel */}
  {/* <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2" className="active" aria-current="true"></button>
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3" className=""></button>
    </div>
    <div className="carousel-inner">
      <div className="carousel-item">
        <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777"></rect></svg>

        <div className="container">
          <div className="carousel-caption text-start">
            <h1>Where is my h1 tag?</h1>
            <p>Some representative placeholder content for the first slide of the carousel.</p>
            <p><a className="btn btn-sm btn-primary" href="#">Sign up today</a></p>
          </div>
        </div>
      </div>
      <div className="carousel-item active">
        <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777"></rect></svg>

        <div className="container">
          <div className="carousel-caption">
            <h1>Another example headline.</h1>
            <p>Some representative placeholder content for the second slide of the carousel.</p>
            <p><a className="btn btn-lg btn-primary" href="#">Learn more</a></p>
          </div>
        </div>
      </div>
      <div className="carousel-item">
        <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777"></rect></svg>

        <div className="container">
          <div className="carousel-caption text-end">
            <h1>One more for good measure.</h1>
            <p>Some representative placeholder content for the third slide of this carousel.</p>
            <p><a className="btn btn-lg btn-primary" href="#">Browse gallery</a></p>
          </div>
        </div>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div> */}

{/* <div class="p-3 p-md-5 mb-4 text-bg-dark">
    <div class="col-md-6 px-0">
      <h1 class="display-4 fst-italic">Title of a longer featured blog post</h1>
      <p class="lead my-3">Multiple lines of text that form the lede, informing new readers quickly and efficiently about what’s most interesting in this post’s contents.</p>
      <p class="lead mb-0"><a href="#" class="text-white fw-bold">Continue reading...</a></p>
    </div>
  </div> */}



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
    {/* <!-- /.row --> */}


    {/* <!-- START THE FEATURETTES --> */}

    {/* <hr className="featurette-divider"/>

    <div className="row featurette">
      <div className="col-md-7 order-md-2">
        <h2 className="featurette-heading fw-normal lh-1">Oh yeah, it's that good. <span className="text-muted">See for yourself.</span></h2>
        <p className="lead">Another featurette? Of course. More placeholder content here to give you an idea of how this layout would work with some actual real-world content in place.</p>
      </div>
      <div className="col-md-5 order-md-1">
        <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee"></rect><text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text></svg>

      </div>
    </div> */}
    {/* <!-- /END THE FEATURETTES --> */}

  </div>
    {/* Start of Footer */}
    <div className="container">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <p className="col-md-4 mb-0 text-muted">© 2022 SpaceBun, Inc</p>

        <a href="/" className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
          <svg className="bi me-2" width="40" height="32"></svg>
        </a>

        <ul className="nav col-md-4 justify-content-end">
          <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Home</a></li>
          <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Blog</a></li>
          <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Portfolio</a></li>
          <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">About Us</a></li>
          <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Settings</a></li>
        </ul>
      </footer>
    </div>
    </main>
  );
}

export default App;

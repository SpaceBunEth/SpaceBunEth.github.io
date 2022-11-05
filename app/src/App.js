// import logo from 'images/spacebun_final_white.png';
import './App.css';
import Testapp from './testapp/testapp'


function App() {
  return (
    <main>
      <Testapp></Testapp>
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
                    <h3 className='text-center'>SpaceBun</h3>
                  </div>
                </div>

              </div>
            </div>
          </div>



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


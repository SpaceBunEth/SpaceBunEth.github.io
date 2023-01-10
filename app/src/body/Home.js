import Banner from "../banner/Banner";
import "./Home.css"

function Home(props){
    return(
        <>
        <Banner></Banner>
        {/* Start of body elements */}
            <div className="container marketing">

            {/* <!-- Three columns of text below the carousel --> */}
            <div className="row m-5 mt-1">
            <div className="col-lg-4 p-5">
                
                {/* <svg className="bd-placeholder-img rounded-circle"   xmlns="http://www.w3.org/2000/svg" width="140" height="140" role="img" fill="currentColor" class="bi bi-file-earmark-text" viewBox="0 0 16 16">
                <rect width="100%" height="100%" fill="#777"></rect>
                    <path d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z"/>
                    <path d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5L9.5 0zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z"/>
                    </svg> */}
                <div className="col-12 text-center">

                    <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="#777" className="bi bi-file-earmark-text" viewBox="0 0 16 16">
                        <path d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z"/>
                        <path d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5L9.5 0zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z"/>
                    </svg>


                </div>
                <br/>

                <h2 className="fw-normal">Blog</h2>
                <p>
                {/* Enjoy educational and creative ideas about technology. Our blog posts focus on the merging of artistic expression through new fields of tech and computer science.  */}
                We cover a range of topics from; programming tips and tricks to developing a better art's eye for UX and UI. 
                </p>
                <p><button className="btn btn-secondary" onClick={() => {props.setPage('Blog')}} href="#">View Blog »</button></p>
            </div>
            {/* <!-- /.col-lg-4 --> */}
            <div className="col-lg-4 p-5" >
            <div className="col-12 text-center">

                <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="#777" className="bi bi-file-earmark-text" viewBox="0 0 16 16">
                    <path d="M1 3.5A1.5 1.5 0 0 1 2.5 2h2.764c.958 0 1.76.56 2.311 1.184C7.985 3.648 8.48 4 9 4h4.5A1.5 1.5 0 0 1 15 5.5v.64c.57.265.94.876.856 1.546l-.64 5.124A2.5 2.5 0 0 1 12.733 15H3.266a2.5 2.5 0 0 1-2.481-2.19l-.64-5.124A1.5 1.5 0 0 1 1 6.14V3.5zM2 6h12v-.5a.5.5 0 0 0-.5-.5H9c-.964 0-1.71-.629-2.174-1.154C6.374 3.334 5.82 3 5.264 3H2.5a.5.5 0 0 0-.5.5V6zm-.367 1a.5.5 0 0 0-.496.562l.64 5.124A1.5 1.5 0 0 0 3.266 14h9.468a1.5 1.5 0 0 0 1.489-1.314l.64-5.124A.5.5 0 0 0 14.367 7H1.633z"/>

                </svg>
                </div>
                <br/>
                <h2 className="fw-normal">Portfolio</h2>
                <p>What to see previous projects? Click below and take a look. You'll find we have a ken eye for detail. Full Stack Development development, font-end and back-end</p>
                <p><button className="btn btn-secondary" onClick={() => {props.setPage('Portfolio')}} href="#">View Portfolio »</button></p>
            </div>
            {/* <!-- /.col-lg-4 --> */}
            <div className="col-lg-4 p-5">
            <div className="col-12 text-center">

                <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="#777" className="bi bi-file-earmark-text" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                </svg>


                </div>
                <br/>
                <h2 className="fw-normal">About Us</h2>
                <p>What to know more About Us? View our about page and read our mission statement. 

                </p>
                <p><button className="btn btn-secondary" onClick={() => {props.setPage('AboutUs')}} href="#">View About Us »</button></p>
            </div>
            {/* <!-- /.col-lg-4 --> */}
            </div>

            </div>
        </>
    );
}

export default Home;
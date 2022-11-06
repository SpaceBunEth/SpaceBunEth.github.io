function Banner(){
    return(
        <>
            {/* image banner */}
            <div className='container-fluid p-0 mb-5'>
                <div className='row'>
                <div className='col-12'>

                <div className="card text-bg-dark border-0">
                    <img src="images/background_banner.png" className="card-img img-fluid"  alt="..."/>
                    <div className="card-img-overlay">
                        <h1 className='text-center'><img src="images/spacebun_logo_h-200px.png" alt='...'/></h1>
                        <h3 className='text-center'>SpaceBun</h3>
                    </div>
                    </div>

                </div>
                </div>
            </div>

        </>
    );
}
export default Banner;
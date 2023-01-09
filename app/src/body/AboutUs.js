function AboutUs(){
    return(
        <>
        <div class="col-lg-8 mx-auto p-4 py-md-5">
        <header class="d-flex align-items-center pb-3 mb-5 border-bottom">
            <a href="/" class="d-flex align-items-center text-dark text-decoration-none">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="32" class="me-2" viewBox="0 0 118 94" role="img"><title>Bootstrap</title><path fill-rule="evenodd" clip-rule="evenodd" d="M24.509 0c-6.733 0-11.715 5.893-11.492 12.284.214 6.14-.064 14.092-2.066 20.577C8.943 39.365 5.547 43.485 0 44.014v5.972c5.547.529 8.943 4.649 10.951 11.153 2.002 6.485 2.28 14.437 2.066 20.577C12.794 88.106 17.776 94 24.51 94H93.5c6.733 0 11.714-5.893 11.491-12.284-.214-6.14.064-14.092 2.066-20.577 2.009-6.504 5.396-10.624 10.943-11.153v-5.972c-5.547-.529-8.934-4.649-10.943-11.153-2.002-6.484-2.28-14.437-2.066-20.577C105.214 5.894 100.233 0 93.5 0H24.508zM80 57.863C80 66.663 73.436 72 62.543 72H44a2 2 0 01-2-2V24a2 2 0 012-2h18.437c9.083 0 15.044 4.92 15.044 12.474 0 5.302-4.01 10.049-9.119 10.88v.277C75.317 46.394 80 51.21 80 57.863zM60.521 28.34H49.948v14.934h8.905c6.884 0 10.68-2.772 10.68-7.727 0-4.643-3.264-7.207-9.012-7.207zM49.948 49.2v16.458H60.91c7.167 0 10.964-2.876 10.964-8.281 0-5.406-3.903-8.178-11.425-8.178H49.948z" fill="currentColor"></path></svg>
            <span class="fs-4">About</span>
            </a>
        </header>

        <main>
            <h1>What is SpaceBun</h1>
            <p class="fs-5 col-md-8">
                SpaceBun is collection of creative projects both in art and technology that aims to provide a colorful and unique UI/ UX user experience. 
                Attention to detail is priority and focus for both the visual and technical sides of our projects. 
                Great care is taken all the way from the begin of a project to the very end.
                Each line of code to pixel on the page is taken into account during development.
                Our mission is usher in a new wave of design and ideals for the next generation of end users.
            </p>

            <div class="mb-5">
            <a href="/docs/5.2/examples/" class="btn btn-primary btn-lg px-4">View Our Portfolio</a>
            </div>

            <hr class="col-3 col-md-2 mb-5"/>

            <div class="row g-5">
            <div class="col-md-6">
                <h2>Contact Us</h2>
                <p>
                    Interested in our products and services?
                </p>
                <ul class="icon-list ps-0">
                <li class="d-flex align-items-start mb-1"><a href="https://github.com/twbs/bootstrap-npm-starter" rel="noopener" >Email us!</a></li>
                <li class="text-muted d-flex align-items-start mb-1">Write Us a email we would love to help!</li>
                </ul>
            </div>

            <div class="col-md-6">
                <h2>Other Links</h2>
                <p>You can find us on other social media plateforms.</p>
                <ul class="icon-list ps-0">
                <li class="d-flex align-items-start mb-1"><a href="/docs/5.2/getting-started/introduction/">twitter</a></li>
                <li class="d-flex align-items-start mb-1"><a href="/docs/5.2/getting-started/webpack/">youtube</a></li>
                <li class="d-flex align-items-start mb-1"><a href="/docs/5.2/getting-started/parcel/">opensea</a></li>
                <li class="d-flex align-items-start mb-1"><a href="/docs/5.2/getting-started/vite/">other</a></li>
                <li class="d-flex align-items-start mb-1"><a href="/docs/5.2/getting-started/contribute/">other2</a></li>
                </ul>
            </div>
            </div>
        </main>
        <footer class="pt-5 my-5 text-muted border-top">
            Created by SpaceBun
        </footer>
        </div>
        </>
    );
}
export default AboutUs;
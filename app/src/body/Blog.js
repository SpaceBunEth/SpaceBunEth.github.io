
import blog1 from "../blogPosts/OnboardingSprint1.md"
import blog2 from "../blogPosts/OnboardingSprint2.md"
import blog3 from "../blogPosts/OnboardingSprint3.md"
import blog4 from "../blogPosts/OnboardingSprint4.md"
import blog5 from "../blogPosts/Sprint1-HTML-CSS-JS-State.md"
import blog6 from "../blogPosts/Sprint2-Vanilla-JS.md"

//import ReactMarkdown from "react-markdown";
import Markdown from "markdown-to-jsx";
import { useState, useEffect } from 'react';

// class Blog extends Component {
//   constructor(props) {
//     super(props)

//     this.state = { md: "" }
//   }

//   componentWillMount() {
//     fetch(blogMD)
//       .then((res) => res.text())
//       .then((md) => {
//         this.setState({ md })
//       })
//   }

//   render() {

//     let { md } = this.state

//     return(
//       <div className='container'>

//       {/* <div className="p-4 mt-2 p-md-5 mb-4 rounded text-bg-dark">
//           <div className="col-md-6 px-0">
//           <h1 className="display-4 fst-italic">Title of a longer featured blog post</h1>
//           <p className="lead my-3">Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.</p>
//           <p className="lead mb-0"><a href="#" className="text-white fw-bold">Continue reading...</a></p>
//           </div>
//       </div> */}



//       <div className="row g-5 ">

//         <div className="col-md-8 p-5">
//           <Markdown children={md}/>
//         </div>

  

//   <div className="col-md-4">

//       <br/>
//       <br/>
//       <br/>
//       <br/>
//       <br/>
//       <br/>
//       <br/>
//       <br/>
//       <br/>
//       <br/>
//       <br/>



//     <div className="position-sticky">
//       <div className="p-4 mb-3 bg-light rounded text-center">
//         <h4 className="fst-italic">About The Author</h4>
//         <svg className="bd-placeholder-img rounded-circle" width="75" height="75" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"></rect><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg>

//         <p className="mb-0">Customize this section to tell your visitors a little bit about your publication, writers, content, or something else entirely. Totally up to you.</p>
//       </div>

//       <div className="p-4">
//         <h4 className="fst-italic">Recent Posts</h4>
//         <div className="list-group w-auto">
// <a  className="list-group-item list-group-item-action d-flex gap-3 py-3" aria-current="true">
//   <img src="https://github.com/twbs.png" alt="twbs" width="32" height="32" className="rounded-circle flex-shrink-0"/>
//   <div className="d-flex gap-2 w-100 justify-content-between">
//     <div>
//       <h6 className="mb-0">List group item heading</h6>
//       <p className="mb-0 opacity-75">Some placeholder content in a paragraph.</p>
//     </div>
//     <small className="opacity-50 text-nowrap">now</small>
//   </div>
// </a>
// <a href="#" className="list-group-item list-group-item-action d-flex gap-3 py-3" aria-current="true">
//   <img src="https://github.com/twbs.png" alt="twbs" width="32" height="32" className="rounded-circle flex-shrink-0"/>

//   <div className="d-flex gap-2 w-100 justify-content-between">
//     <div>
//       <h6 className="mb-0">Another title here</h6>
//       <p className="mb-0 opacity-75">Some placeholder content in a paragraph that goes a little longer so it wraps to a new line.</p>
//     </div>
//     <small className="opacity-50 text-nowrap">3d</small>
//   </div>
// </a>
// <a href="#" className="list-group-item list-group-item-action d-flex gap-3 py-3" aria-current="true">
//   <img src="https://github.com/twbs.png" alt="twbs" width="32" height="32" className="rounded-circle flex-shrink-0"/>
//   <div className="d-flex gap-2 w-100 justify-content-between">
//     <div>
//       <h6 className="mb-0">Third heading</h6>
//       <p className="mb-0 opacity-75">Some placeholder content in a paragraph.</p>
//     </div>
//     <small className="opacity-50 text-nowrap">1w</small>
//   </div>
// </a>
// </div>
//       </div>

//       <div className="p-4">
//         <h4 className="fst-italic">View Archives</h4>
//         <nav className="d-grid gap-2 col-8">
//           <a href="#" className="btn btn-hover-light rounded-2 d-flex align-items-center gap-3 py-2 px-3 lh-sm text-start">
//           <svg className="bi" width="32" height="32"></svg>
//           <div>
//               <strong className="d-block">Full History</strong>
//               <small>Get help from our support crew</small>
//           </div>
//           </a>
//       </nav>
//       </div>
//     </div>
//   </div>
// </div>


//       </div>
//     );
//   }
// }


function Blog(props) {

  
  const objBlog = {
    1: blog1,
    2: blog2,
    3: blog3,
    4: blog4,
    5: blog5,
    6: blog6,
  }
  const [currentBlog, setBlog] = useState(objBlog[1]);
  
  const [md, setMd] = useState('');

  useEffect(() => {
    fetch(currentBlog)
      .then((res) => res.text())
      .then((md) => {
        setMd(md);
      });
  }, [currentBlog]);

  return(
    <div className='container'>

    {/* <div className="p-4 mt-2 p-md-5 mb-4 rounded text-bg-dark">
        <div className="col-md-6 px-0">
        <h1 className="display-4 fst-italic">Title of a longer featured blog post</h1>
        <p className="lead my-3">Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.</p>
        <p className="lead mb-0"><a href="#" className="text-white fw-bold">Continue reading...</a></p>
        </div>
    </div> */}



    <div className="row g-5 ">

      <div className="col-md-8 p-5">
        <Markdown children={md}/>
      </div>



<div className="col-md-4">

    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>



  <div className="position-sticky card">
    <div className="p-4 mb-3 bg-light rounded text-center opacity-75">
      <h4 className="fst-italic">About The Author</h4>
      {/* <svg className="bd-placeholder-img rounded-circle" width="75" height="75" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"></rect><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg> */}
      <svg xmlns="http://www.w3.org/2000/svg" width="75" height="75" fill="currentColor" class="bi bi-currency-bitcoin bd-placeholder-img rounded-circle border border-5 border-dark" viewBox="0 0 16 16">
  <path d="M5.5 13v1.25c0 .138.112.25.25.25h1a.25.25 0 0 0 .25-.25V13h.5v1.25c0 .138.112.25.25.25h1a.25.25 0 0 0 .25-.25V13h.084c1.992 0 3.416-1.033 3.416-2.82 0-1.502-1.007-2.323-2.186-2.44v-.088c.97-.242 1.683-.974 1.683-2.19C11.997 3.93 10.847 3 9.092 3H9V1.75a.25.25 0 0 0-.25-.25h-1a.25.25 0 0 0-.25.25V3h-.573V1.75a.25.25 0 0 0-.25-.25H5.75a.25.25 0 0 0-.25.25V3l-1.998.011a.25.25 0 0 0-.25.25v.989c0 .137.11.25.248.25l.755-.005a.75.75 0 0 1 .745.75v5.505a.75.75 0 0 1-.75.75l-.748.011a.25.25 0 0 0-.25.25v1c0 .138.112.25.25.25L5.5 13zm1.427-8.513h1.719c.906 0 1.438.498 1.438 1.312 0 .871-.575 1.362-1.877 1.362h-1.28V4.487zm0 4.051h1.84c1.137 0 1.756.58 1.756 1.524 0 .953-.626 1.45-2.158 1.45H6.927V8.539z"/>
</svg>
      <p className="mb-0">Studding Web3 and Web2 React Web Development. I explore different mediums of art and technology. SpaceBun.Eth</p>
    </div>



    <div className="p-4 opacity-75">
      <h4 className="fst-italic">Recent Posts</h4>
      <div className="list-group w-auto">
<a  className="list-group-item list-group-item-action d-flex gap-3 py-3" onClick={()=>{setBlog(objBlog[1])}} aria-current="true">

<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-1-circle rounded-circle flex-shrink-0" viewBox="0 0 16 16">
  <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8Zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM9.283 4.002V12H7.971V5.338h-.065L6.072 6.656V5.385l1.899-1.383h1.312Z"/>
</svg>
<div className="d-flex gap-2 w-100 justify-content-between">
  <div>
    <h6 className="mb-0">Onboarding Sprint 1</h6>
    <p className="mb-0 opacity-75">Intro to Bootcamp First Week</p>
  </div>
  <small className="opacity-50 text-nowrap">Aug</small>
</div>
</a>
<a href="#" className="list-group-item list-group-item-action d-flex gap-3 py-3" onClick={()=>{setBlog(objBlog[2])}} aria-current="true">
<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-2-circle rounded-circle flex-shrink-0" viewBox="0 0 16 16">
  <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8Zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM6.646 6.24v.07H5.375v-.064c0-1.213.879-2.402 2.637-2.402 1.582 0 2.613.949 2.613 2.215 0 1.002-.6 1.667-1.287 2.43l-.096.107-1.974 2.22v.077h3.498V12H5.422v-.832l2.97-3.293c.434-.475.903-1.008.903-1.705 0-.744-.557-1.236-1.313-1.236-.843 0-1.336.615-1.336 1.306Z"/>
</svg>

<div className="d-flex gap-2 w-100 justify-content-between">
  <div>
    <h6 className="mb-0">Onboarding Sprint 2</h6>
    <p className="mb-0 opacity-75">Color palette & UI</p>
  </div>
  <small className="opacity-50 text-nowrap">Aug</small>
</div>
</a>
<a href="#" className="list-group-item list-group-item-action d-flex gap-3 py-3" onClick={()=>{setBlog(objBlog[3])}} aria-current="true">
<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-3-circle rounded-circle flex-shrink-0" viewBox="0 0 16 16">
  <path d="M7.918 8.414h-.879V7.342h.838c.78 0 1.348-.522 1.342-1.237 0-.709-.563-1.195-1.348-1.195-.79 0-1.312.498-1.348 1.055H5.275c.036-1.137.95-2.115 2.625-2.121 1.594-.012 2.608.885 2.637 2.062.023 1.137-.885 1.776-1.482 1.875v.07c.703.07 1.71.64 1.734 1.917.024 1.459-1.277 2.396-2.93 2.396-1.705 0-2.707-.967-2.754-2.144H6.33c.059.597.68 1.06 1.541 1.066.973.006 1.6-.563 1.588-1.354-.006-.779-.621-1.318-1.541-1.318Z"/>
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8Z"/>
</svg>
<div className="d-flex gap-2 w-100 justify-content-between">
  <div>
    <h6 className="mb-0">Onboarding Sprint 3</h6>
    <p className="mb-0 opacity-75">HTML, CSS, and JavaScript</p>
  </div>
  <small className="opacity-50 text-nowrap">Sep</small>
</div>
</a>
</div>
    </div>

    <div className=" opacity-75 p-4">
      <h4 className="fst-italic">View Archives</h4>
      <nav className="d-grid gap-2 col-8">

        <div className="dropdown">
        <a className="btn btn-hover-light rounded-2 dropdown-toggle " role="button" data-bs-toggle="dropdown" aria-expanded="false">
        <svg className="bi" width="32" height="32"></svg>
        <div className="">
            <strong className="d-block">Full History</strong>
        </div>
        </a>

        <ul className="dropdown-menu">
        <li><a href="#" className="dropdown-item" onClick={()=>{setBlog(objBlog[1])}}>Blog 1</a></li>
        <li><a href="#" className="dropdown-item" onClick={()=>{setBlog(objBlog[2])}}>Blog 2</a></li>
        <li><a href="#" className="dropdown-item" onClick={()=>{setBlog(objBlog[3])}}>Blog 3</a></li>
        <li><a href="#" className="dropdown-item" onClick={()=>{setBlog(objBlog[4])}}>Blog 4</a></li>
        <li><a href="#" className="dropdown-item" onClick={()=>{setBlog(objBlog[5])}}>Blog 5</a></li>
        <li><a href="#" className="dropdown-item" onClick={()=>{setBlog(objBlog[6])}}>Blog 6</a></li>
        </ul> 

        </div>

    </nav>
    </div>

    <div>

    </div>


  </div>
</div>
</div>


    </div>
  );
}


export default Blog;
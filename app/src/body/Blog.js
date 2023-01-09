import blogMarkDown from "../blogMarkDown.md"
//import ReactMarkdown from "react-markdown";
import Markdown from "markdown-to-jsx";
import { Component} from "react";

class Blog extends Component {
  constructor(props) {
    super(props)

    this.state = { md: "" }
  }

  componentWillMount() {
    fetch(blogMarkDown)
      .then((res) => res.text())
      .then((md) => {
        this.setState({ md })
      })
  }

  render() {

    let { md } = this.state

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

    <div className="position-sticky">
      <div className="p-4 mb-3 bg-light rounded text-center">
        <h4 className="fst-italic">About The Author</h4>
        <svg className="bd-placeholder-img rounded-circle" width="75" height="75" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"></rect><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg>

        <p className="mb-0">Customize this section to tell your visitors a little bit about your publication, writers, content, or something else entirely. Totally up to you.</p>
      </div>

      <div className="p-4">
        <h4 className="fst-italic">Recent Posts</h4>
        <div className="list-group w-auto">
<a  className="list-group-item list-group-item-action d-flex gap-3 py-3" aria-current="true">
  <img src="https://github.com/twbs.png" alt="twbs" width="32" height="32" className="rounded-circle flex-shrink-0"/>
  <div className="d-flex gap-2 w-100 justify-content-between">
    <div>
      <h6 className="mb-0">List group item heading</h6>
      <p className="mb-0 opacity-75">Some placeholder content in a paragraph.</p>
    </div>
    <small className="opacity-50 text-nowrap">now</small>
  </div>
</a>
<a href="#" className="list-group-item list-group-item-action d-flex gap-3 py-3" aria-current="true">
  <img src="https://github.com/twbs.png" alt="twbs" width="32" height="32" className="rounded-circle flex-shrink-0"/>

  <div className="d-flex gap-2 w-100 justify-content-between">
    <div>
      <h6 className="mb-0">Another title here</h6>
      <p className="mb-0 opacity-75">Some placeholder content in a paragraph that goes a little longer so it wraps to a new line.</p>
    </div>
    <small className="opacity-50 text-nowrap">3d</small>
  </div>
</a>
<a href="#" className="list-group-item list-group-item-action d-flex gap-3 py-3" aria-current="true">
  <img src="https://github.com/twbs.png" alt="twbs" width="32" height="32" className="rounded-circle flex-shrink-0"/>
  <div className="d-flex gap-2 w-100 justify-content-between">
    <div>
      <h6 className="mb-0">Third heading</h6>
      <p className="mb-0 opacity-75">Some placeholder content in a paragraph.</p>
    </div>
    <small className="opacity-50 text-nowrap">1w</small>
  </div>
</a>
</div>
      </div>

      <div className="p-4">
        <h4 className="fst-italic">View Archives</h4>
        <nav className="d-grid gap-2 col-8">
          <a href="#" className="btn btn-hover-light rounded-2 d-flex align-items-center gap-3 py-2 px-3 lh-sm text-start">
          <svg className="bi" width="32" height="32"></svg>
          <div>
              <strong className="d-block">Full History</strong>
              <small>Get help from our support crew</small>
          </div>
          </a>
      </nav>
      </div>
    </div>
  </div>
</div>


      </div>
    );
  }
}





export default Blog;
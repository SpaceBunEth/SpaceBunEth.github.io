// import logo from 'images/spacebun_final_white.png';
import './App.css';
import React from 'react'
import Navbar from './navbar/Navbar'
import Banner from './banner/Banner'

//Store These components in an Object content for pages
import Home from './body/Home'
import Blog from './body/Blog'
import AboutUs from './body/AboutUs';
import Portfolio from './body/Portfolio';
import Settings from './body/Settings';

import Footer from './footer/Footer'

function App() {
  
  // const objPage = {
  //   pageCurrent: 'Home', //Remove after tests
  //   pageStates: ['Home','Blog','Portfolio','About Us','Settings']
  // }
  const pageCurrent = 'Home'
  const objComp = {
    Home: <Home/>,
    Blog: <Blog/>,
    Portfolio: <Portfolio/>,
    AboutUs: <AboutUs/>,
    Settings:<Settings/>
  }

  const componentArr = []
  const [page, setPage] = React.useState(pageCurrent)

  for(const key in objComp){
    if(key == page){
      componentArr.push(objComp[key])
    }
  }
  
  return (
    <main>
      <Navbar 
      page={page}
      setPage={setPage}
      />
      <Banner></Banner>
      <div>{componentArr}</div>
      <Footer></Footer>
    </main>
  );
}

export default App;


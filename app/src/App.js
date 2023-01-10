// import logo from 'images/spacebun_final_white.png';
import './App.css';
import React from 'react'
import Navbar from './navbar/Navbar'

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
  const componentArr = []
  const [page, setPage] = React.useState(pageCurrent)
  const objComp = {
    Home: <Home page={page} setPage={setPage} key="homepage"/>,
    Blog: <Blog key="blogpage"/>,
    Portfolio: <Portfolio key="portfoliopage"/>,
    AboutUs: <AboutUs page={page} setPage={setPage} key="aboutuspage"/>,
    Settings:<Settings key="settingspa"/>
  }

  for(const key in objComp){
    if(key === page){
      componentArr.push(objComp[key])
    }
  }
  
  return (
    <main>
      <Navbar 
      page={page}
      setPage={setPage}
      />

      
      <div>{componentArr}</div>

      <Footer
      page={page}
      setPage={setPage}
      />

    </main>
  );
}

export default App;


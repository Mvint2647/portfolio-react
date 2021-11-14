import React, { useState } from 'react';
import Header from './Header';
import Portfolio from './Portfolio';
import Footer from './Footer';
import About from './About';
import Contact from './Contact';
import Resume from './Resume';
import Homepage from './Homepage';



function Home() {
  const [currentInfo, setCurrentInfo] = useState('Homepage');
  const renderInfo = () => {
    if (currentInfo === 'About') {
      return <About />;
    }

    if (currentInfo === 'Portfolio') {
      return <Portfolio />;
    
  } if (currentInfo === 'Contact') {
    return <Contact />;

  } if (currentInfo === 'Resume') {
    return <Resume />;
  }
    return <Homepage />; 
}


const handlePageChange = (page) => setCurrentInfo(page);
return (
    <div>
      
        <Header currentInfo={currentInfo} handlePageChange={handlePageChange} />
        {renderInfo()}
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <Footer />
  </div>
);
}
export default Home;

import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

// import Footer from  '../components/Footer';
// import Header from '../components/Header';
import Home from '../pages/Home/Home';


 const Index = () => {
  return (
    <div>
         <BrowserRouter>
                {/* <Header /> */}

                    <Routes>
                        <Route path="/" element={<Home />} />
                        {/* <Route path='/about' element={<About/>} />
                        <Route path="/movies" element={<Movies />} />
                        <Route path="/series" element={<TvSeries />} />
                        <Route path="/search" element={<Search />} />
                        <Route path="/contact" element={<Contact />} /> */}
                        {/* <Route path="/details/:movieid/:mediatype" element={<Details />} /> */}
                    </Routes>        
                {/* <Footer /> */}
            </BrowserRouter>
    </div>
  )
}

export default Index
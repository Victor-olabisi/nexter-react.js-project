import { useState } from 'react'
import Feature from './Feature'
import {features} from '../data.js'
import Header from './Header';
import Realtors from './Realtors'
import Footer from './Footer';



function App() {
  // const [data, setData] = useState(features)
 
  return (
    <>
      <div className="container">
        <div className="sidebar">sidebar</div>
        <Header />
        <Realtors />
        <section className="features">
          {features.map((feature) => {
            return <Feature key={feature.id} feature={feature} />;
          })}
        </section>
        <div className="story__pictures">story pictures</div>
        <section className="story__text">story text</section>
        <section className="home">home</section>
        <section className="gallery">gallery</section>
        <Footer/>
      </div>
    </>
  );
}

export default App

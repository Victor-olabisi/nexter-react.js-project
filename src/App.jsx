import { useState } from 'react'
import Feature from './Feature'
import {features} from '../data.js'
import Header from './Header';
import Realtors from './Realtors'
import Footer from './Footer';
import Story from './Story';

function App() {
  const [data, setData] = useState(features)
  return (
    <>
      <div className="container">
        <div className="sidebar">
          <div className="sidebar__icon"></div>
        </div>
        <Header />
        <Realtors />
        <section className="features">
          {features.map((feature) => {
            return <Feature key={feature.id} feature={feature} />;
          })}
        </section>
        <Story/>
        <section className="home">home</section>
        <section className="gallery">gallery</section>
        <Footer />
      </div>
    </>
  );
}

export default App

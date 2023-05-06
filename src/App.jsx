import { useState } from 'react'
import Feature from './Feature'
import {features} from '../data.js'


function App() {
  const [data, setData] = useState(features)
 
  return (
    <>
      <div className="container">
        <div className="sidebar">
          sidebar
        </div>
        <header className="header">
          header
        </header>
        <div className="realtors">
             realtors
        </div>
        <section className="features">
          {data.map(feature => {
            return <Feature key={feature.id} feature={feature} />
          })}
        </section>
        <div className="story__pictures">
              story pictures
        </div>
        <section className="story__text">
          story text
        </section>
        <section className="home">
          home
        </section>
        <section className="gallery">
          gallery
        </section>
        <footer className="footer">
          footer
        </footer>
      </div>
 
    </>
  )
}

export default App

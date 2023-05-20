import Header from './Header';
import Realtors from './Realtors';
import Footer from './Footer';
import Story from './Story';
import Homes from './Homes';
import Features from './Features'
import '../sass/main.scss';
import Gallerys from './Gallerys';

function App() {
  return (
    <>
      <div className="container">
        <div className="sidebar">
          <div className="sidebar__icon"></div>
        </div>
        <Header />
        <Realtors />
        <Features/>
        <Story />
        <Homes />
        <Gallerys/>
        <Footer />
      </div>
    </>
  );
}

export default App;

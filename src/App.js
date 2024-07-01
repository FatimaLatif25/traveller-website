
import './App.css';
import Navbar from './components/Navbar'
import Home from './components/Home'
import TourSearch from './components/TourSearch';
import PopularDestination from './components/PopularDestination'
import TourPackages from './components/Packages'
import PhotoGallery from './components/PhotoGallery';
import Contact from './components/ContactUs'
import Footer from './components/Footer'
function App() {
  return (
   <>
   <Navbar />
   <Home />
   <TourSearch />
   <PopularDestination />
   <TourPackages />
   <PhotoGallery />
   <Contact />
   <Footer />
   </>
  );
}

export default App;

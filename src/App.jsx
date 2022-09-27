import './index.css';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import About from './components/about/About'
import Experiences from './components/experiences/Experiences'
import Service from './components/service/Service'
import Portifolio from './components/portifolio/Portifolio'
import Contacts from './components/contacts/Contacts'
import Footer from './components/footer/Footer'
import Testemonials from './components/testemonials/Testemonials'

function App() {
  return (
    <>
    <Header/>
    <Nav/>
    <About/>
    <Experiences/>
    <Service/>
    <Portifolio/>
    <Testemonials/>
    <Contacts/>
    <Footer/>

    
    </>
  );
}

export default App;

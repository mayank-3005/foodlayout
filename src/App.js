
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ApplicationForm from './components/ApplicationForm';
import ContactUsPage from './components/ContactUsPage';
import Footer from './components/Footer';
import FooterComponent from './components/FooterComponet';

function App() {
  return (
    <div>
    <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/contactus" element={<ContactUsPage/> } ></Route>
      <Route path="/applicationform" element={<ApplicationForm />} />
    </Routes>
    <Footer/>
    <FooterComponent/>
  </Router>
    
   
  
    </div>
  
  );
}

export default App;


import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import OnBoarding from "./pages/OnBoarding";
//import BusinessCustomers from "./pages/BusinessCustomers";
//import ProductCatalog from "./pages/ProductCatalog";
import JourneyDesigner from "./pages/JourneyDesigner";
import Settings from './pages/Settings';
import ApiSettings from "./pages/ApiSettings";
import InvoiceTemplate from "./pages/InvoiceTemplate";
//import Invoices from "./pages/Invoices";
//import Support from './pages/Support';

function App() {
  return (
     <Router>
        <Navbar/>
        <Routes>
           <Route path='/' exact element={<Home/>}/>
           <Route path='/onboarding' element={<OnBoarding/>} />
           <Route path='/journey-designer' element={<JourneyDesigner/>} />
           <Route path='/settings' element={<Settings/>} />
           <Route path='/api-settings' element={<ApiSettings/>} />
           <Route path='/invoice-template' element={<InvoiceTemplate/>} />
        </Routes>
     </Router>
  );
}

export default App;

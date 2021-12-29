import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
// import Car from './Car.js';

/*
const myfirstelement = <h1>Hello React!</h1>

ReactDOM.render(
  myfirstelement,
  document.getElementById('root')
);
*/
//ReactDOM.render(<Car/>, document.getElementById('root'));

export default function App() {
   return (
      <BrowserRouter>  
         <Routes>
	    <Route path="/" element={<Layout/>}>
	       <Route index element={<Home/>}/>
	       <Route path="blogs" element={<Blogs/>}/>
	       <Route path="contact" element={<Contact/>}/>
	       <Route path="*" element={<NoPage/>}/>
	    </Route>
         </Routes>
      </BrowserRouter>
   );
}

ReactDOM.render(<App />, document.getElementById("root"));

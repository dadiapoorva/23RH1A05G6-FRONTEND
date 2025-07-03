import{Routes,Route,Link,BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import Home from './home';
import About from './about';
import Contact from './contact';
import Details from  './details';
function App() {
  return (
      <Router>
        <Link  to="/homepage" style={{margin:10}}>Home</Link>
        <Link  to="/aboutpage" style={{margin:10}}>About us</Link>
        <Link  to="/contactpage" style={{margin:10}}>Contact us</Link>
        <Link  to="/detailspage" style={{margin:10}}>Details</Link>
        <Routes>
          <Route path="/homepage" element={<Home/>}></Route>
          <Route path="/aboutpage" element={<About/>}></Route>
          <Route path="/contactpage" element={<Contact/>}></Route>
          <Route path="/detailspage" element={<Details/>}></Route>
        </Routes>
      </Router>
  );
}

export default App;

import './App.css';
import Navbar from './Navbar';
import Mainbody from './Mainbody';
import Footer from './Footer';



function App() {
  return (
    <><div className="App">
      <Navbar />
      <div className="content">
        <Mainbody />
      </div>
      <Footer /> {/* Add the Footer component */}
    </div><div>
       
      </div></>
  );
}

export default App;

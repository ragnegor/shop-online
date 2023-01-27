import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer";
import data from "./data/data";


function App() {
  return (
    <div>
      <Header data={data.header}/>
      <Main data={data.main}/>
      <Footer data={data.footer}/>
    </div>
  )
}

export default App;

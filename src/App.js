import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer";
import data from "./data/data";
import {Route, Routes} from "react-router-dom";
import StoreCatalog from "./Components/Pages/StoreCatalog/StoreCatalog";
import dataCatalog from "./data/dataCatalog";
import dataAllGuitars from "./data/dataAllGuitars";


function App() {
  return (
    <div>
      <Header data={data.header}/>
      <Routes>
        <Route path="/shop-online" element={<Main data={data.main}/>}/>
        <Route path="/shop-online/storecatalog"  element={<StoreCatalog data={dataCatalog.filters}
                                                                       dataGuitars={dataAllGuitars}
        />}/>
      </Routes>
      <Footer data={data.footer}/>
    </div>
  )
}

export default App;

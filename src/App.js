import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer";
import data from "./data/data";
import {Navigate, Route, Routes} from "react-router-dom";
import StoreCatalog from "./Components/Pages/StoreCatalog/StoreCatalog";
import dataCatalog from "./data/dataCatalog";
import dataAllGuitars from "./data/dataAllGuitars";
import React from "react";


function App() {
  return (
    <div>
      <Header data={data.header}/>
      <Routes>
        <Route path="/" element={ <Navigate to="/shop-online"/> } />
        <Route path="/shop-online" element={<Main data={data.main} dataInfo={data.header.infoOnline}/>}/>
        <Route path="/shop-online/storecatalog"  element={<StoreCatalog data={dataCatalog.filters}
                                                                        dataGuitars={dataAllGuitars}
                                                                        btnText={data.main.chekStore.onBoard.button}
                                                                        btnTextForModal={data.main.chekStore.modal.button}
        />}/>
      </Routes>
      <Footer data={data.footer}/>
    </div>
  )
}

export default App;

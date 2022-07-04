import "./App.css";
import Navbar from "./components/navbar/navbar";
import HomeAdmin from "./pages/home_admin/home_admin";
import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Fragment>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomeAdmin />} />
            <Route path="*" element={<HomeAdmin />}></Route>
          </Routes>
        </BrowserRouter>
      </Fragment>
    </div>
  );
}

export default App;

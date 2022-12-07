import React, { useState } from "react";
import Header from "./components/Header/Header";
import DataContext from "./utils/context";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CandidatePage from "./pages/CandidatePage/CandidatePage";
import LandingPage from "./pages/LandingPage/LandingPage";
import Footer from "./components/Footer/Footer";
import useData from "./utils/useData";
import LogInModal from "./components/LogInModal/LogInModal";
import AdminMainPage from "./pages/AdminMainPage/AdminMainPage";
import "./App.scss";

const App = () => {
  const data = useData();
  const [searchValue, setSearchValue] = useState("");

  return (
    <>
      <DataContext.Provider value={{ data, searchValue, setSearchValue }}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route exact path="/" element={<LandingPage />}></Route>
            <Route exact path="/candidate" element={<CandidatePage />}></Route>
            <Route exact path="/login" element={<LogInModal />}></Route>
            <Route exact path="/admin" element={<AdminMainPage />}></Route>
          </Routes>
          <Footer />
        </BrowserRouter>
      </DataContext.Provider>
    </>
  );
};

export default App;

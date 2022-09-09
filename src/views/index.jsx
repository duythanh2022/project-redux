import React from "react";
import { ROUTER } from "../containts/common";
import Home from "./Home";
import { Route, Routes } from "react-router-dom";


  const Views = ()=>{
    return(
        <Routes>
           <Route path={ROUTER.home} element={<Home />} />

        </Routes>
    )
  }
  export default Views;
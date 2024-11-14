import React from "react";
import { Routes as RouterRoutes, Route } from "react-router-dom";
import Home from "../pages/(public)/Home/Home";
import { Home as HomeAdmin } from "../pages/(admin)/Home/Home";
import PageNotFound from "../pages/PageNotFound";
import Login from "../pages/(admin)/Login/Login";
import PrivateRoute from "./components/PrivateRoute";

const Routes = () => (
  <RouterRoutes>
    <Route path="/" element={<Home />} />
    <Route path="/admin/login" element={<Login />} />
    <Route
      path="/admin/home"
      element={
        <PrivateRoute>
          <HomeAdmin />
        </PrivateRoute>
      }
    />
    <Route path="*" element={<PageNotFound />} />
  </RouterRoutes>
);

export default Routes;

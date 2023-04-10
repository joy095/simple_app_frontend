import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import NoMatch from "./pages/NoMatch";
import Register from "./users/Register";
import Login from "./users/Login";
import Edit from "./users/Edit";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="users">
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="edit" element={<Edit />} />
        </Route>
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
};

export default App;

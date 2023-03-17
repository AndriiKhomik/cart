import React, { FC } from "react";
import SharedLayout from "../SharedLayout";
import { Route, Routes } from "react-router-dom";
import HomePage from "../../Pages/HomePage";
import CartPage from "../../Pages/CartPage";

const App: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="cart" element={<CartPage />} />
      </Route>
    </Routes>
  );
};

export default App;

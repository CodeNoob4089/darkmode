import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Product from "./Pages/Product";
import Products from "./Pages/Products";
import Main from "./Pages/Main";
import Layout from "./common/Layout";
function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Main />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Product />} />
        <Route
          path="*"
          element={
            <>
              <div>없는페이지 입니다.</div>
              <Link to={"/"}>
                <button>홈으로 이동</button>
              </Link>
            </>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;

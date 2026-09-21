import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
//import App from "./App.jsx";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router";
import Home from "./routes/Home/Home.jsx";
import Shop from "./routes/Shop/Shop.jsx";
import App from "./App.jsx";
import { useState } from "react";
import Cart from "./routes/Cart/Cart.jsx";

/*
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Header />
    <Home />
  </StrictMode>,
);
*/

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true, // <--- Runs when URL is exactly "/profile"
        element: <Home />,
      },
      { path: "shop", element: <Shop /> },
      { path: "cart", element: <Cart /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);

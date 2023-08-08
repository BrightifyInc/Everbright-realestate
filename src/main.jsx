import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./font-awesome.min.css"
import "./owl.carousel.min.css"
import App from "./App";
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById("root")).render(
      <BrowserRouter>
  <React.StrictMode>
        <App />
  </React.StrictMode>
      </BrowserRouter>
);


// const container = document.getElementById('root');
// const root = createRoot(container); // createRoot(container!) if you use TypeScript
// root.render (
//     <BrowserRouter>
//         <App tab="home" />
//     </BrowserRouter>
// );
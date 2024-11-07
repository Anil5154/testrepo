import { PrimeReactProvider } from "primereact/api";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Medallion from "./page/medallion";
import NewMedallion from "./page/newMedallion";
import Manage from "./page/manage";
import { Provider } from "react-redux";
import { store } from "./store";
import Layout from "./page/Layout";
import "primereact/resources/themes/bootstrap4-light-blue/theme.css";
import "./styles/style.scss";

function App() {
  return (
    <PrimeReactProvider value={{ ripple: true }}>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
          <Route index element={<Navigate to="/medallion" />} />
            <Route path="/" element={<Layout />}>
              <Route path="/medallion" element={<Medallion />}>
              <Route index element={<Medallion />}/>
              <Route path="new-medallion" element={<NewMedallion />}/>
              <Route path="manage" element={<Manage />}/>
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </PrimeReactProvider>
  );
}

export default App;

import { PrimeReactProvider } from "primereact/api";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Medallion from "./page/medallion";
// import NewMedallion from "./page/newMedallion";
import Manage from "./page/manage";
import Home from "./page/home";
import { Provider } from "react-redux";
import { store } from "./store";
import Layout from "./page/Layout";
import "primereact/resources/themes/bootstrap4-light-blue/theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/style.scss";
import ChooseMedallion from "./page/newMedallion/ChooseMedallion";
import CreateIndividualOwner from "./page/newMedallion/CreateIndividualOwner";

function App() {
  return (
    <PrimeReactProvider value={{ ripple: true }}>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/medallion">
                // // <Route index element={<Navigate to="new-medallion" />} />
                <Route path="new-medallion" element={<NewMedallion />}>
                  <Route index element={<ChooseMedallion />} />
                  <Route path="create-individual-owner" element={<CreateIndividualOwner />} />
                  // <Route path="create-corporation-owner" element={<NewMedallion />} />
                </Route>
                <Route path="manage" element={<Manage />} />
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </PrimeReactProvider>
  );
}

export default App;

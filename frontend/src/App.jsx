import { lazy, Suspense } from "react";
import { PrimeReactProvider } from "primereact/api";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import "primereact/resources/themes/bootstrap4-light-blue/theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/style.scss";
import Login from "./page/login";
import ProtectedRoute from "./components/ProtectedRoute";
import LeaseDetail from "./page/newMedallion/LeaseDetail";
const Home = lazy(() => import("./page/home"));
const Layout = lazy(() => import( "./page/Layout"));
const Manage = lazy(() => import( "./page/manage"));
const NewMedallion = lazy(() => import( "./page/newMedallion"));
const ChooseMedallion = lazy(() => import( "./page/newMedallion/ChooseMedallion"));
const CreateIndividualOwner = lazy(() => import( "./page/newMedallion/CreateIndividualOwner"));
const MedallionDetail = lazy(() => import( "./page/newMedallion/MedallionDetail"));
const CreatePacket = lazy(() => import( "./page/newMedallion/CreatePacket"));

function App() {
  return (
    <Suspense fallback={<div className="w-100 min-vh-100 d-flex align-items-center justify-content-center">Loading...</div>}>
    <PrimeReactProvider value={{ ripple: true }}>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<ProtectedRoute><Layout /></ProtectedRoute>}>
              <Route index element={<Home />} />
              <Route path="/medallion">
                <Route index element={<Navigate to="new-medallion" />} />
                <Route path="new-medallion" element={<NewMedallion />}>
                  <Route index element={<ChooseMedallion />} />
                  <Route path="create-individual-owner" element={<CreateIndividualOwner />} />
                  <Route path="medallion-detail" element={<MedallionDetail />} />
                  <Route path="create-packet" element={<CreatePacket />} />
                  <Route path="lease-detail" element={<LeaseDetail />} />
                  <Route path="create-corporation-owner" element={<NewMedallion />} />
                </Route>
                <Route path="manage" element={<Manage />} />
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </PrimeReactProvider>
    </Suspense>
  );
}

export default App;

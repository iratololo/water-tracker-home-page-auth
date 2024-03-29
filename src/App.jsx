import { Suspense, lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import Layout from "layout/Layout";
import PrivateRoute from "guards/PrivateRoute";
import PublicRoute from "guards/PublicRoute";
import { Loader } from "components/reuse/Loader/Loader";
import Error from "components/reuse/Error/Error";

const Contacts = lazy(() => import("pages/Contacts/Contacts"));
const Login = lazy(() => import("pages/Login"));
const Register = lazy(() => import("pages/Register"));
const Home = lazy(() => import("pages/Home/Home"));
const Form = lazy(() => import("components/Form/Form"));
const Plug = lazy(() => import("components/Plug/Plug"));
const ContactCard = lazy(() => import("components/ContactCard/ContactCard"));

export const App = () => {
  return (
    <>
      <Loader />
      <Error />
      <Suspense >
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<PublicRoute><Home /></PublicRoute>} />
          <Route path="/register" element={<PublicRoute><Register /></PublicRoute>} />
          <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />
            <Route path="/contacts" element={<PrivateRoute><Contacts /></PrivateRoute>}>
              <Route index element={<Plug />} />
              <Route path="form" element={<Form />} />
              <Route path="id" element={<ContactCard />} />
          </Route>
        </Route>
        <Route path="*" element={<Navigate to="/"/>} />
      </Routes>
    </Suspense>
    </>
  );
};

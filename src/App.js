import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import AddNewService from "./Components/AddNewService/AddNewService";
import Home from "./Components/Home/Home/Home";
import Services from "./Components/Home/Services/Services";
import Login from "./Components/Login/Login/Login";
import ManageAllTrips from "./Components/ManageAllTrips/ManageAllTrips";

import NotFound from "./Components/NotFound/NotFound";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import Register from "./Components/Register/Register";
import Footer from "./Components/Shared/Footer/Footer";
import Header from "./Components/Shared/Header/Header";
import Taking from "./Components/Taking/Taking/Taking";
import AuthProvider from "./context/AuthProvider";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/services">
              <Services></Services>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <PrivateRoute path="/taking/:serviceId">
              <Taking></Taking>
            </PrivateRoute>
            <PrivateRoute path="/addNewService">
              <AddNewService></AddNewService>
            </PrivateRoute>
            <Route path="/manageAllTrips">
              <ManageAllTrips></ManageAllTrips>
            </Route>

            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;

/* ===== App Dependencies ===== */
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
/* ===== Styles and Components ===== */
import Header from "./../components/Header";
import AppointmentsDashboardPage from "../components/AppointmentsDashboardPage";
import SettingsPage from "../components/SettingsPage";
import HelpPage from "../components/HelpPage";
import NotFoundPage from "../components/NotFoundPage";

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header appName="Appointment Scheduling App" />
      <Switch>
        <Route path="/" component={AppointmentsDashboardPage} exact={true} />
        <Route path="/settings" component={SettingsPage} />
        <Route path="/help" component={HelpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);
export default AppRouter;

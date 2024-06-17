import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import DefaultLayout from "../layouts/DefaultLayout";
import DashboardHome from "../pages/DashboardHome/DashboardHome";
import FinancialDashboard from "../pages/FinancialDashboard/FinancialDashboard";
import Invoice from "../pages/Invoice/Invoice";
import OrderInvoice from "../pages/OrderManagement/OrderInvoice";
import OrderManagement from "../pages/OrderManagement/OrderManagement";
import SingleOrder from "../pages/OrderManagement/SingleOrder";
import Product from "../pages/Product/Product";
import Report from "../pages/Report/Report";
import Settings from "../pages/Settings/Settings";
import TaxManagement from "../pages/TaxManagement/TaxManagement";
import User from "../pages/User/User";

const LayoutRouter = () => {
  return (
    <Router>
      <DefaultLayout headerTitle="Dashboard">
        <Routes>
          <Route path="/" Component={DashboardHome} />
          <Route path="/users" Component={User} />
          <Route path="/settings" Component={Settings} />
          <Route path="/dashboard" Component={DashboardHome} />
          <Route path="/financial-dashboard" Component={FinancialDashboard} />
          <Route path="/products" Component={Product} />
          <Route path="/invoice" Component={Invoice} />
          <Route path="/order-management" Component={OrderManagement} />
          <Route path="/order-management/:id" Component={SingleOrder} />
          <Route path="/invoice/:id" Component={OrderInvoice} />
          <Route path="/order-invoice/:id" Component={OrderInvoice} />
          <Route path="/tax-management" Component={TaxManagement} />
          <Route path="/reports" Component={Report} />
        </Routes>
      </DefaultLayout>
    </Router>
  );
};

export default LayoutRouter;

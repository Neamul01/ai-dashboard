import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '@/pages/Home';
import { Login } from '@/pages/authenticatioin/Login';
import Dashboard from '@/pages/dashboard/Dashboard';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import TwoFactorAuth from '@/pages/authenticatioin/TwoFactorAuth';
import ProductInspection from '@/pages/dashboard/ProductInspection';
import ConfirmPassword from '@/pages/authenticatioin/ConfirmPassword';
import PasswordReset from '@/pages/authenticatioin/PasswordReset';

const AppRouter = () => {
  return (
    <div className="min-h-screen max-w-5xl mx-auto">
      <div className="w-full h-16 ">
        <Header />
      </div>
      <div className="h-[calc(100vh-8rem)] ">
        <Router>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/two-factor" element={<TwoFactorAuth />} />
            <Route path="/product-inspection" element={<ProductInspection />} />
            <Route path="/confirm-password" element={<ConfirmPassword />} />
            <Route path="/reset-password" element={<PasswordReset />} />

            {/* Private Route */}
            <Route
              path="/dashboard"
              element={
                // <PrivateRoute>
                <Dashboard />
                // </PrivateRoute>
              }
            />
          </Routes>
        </Router>
      </div>
      <div className="h-16 mt-auto">
        <Footer />
      </div>
    </div>
  );
};

export default AppRouter;

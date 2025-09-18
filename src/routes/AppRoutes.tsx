import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../pages/MainPage/Parent';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} /> {/* Set Home as the main page */}
      {/* <Route path="/about" element={<About />} /> */}

      {/* <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/orders" element={<OrderListPage />} />
      <Route path="/orders/:orderId" element={<OrderDetailsPage />} />
      <Route path="/approvals" element={<ApprovalPage />} />
      <Route path="/approvals/:type/:id" element={<ApprovalDetailsPage />} />
      <Route path="/pet-owners" element={<PetOwners />} />
      <Route path="/pet-owners/:id" element={<PetOwnerDetailspage />} />
      <Route path="/pets-details/:id" element={<PetsList />} />
      <Route path="/veterinarians" element={<VeterinarianList />} />
      <Route path="/appointments" element={<AppointmentManager />} />
      <Route path="/appointments/details/:id" element={<ApprovalDetailsPage />} />
      <Route path="/coupons" element={<CouponPage />} />
      <Route path="/coupons/new" element={<CouponForm />} />
      <Route path="/coupons/:couponId" element={<CouponDetailsPage />} />
      <Route path="/promotions" element={<PromotionsPage />} />
      <Route path="/payments" element={<PaymentDashboard />} />
      <Route path="/delivery-partners" element={<DeliveryDashboard />} />
      <Route path="/vendors" element={<VendorsPage />} />
      <Route path="/products" element={<ProductPage />} />
      <Route path="/editproducts/:productId" element={<ProductForm />} />
      <Route path="/products/view/:productId" element={<ProductView />} />
      <Route path="/support" element={<SupportDashboard />} /> */}
      <Route path="*" element={<Navigate to="/" />} />
      <Route path="*" element={<Navigate to="/Login" />} />

    </Routes>
  );
}
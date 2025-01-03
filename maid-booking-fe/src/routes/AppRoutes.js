import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import ForgotPasswordPage from '../pages/public/ForgotPasswordPage';
import CreateBooking from '../pages/private/CreateBooking';
import ManageBooking from '../components/ManageBooking';
// Lazy load các trang
const HomePage = lazy(() => import('../pages/public/HomePage'));
const LoginPage = lazy(() => import('../pages/public/LoginPage'));
const AdminPage = lazy(() => import('../pages/public/AdminPage'));
const RegisterPage = lazy(() => import('../pages/public/RegisterPage'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage'));
const ProfilePage = lazy(() => import('../pages/private/ProfilePage'));
const BookingDetail = lazy(() => import('../components/BookingDetail'));
const ReviewPage = lazy(() => import('../pages/public/ReviewPage'));
const EditReviewPage = lazy(() => import('../pages/public/EditReviewPage'));
const WorkerCard = lazy(() => import("../pages/public/MaidCard"));
const PostCard = lazy(() => import("../pages/private/BookingCard"));
const MaidInfoPage = lazy(() => import("../pages/public/MaidInfoPage"));

const AppRoutes = () => {
  return (
    <Suspense fallback={<div>Đang tải...</div>}>
      <Routes>
        <Route path="/" 
        element={<HomePage />} />
         <Route path="/admin" 
        element={<AdminPage />} />
        <Route path="/forgot-password" 
        element={<ForgotPasswordPage />} />
        <Route path="/login"
          element={<LoginPage />}/>
        <Route path="/register"
          element={<RegisterPage />}/>
        <Route path="/bookings"
        element={<CreateBooking />}/>
        <Route path="/bookings/:id" 
        element={<PostCard />} />

        <Route path="/maids/:id"
        element={<MaidInfoPage />} />
        
        <Route path="/profile" 
        element={<ProfilePage />} />

        <Route path="/workers/:id" 
          element={<WorkerCard />} />
        
        <Route path="/manage" 
          element={<ManageBooking />} />

        <Route path="/booking/:id" 
        element={<BookingDetail />} />

        <Route path="/reviews/new" 
        element={<ReviewPage />} />

        <Route path="/reviews/edit" 
        element={<EditReviewPage />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;

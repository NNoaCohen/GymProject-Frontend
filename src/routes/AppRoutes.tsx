import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import { BlogPage } from '../pages/BlogPage';
import { SchedulesPage } from '../pages/SchedulesPage';
import { ClubsPage } from '../pages/ClubsPage';
import { AccountPage } from '../pages/AccountPage'; // Ensure this path is correct based on your project structure
import { RegistrationPage } from 'pages/RegistrationPage';
import { PaymentForm } from 'components/PaymentForm';
import { PersonalAreaPage } from 'pages/PersonalAreaPage';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/schedules" element={<SchedulesPage />} />
            <Route path="/clubs" element={<ClubsPage />} />
            <Route path="/account" element={<AccountPage />} />
            <Route path="/registration" element={<RegistrationPage />} />
            <Route path="/personal-area" element={<PersonalAreaPage />} />
      </Routes>
    );
};

export default AppRoutes;

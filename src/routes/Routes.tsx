import Notifications from '../components/pages/Notifications/Notifications';
import { Paths } from './Path';
import { Navigate, Route, Routes } from 'react-router-dom';
const Router = () => {
    return (
        <Routes>
            <Route path={'*'} element={<Notifications />} />
        </Routes>
    );
};

export default Router;

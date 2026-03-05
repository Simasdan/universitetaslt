import { createBrowserRouter } from 'react-router-dom';
import MainLayout from './layouts/Main/MainLayout';
import HomePage from './pages/HomePage/HomePage';
import ArticlePage from './pages/ArticlePage/ArticlePage';
import ArticlesPage from './pages/ArticlesPage/ArticlesPage';
import AdvertPage from './pages/AdvertPage/AdvertPAge';
import AddAdvertPage from './pages/AddAdvertPage/AddAdvertPage';
import MainAdvertsPage from './pages/MainAdvertsPage/MainAdvertsPage';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        errorElement: <MainLayout />,
        children: [
            {
                path: '',
                element: <HomePage />
            },
            {
                path: 'straipsniai',
                element: <ArticlesPage />
            },
            {
                path: 'straipsniai/:id',
                element: <ArticlePage />
            },
            {
                path: 'skelbimai',
                element: <MainAdvertsPage />
            },
            {
                path: 'skelbimai/:id',
                element: <AdvertPage />
            },
            {
                path: 'ikelti-skelbima',
                element: <AddAdvertPage />
            }
        ]
    },
], {
    basename: import.meta.env.BASE_URL
});
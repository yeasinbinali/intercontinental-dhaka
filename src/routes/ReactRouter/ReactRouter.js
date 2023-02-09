import { createBrowserRouter } from 'react-router-dom';
import Book from '../../components/Book/Book';
import Home from '../../components/Home/Home';
import Login from '../../components/Login/Login';
import SignUp from '../../components/SignUp/SignUp';
import SingleBook from '../../components/SingleBook/SingleBook';
import Main from '../../layout/Main/Main';
import PrivateRoute from '../PrivateRoute/PrivateRoute';

export const routes = createBrowserRouter([
    {
        path: '/', element: <Main></Main>, 
        children: [
            {
                path: '/', element: <Home></Home>,
            },
            {
                path: '/books',
                loader: async () => {
                    return fetch('books.json')
                },
                element: <Book></Book>
            },
            {
                path: '/singleBook',
                element: <PrivateRoute><SingleBook></SingleBook></PrivateRoute>
            },
            {
                path: '/signup', element: <SignUp></SignUp>
            },
            {
                path: '/login', element: <Login></Login>
            },
            {
                path: '*', element: <div className=''>This route no found</div>
            }
        ]
    }
])


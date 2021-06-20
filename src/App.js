import './App.css';
import Home from './components/Home/Home/Home';
import HomeNav from './components/Shared/HomeNav/HomeNav';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Footer from './components/Shared/Footer/Footer';
import Login from './components/Login/Login';
import DashboardLayout from './components/DashboardLayout/DashboardLayout';
import OrderList from './components/OrderList/OrderList';
import AddService from './components/AddService/AddService';
import MakeAdmin from './components/MakeAdmin/MakeAdmin';
import Manage from './components/Manage/Manage';
import Book from './components/Book/Book';
import BookingList from './components/BookingList/BookingList';
import NotFound from './components/NotFound/NotFound';
import { GlobalProvider } from './context/GlobalContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Review from './components/Review/Review';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

function App() {
  return (
    <GlobalProvider>
      <Router>
        <ToastContainer
          position='bottom-left'
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <HomeNav />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/login' component={Login} />
          <DashboardLayout>
            <PrivateRoute path='/book'>
              <Book />
            </PrivateRoute>
            <PrivateRoute path='/bookingList'>
              <BookingList />
            </PrivateRoute>
            <PrivateRoute path='/review'>
              <Review />
            </PrivateRoute>
            <PrivateRoute path='/orderList'>
              <OrderList />
            </PrivateRoute>
            <PrivateRoute path='/addService'>
              <AddService />
            </PrivateRoute>
            <PrivateRoute path='/makeAdmin'>
              <MakeAdmin />
            </PrivateRoute>
            <PrivateRoute path='/manage'>
              <Manage />
            </PrivateRoute>
          </DashboardLayout>
          <Route path='*' component={NotFound} />
        </Switch>
        <Footer />
      </Router>
    </GlobalProvider>
  );
}

export default App;

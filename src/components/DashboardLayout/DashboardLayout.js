import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './DashboardLayout.css';
import list from '../../icons/list.svg';
import plus from '../../icons/plus.svg';
import user from '../../icons/user.svg';
import manage from '../../icons/manage.svg';
import book from '../../icons/book.svg';
import review from '../../icons/review.svg';
import GlobalContext from '../../context/GlobalContext';

const DashboardLayout = ({ children }) => {

    const { state } = useContext(GlobalContext);

    const adminStatus = state.isAdmin;

    return (
        <section className='d-flex flex-column flex-md-row'>
            <div className='sidenav'>
                <div className="d-block d-md-none">
                    <button class="btn btn-primary w-100" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                        Expand Menu
                </button>
                    <div class="collapse" id="collapseExample">
                        <ul className='sidenav-ul'>
                            {
                                adminStatus && <>
                                    <li className='sidenav-list-item'>
                                        <Link to='/orderList'>
                                            <p><img src={list} className='sidenav-icon' alt="list" />Order list</p>
                                        </Link>
                                    </li>
                                    <li className='sidenav-list-item'>
                                        <Link to='/addService'>
                                            <p><img src={plus} className='sidenav-icon' alt="list" />Add Service</p>
                                        </Link>
                                    </li>
                                    <li className='sidenav-list-item'>
                                        <Link to='/makeAdmin'>
                                            <p><img src={user} className='sidenav-icon' alt="list" />Make Admin</p>
                                        </Link>
                                    </li>
                                    <li className='sidenav-list-item'>
                                        <Link to='/manage'>
                                            <p><img src={manage} className='sidenav-icon' alt="list" />Manage Services</p>
                                        </Link>
                                    </li>
                                </>
                            }

                            <li className='sidenav-list-item'>
                                <Link to='/book'>
                                    <p><img src={book} className='sidenav-icon' alt="list" />Book</p>
                                </Link>
                            </li>
                            <li className='sidenav-list-item'>
                                <Link to='/bookingList'>
                                    <p><img src={list} className='sidenav-icon' alt="list" />Booking List</p>
                                </Link>
                            </li>
                            <li className='sidenav-list-item'>
                                <Link to='/review'>
                                    <p><img src={review} className='sidenav-icon' alt="list" />Review</p>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <ul className='sidenav-ul d-none d-md-block'>
                    {
                        adminStatus && <>
                            <li className='sidenav-list-item'>
                                <Link to='/orderList'>
                                    <p><img src={list} className='sidenav-icon' alt="list" />Order list</p>
                                </Link>
                            </li>
                            <li className='sidenav-list-item'>
                                <Link to='/addService'>
                                    <p><img src={plus} className='sidenav-icon' alt="list" />Add Service</p>
                                </Link>
                            </li>
                            <li className='sidenav-list-item'>
                                <Link to='/makeAdmin'>
                                    <p><img src={user} className='sidenav-icon' alt="list" />Make Admin</p>
                                </Link>
                            </li>
                            <li className='sidenav-list-item'>
                                <Link to='/manage'>
                                    <p><img src={manage} className='sidenav-icon' alt="list" />Manage Services</p>
                                </Link>
                            </li>
                        </>
                    }

                    <li className='sidenav-list-item'>
                        <Link to='/book'>
                            <p><img src={book} className='sidenav-icon' alt="list" />Book</p>
                        </Link>
                    </li>
                    <li className='sidenav-list-item'>
                        <Link to='/bookingList'>
                            <p><img src={list} className='sidenav-icon' alt="list" />Booking List</p>
                        </Link>
                    </li>
                    <li className='sidenav-list-item'>
                        <Link to='/review'>
                            <p><img src={review} className='sidenav-icon' alt="list" />Review</p>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className='px-3 py-4 dashboard-child'>
                {children}
            </div>
        </section>
    );
};

export default DashboardLayout;
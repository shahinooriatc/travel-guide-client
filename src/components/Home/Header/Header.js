import React from 'react';
import './Header.css';
import 'react-toastify/dist/ReactToastify.css';

const Header = () => {
    return (
        <header className='d-flex flex-column align-items-center justify-content-around'>
            <div className="heading-container d-flex align-items-center justify-content-end">
                <h1 className='header-heading text-warning'>"The world is a book and those who do not travel read only one page."</h1>
            </div>
            <form className='px-2 px-md-5 py-4 bg-white row header-inputs mx-auto mt-auto'>
                <div className="form-group col-lg-3 col-md-12">
                    <input type="text" className='form-control py-4 px-3 ' placeholder='Destination' />
                </div>
                <div className="form-group col-lg-3 col-md-6">
                    <input type="date" className='form-control py-4 px-3' />
                </div>
                <div className="form-group col-lg-3 col-md-6">
                    <input type="number" className='form-control py-4 px-3' placeholder='Number of tourists' />
                </div>
                <div className="form-group mx-auto">
                    <button className='btn-main'>search</button>
                </div>
            </form>
        </header>
    );
};

export default Header;
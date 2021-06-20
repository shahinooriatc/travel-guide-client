import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { toast } from 'react-toastify';

const AddService = () => {
    const history = useHistory();

    const notify = () => toast('A New Service Added');

    const [info, setinfo] = useState({
        name: '',
        price: 0,
        description: ''
    });

    const [file, setfile] = useState(null);

    const handleBlur = (e) => {
        const serviceInfo = { ...info };
        serviceInfo[e.target.name] = e.target.value;
        setinfo(serviceInfo);
    };

    const handleFile = e => {
        setfile(e.target.files[0]);
    }

    const handleSubmit = e => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('file', file);
        formData.append('name', info.name);
        formData.append('price', info.price);
        formData.append('description', info.description);

        fetch('https://travel-guides.herokuapp.com/addService', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                if (data) {
                    history.push('/');
                    notify();
                }
            })
            .catch(err => {
                console.log(err);
            })
    };

    return (
        <div className='p-3'>
            <h2 className='primary-color-text'>Add A Service</h2>
            <form onSubmit={handleSubmit} style={{ maxWidth: '800px' }}>
                <div>
                    <div className="input-group">
                        <input className='form-control mb-3' type="text" name="name" placeholder='Service Name' onBlur={handleBlur} required />
                    </div>
                    <div className="input-group">
                        <input className='form-control mb-3' type="number" name="price" placeholder='Price' onBlur={handleBlur} required />
                    </div>
                    <div className="input-group">
                        <textarea style={{ height: '150px' }} className='form-control mb-3' type="text" name="description" placeholder='Details' onBlur={handleBlur} required />
                    </div>
                    <div>
                        <input type="file" name="file" className='mb-3' onChange={handleFile} required />
                    </div>
                    <div className="col-12 text-center">
                        <button type='submit' className='btn-main'>Add service</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddService;
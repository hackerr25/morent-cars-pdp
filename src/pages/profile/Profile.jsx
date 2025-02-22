import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import { toast } from 'react-toastify';
import { UserContext } from '../../utils/context/UserContext';

const Profile = () => {
    const { user, setUser } = useContext(UserContext);
    const navigate = useNavigate();
    const [data, setData] = useState({
        name: '',
        password: '',
        confirmPassword: ''
    });

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, [setUser]);

    const closeModal = () => {
        navigate('/');
    };

    const handleSignOut = () => {
        localStorage.removeItem('user');
        setUser(false);
        toast.success('Logout successful!');
        closeModal();
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (data.password !== data.confirmPassword) {
            toast.error('Passwords do not match!');
            return;
        }
        const userData = { name: data.name };
        setUser(userData);
        localStorage.setItem('user', JSON.stringify(userData));
        toast.success('Login successful!');
        closeModal();
    };

    return (
        <div className='modal-backdrop'>
            <div className='modal-body' onClick={(e) => e.stopPropagation()} style={{
                color: 'white',
                background: '#1a202c',
                padding: '20px',
                borderRadius: '10px',
                maxWidth: '500px',
                margin: '0 auto',
                fontFamily: 'Plus Jakarta Sans'
            }}>
                <div className='d-flex justify-content-between align-items-center'>
                    <h2>Authentication</h2>
                    <button onClick={closeModal} className='modal-close' style={{
                        backgroundColor: '#ED3F3F',
                        color: 'white',
                        borderRadius: '100%',
                        width: '30px',
                        height: '30px',
                        padding: "0",
                        marginTop: "0",
                        fontSize: "1px"
                    }}>
                        <CloseIcon />

                    </button>
                </div>
                <form onSubmit={handleSubmit} className='mt-5'>
                    <label>
                        <p style={{ marginBottom: "0", textAlign: "left" }}>
                            Name:
                        </p>
                        <input
                            className='inputModal'
                            type='text'
                            name='name'
                            value={data.name}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <label>
                        <p style={{ marginBottom: "0", textAlign: "left" }}>
                            Password:
                        </p>
                        <input
                            className='inputModal'
                            type='password'
                            name='password'
                            value={data.password}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <label>
                        <p style={{ marginBottom: "0", textAlign: "left" }}>
                            Confirm Password:
                        </p>
                        <input
                            className='inputModal'
                            type='password'
                            name='confirmPassword'
                            value={data.confirmPassword}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <div className='btn' style={{ display: "flex", gap: "10px" }}>
                        <button className='btn btn-orange' type='submit' style={{
                            color: 'white',
                            backgroundColor: '#3563E9',
                            fontSize: '15px',
                            padding: '10px 20px',
                            marginTop: '10px',
                            marginBottom: '10px',
                            width: '20%',
                            cursor: 'pointer'
                        }}>Submit</button>
                        <button className='btn btn-orange' style={{
                            color: 'white',
                            backgroundColor: '#3563E9',
                            fontSize: '15px',
                            padding: '10px 20px',
                            marginTop: '10px',
                            marginBottom: '10px',
                            width: '20%',
                            cursor: 'pointer'
                        }} onClick={handleSignOut}>Logout</button>
                    </div>
                </form>
            </div>
        </div >
    );
};

export default Profile;

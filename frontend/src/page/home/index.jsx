import React from 'react'
import { Button } from 'primereact/button';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'; 
import { clearUser } from '../../redux/slice/userSlice';

const Home = () => {
  const navigate = useNavigate(); 
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(clearUser());

    localStorage.removeItem('token');
    console.log('Logout successful');

    navigate('/login');
  };

  return (
    <div>Home
      <Button label="Log out" icon="pi" className="p-mt-3" onClick={handleLogout}  />
    </div>

  )
}

export default Home
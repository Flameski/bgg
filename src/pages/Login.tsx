import React from 'react';
import { useNavigate } from 'react-router-dom';

interface LoginPageProps {}

const Login: React.FC<LoginPageProps> = (): React.ReactElement => {
  const navigate = useNavigate();

  // eslint-disable-next-line
  const handleSubmit = () => {
    navigate('/profile');
  };

  return <div>Login</div>;
};

export default Login;

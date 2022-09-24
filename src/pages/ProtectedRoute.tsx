import React from 'react';
import { Navigate } from 'react-router-dom';

interface ProtectedRouteProps {
  children: React.ReactElement;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  children,
}): React.ReactElement => {
  // some check here to automatically navigate you away from the protected stuff
  if (false) {
    return <Navigate to='/' />;
  }
  return children;
};

export default ProtectedRoute;

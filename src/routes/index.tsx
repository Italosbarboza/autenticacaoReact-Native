import React, {useContext} from 'react';

import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';
import AuthContext from '../context/auth';

const Routes: React.FC = () => {
  const {signed} = useContext(AuthContext);
  return signed ? <AuthRoutes /> : <AppRoutes />;
};

export default Routes;

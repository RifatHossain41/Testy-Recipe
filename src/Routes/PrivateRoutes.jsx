import React from 'react';
import { AuthContext } from '../Provider/AuthProvider';

const PrivateRoutes = ({children}) => {

 const {loading} = useContext(AuthContext)

    if(loading) {
      return <div>Loading...</div>
    }

  return (
    <div>
      
    </div>
  );
};

export default PrivateRoutes;
import { lazy } from 'react';
import { Navigate } from 'react-router-dom';

const ModernSignUpPage = lazy(() => import('./ModernSignUpPage'));

const signUpPagesConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: 'pages/authentication/sign-up',
      children: [
      
       
        {
          path: 'modern',
          element: <ModernSignUpPage />,
        },
       
      ],
    },
  ],
};

export default signUpPagesConfig;

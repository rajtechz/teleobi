import { lazy } from 'react';

const ModernForgotPasswordPage = lazy(() => import('./ModernForgotPasswordPage'));


const forgotPasswordPagesConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: 'pages/authentication/forgot-password',
      children: [
        
        {
          path: 'modern',
          element: <ModernForgotPasswordPage />,
        },
        
      ],
    },
  ],
};

export default forgotPasswordPagesConfig;

import { lazy } from 'react';

const Cta = lazy(() => import('./Cta'));
 const CreateCtaPost= lazy(() => import('../ctaPost/CreateCtaPost'))

const CtaConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: '/facebook/instagram/ctaPost',
      element: <Cta />,
    },
    {
      path:'/facebook/instagram/createPost',
      element:<CreateCtaPost/>
    }
    
  ],
};

export default CtaConfig;

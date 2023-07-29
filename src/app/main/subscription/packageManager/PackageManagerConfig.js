import { lazy } from 'react';

const PackageManager = lazy(() => import('./PackageManager'));
const Package= lazy(()=>import('../addPackage/Package'))

const PackagemanagerConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: 'subscription/packageManager',
      element: <PackageManager />,
    },
    {
      path: 'subscription/packageManager/Package',
      element: <Package />,
    },
    
  ],
};

export default PackagemanagerConfig;

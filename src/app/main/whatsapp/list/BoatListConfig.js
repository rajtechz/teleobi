import { lazy } from 'react';


const Boatlists = lazy(() => import('./BoatLists'));

const boatListConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: '/whasappBot/list',
      element: <Boatlists />,
    },
  ],
};

export default boatListConfig;

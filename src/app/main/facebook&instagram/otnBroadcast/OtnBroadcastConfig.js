import { lazy } from 'react';

const OtnBroadcast = lazy(() => import('./OtnBroadcast'));
const CreateCampaign= lazy(() =>import('../campaign/CampaignPage'))

const otnbroadcastConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: '/facebook/instagram/otn/Broadcast',
      element: <OtnBroadcast />,
    },
    {
      path: '/facebook/instagram/otn/createCampaign',
      element: <CreateCampaign />,
    },
  ],
};

export default otnbroadcastConfig;

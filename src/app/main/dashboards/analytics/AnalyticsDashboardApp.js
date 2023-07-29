import withReducer from 'app/store/withReducer';
import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import _ from '@lodash';
import FusePageSimple from '@fuse/core/FusePageSimple';
import { motion } from 'framer-motion';
import Typography from '@mui/material/Typography';
import reducer from './store';
import { getWidgets, selectWidgets } from './store/widgetsSlice';
import VisitorsOverviewWidget from './widgets/VisitorsOverviewWidget';
import VisitorsVsPageViewsWidget from './widgets/VisitorsVsPageViewsWidget';
import SubscribersFromDiffrent from './widgets/SubscribersFromDiffrent';
import SubscriberWidget from './widgets/SubscriberWidget';
import CampaignOverview from './widgets/CampaignOverview';
import TotalWidget from './widgets/TotalWidget';
import BoatWidget from './widgets/BoatWidget';
import Button from '@mui/material/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { useState } from 'react';
import { FaFacebook } from 'react-icons/fa';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import axios from 'axios';
import FacebookLogin from 'react-facebook-login';
import urlInstance from "../../../../urlInstance/urlInstance"


function AnalyticsDashboardApp() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [data, setData] = useState(null);

  const handleLoginSuccess =async (response) => {
      setIsLoggedIn(true);
      urlInstance
        .post(`/api/auth/login/facebook`,{
          headers:{ 'Content-Type': 'application/json'},
          body: JSON.stringify({  
            accessToken: response.accessToken,
          }),
        })
  console.log(urlInstance)
        if (res.ok) {
          const data = await res.json();
          setData(data)
          console.log(data); // This will contain the user object from the backend
          // You can handle the login success here, e.g., store the user object in your frontend state
        } else {
          console.log('Facebook login failed');
          // Handle login failure here
        }

  };

  useEffect(() => {
    if (isLoggedIn && data !== null) {
      window.location.reload();
    }
  }, [isLoggedIn, data]);

  const dispatch = useDispatch();
  const widgets = useSelector(selectWidgets);

  useEffect(() => {
    dispatch(getWidgets());
  }, [dispatch]);
  
  const buttonStyles = (backgroundColor, hoverColor) => ({
    color: 'white',
    backgroundColor: backgroundColor,
    transition: 'background-color 0.3s'
  });


  return (
    <>
      <div className="flex container justify-center items-center mt-4">
        <div >
          <p className='h3 font-weight-bold text-capitalize'>You have not connected yet</p>
          {!isLoggedIn && (
            <FacebookLogin
              appId="1024463575609308"
              fields="name,email,picture"
              callback={handleLoginSuccess}
              
              render={(renderProps) => (

                <button
                  variant="contained"
                  startIcon={<FontAwesomeIcon icon={faFacebook} />}
                  onClick={renderProps.onClick}
                  style={buttonStyles('#3b5998', '#2d4373')}
                  onMouseOver={(e) => e.target.style.backgroundColor = '#2d4373'}
                  onMouseOut={(e) => e.target.style.backgroundColor = '#3b5998'}
                >
                  Login with Facebook
                </button>
              )}
            />
          )}

          {isLoggedIn}
        </div>
      </div>
      <div className="flex w-full container">

        <div className="flex flex-col sm:flex-row flex-auto sm:items-center min-w-0 p-24 md:p-32 pb-0 md:pb-0">
          <div className="flex flex-col flex-auto">
            <Typography className="text-3xl font-semibold tracking-tight leading-8">
              Analytics dashboard
            </Typography>
            <Typography className="font-medium tracking-tight" color="text.secondary">
              Monitor metrics, check reports and review performance
            </Typography>
          </div>
          <div className="flex items-center mt-24 sm:mt-0 sm:mx-8 space-x-12">
            <Button
              className="whitespace-nowrap"
              startIcon={<FuseSvgIcon size={20}>heroicons-solid:cog</FuseSvgIcon>}
            >
              Settings
            </Button>
            <Button
              className="whitespace-nowrap"
              variant="contained"
              color="secondary"
              startIcon={<FuseSvgIcon size={20}>heroicons-solid:save</FuseSvgIcon>}
            >
              Export
            </Button>
          </div>
        </div>
      </div>
      <FusePageSimple
        content={
          <>
            {useMemo(() => {
              const container = {
                show: {
                  transition: {
                    staggerChildren: 0.06,
                  },
                },
              };

              const item = {
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 },
              };

              return (
                !_.isEmpty(widgets) && (
                  <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-32 w-full p-24 md:p-32"
                    variants={container}
                    initial="hidden"
                    animate="show"
                  >
                    <div className="sm:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-32 w-full">
                      <motion.div variants={item} className="">
                        <SubscriberWidget />
                      </motion.div>

                      <motion.div variants={item} className="">
                        <TotalWidget />
                      </motion.div>
                      <motion.div variants={item} className="">
                        <BoatWidget />
                      </motion.div>
                      <motion.div variants={item} className="sm:col-span-2 lg:col-span-3">
                        <VisitorsOverviewWidget />

                      </motion.div>
                      <motion.div variants={item} className="sm:col-span-2 lg:col-span-3">
                        <VisitorsVsPageViewsWidget />
                      </motion.div>
                      <motion.div variants={item} className="sm:col-span-2 lg:col-span-3">
                        <SubscribersFromDiffrent />
                      </motion.div>
                      <motion.div variants={item} className="sm:col-span-2 lg:col-span-3">
                        <CampaignOverview />
                      </motion.div>

                    </div>
                  </motion.div>
                )
              );
            }, [widgets])}
          </>
        }
      />
    </>

  );
}

export default withReducer('analyticsDashboardApp', reducer)(AnalyticsDashboardApp);

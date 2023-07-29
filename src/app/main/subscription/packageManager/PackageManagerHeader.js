import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import Paper from '@mui/material/Paper';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import React, { useState, useEffect } from 'react';
import _ from '@lodash';
import axios from 'axios';





// import FacebookIcon from '@mui/icons-material/Facebook';
// import { useState } from 'react';
// import axios from 'axios';
// import FacebookLogin from 'react-facebook-login';
// import { selectProductsSearchText, setProductsSearchText } from '../store/productsSlice';


function PackageManagerHeader({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);
 
  useEffect(() => {
    // Create a debounced function to limit API calls while the user is typing
    const delaySearch = setTimeout(() => {
      handleSearch();
    }, 500);

    
    // Cleanup the timeout to avoid unnecessary API calls
    return () => clearTimeout(delaySearch);
  }, [searchQuery]);

  const handleSearch = async () => {
    try {
      const response = await axios.get('/http://127.0.0.1:5000/api/package', {
        params: {
          packageName: searchQuery,
        },
      });
      onSearch(response.data); // Pass the search results to the parent component
    } catch (error) {
      // Handle any errors
      console.error(error);
    }
  };






  const open = Boolean(anchorEl);
  const id = open ? 'custom-range-popover' : undefined;

  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  //   const [data, setData] = useState(null);

  // const handleLoginSuccess = (response) => {
  //   if (response.status === 'connected') {
  //     setIsLoggedIn(true);
  //     // Make the second API call to show data for the dashboard page

  //       axios
  //       .get('your-second-api-endpoint')
  //       .then((response) => {
  //         setData(response.data);
  //       })
  //       .catch((error) => {
  //         console.error('Error:', error);
  //       });
  //   }


  // };

  //   useEffect(() => {
  //     if (isLoggedIn && data !== null) {
  //       window.location.reload();
  //     }
  //   }, [isLoggedIn, data]);
  //   const dispatch = useDispatch();
  //   const searchText = useSelector(selectProductsSearchText);

  return (
    <>
      {/* <div>
        <p className='h3 font-weight-bold text-capitalize'>You have not connected yet</p>

        {!isLoggedIn && (
          <FacebookLogin
            appId="2031394480402743"
            fields="name,email,picture"
            callback={handleLoginSuccess}
            render={(renderProps) => (
              <Button
                variant="contained"
                startIcon={<FacebookIcon />}
                onClick={renderProps.onClick}
              >
                Login with Facebook
              </Button>
            )}
          />
        )}
        {isLoggedIn}
      </div> */}
      <div className="flex flex-col sm:flex-row space-y-16 sm:space-y-0 flex-1 w-full items-center justify-between py-32 px-24 md:px-32">


      <Paper
      component={motion.div}
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1, transition: { delay: 0.2 } }}
      className="flex items-center w-full sm:max-w-256 space-x-8 px-16 rounded-full border-1 shadow-0"
    >
      <FuseSvgIcon color="disabled">heroicons-solid:search</FuseSvgIcon>
      <Input
        placeholder="Search..."
        className="flex flex-1"
        disableUnderline
        fullWidth
        inputProps={{
          'aria-label': 'Search',
        }}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            handleSearch();
          }
        }}
      />
    </Paper>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0, transition: { delay: 0.2 } }}
        >
          <Button
            className=""
            component={Link}
            to="/subscription/packageManager/Package"
            variant="contained"
            color="secondary"
            startIcon={<FuseSvgIcon>heroicons-outline:plus</FuseSvgIcon>}
          >
            Create package
          </Button>
        </motion.div>
      </div>
    </>

  );
}

export default PackageManagerHeader;

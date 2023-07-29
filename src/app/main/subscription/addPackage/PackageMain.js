import React, { useState } from 'react';
import moduleName from './moduleData';
import { Box, Grid } from '@material-ui/core';
import {
  TextField,
  Switch,
  Select,
  MenuItem,
  FormControl,
  FormControlLabel,
  Button,
  Table,
  Checkbox,
  TableBody,
  TableCell,
  TableRow,
  TablePagination,
  Typography,
  Divider,
} from '@mui/material';
import axios from 'axios';

const initialFormState = {
  packageName: '',
  price: '',
  validity: '',
  days: 'Day',
  isAvailable: false,
  isHighlighted: false,
  modules: [],
};



function PackageMain() {
  const [page, setPage] = useState(0);
  const [formState, setFormState] = useState(initialFormState);
  const [rowsPerPage, setRowsPerPage] = useState(20);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formState);
    
        // Make the POST request using Axios
        axios.post('http://127.0.0.1:5000/api/package/createPackage', formState)
            .then((response) => {
                // Handle the response if needed
                console.log('Response:', response.data);
            })
            .catch((error) => {
                // Handle any errors that occur during the POST request
                console.error('Error:', error);
            });
        // Reset the form after submission
        setFormState(initialFormState);
    };
    
  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    const newValue = type === 'checkbox' ? checked : value;
    setFormState((prevState) => ({ ...prevState, [name]: newValue }));
  };

  const handleCheckboxChange = (event, index) => {
    const { checked } = event.target;
    const selectedItems = [...formState.modules];
    if (checked) {
      selectedItems.push(index);
    } else {
      const indexToRemove = selectedItems.indexOf(index);
      if (indexToRemove !== -1) {
        selectedItems.splice(indexToRemove, 1);
      }
    }
    setFormState((prevState) => ({ ...prevState, modules: selectedItems }));
  };



  return (
    <div style={{ display: 'flex' }}>
      <div style={{ flex: 1 }}>
        <form className="px-20 mt-4" onSubmit={handleSubmit}>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} sm={6}>
              <FormControl variant="outlined" style={{ width: '100%', height: '50px' }}>
                <Typography>Package name</Typography>
                <TextField
                  id="packageName"
                  variant="outlined"
                  style={{ width: '100%', marginTop: '2%' }}
                  name="packageName"
                  value={formState.packageName}
                  onChange={handleChange}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl variant="outlined" style={{ width: '100%', height: '50px' }}>
                <Typography>Price</Typography>
                <TextField
                  id="price"
                  variant="outlined"
                  style={{ width: '100%', marginTop: '2%' }}
                  name="price"
                  value={formState.price}
                  onChange={handleChange}
                />
              </FormControl>
            </Grid>
          </Grid>
          <Grid container spacing={2} alignItems="center" style={{ marginTop: '5%' }}>
            <Grid item xs={12} sm={6}>
              <FormControl variant="outlined" style={{ width: '100%' }}>
                <Typography>Validity</Typography>
                <TextField
                  id="validity"
                  variant="outlined"
                  style={{ width: '100%', marginTop: '2%' }}
                  name="validity"
                  value={formState.validity}
                  onChange={handleChange}
                />
                <FormControlLabel className="mt-4" control={<Switch name="isAvailable" checked={formState.isAvailable} onChange={handleChange} />} label="Available to purchase" />
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl variant="outlined" style={{ width: '100%' }}>
                <Typography>Days</Typography>
                <Select labelId="select-label-1" id="select-1" style={{ width: '100%' }} name="days" value={formState.days} onChange={handleChange}>
                  <MenuItem value="Day">Day</MenuItem>
                  <MenuItem value="Week">Week</MenuItem>
                  <MenuItem value="Month">Month</MenuItem>
                  <MenuItem value="Year">Year</MenuItem>
                </Select>
                <FormControlLabel className="mt-4" control={<Switch name="isHighlighted" checked={formState.isHighlighted} onChange={handleChange} />} label="Highlighted package" />
              </FormControl>
            </Grid>
          </Grid>
          <Divider style={{ marginTop: '20px', marginBottom: '20px', backgroundColor: 'black' }} />
          <Typography variant="h6" className="font-bold tracking-tight">
            Modules
          </Typography>
          <Table stickyHeader className="min-w-xl" aria-labelledby="tableTitle">
            <TableBody>
              <TableRow className="h-72 cursor-pointer" hover tabIndex={-1} style={{ backgroundColor: 'rgb(238, 238, 238)' }}>
                <TableCell className="p-4 sm:p-2 md:p-4 lg:p-8 flex-grow" component="th" scope="row" align="left">
                  <Typography variant="body1" fontWeight="bold">Select</Typography>
                </TableCell>
                <TableCell className="p-4 sm:p-2 md:p-4 lg:p-8 flex-grow" component="th" scope="row" align="left">
                  <Typography variant="body1" fontWeight="bold">Modules</Typography>
                </TableCell>
                <TableCell className="p-4 sm:p-2 md:p-4 lg:p-8 flex-grow" component="th" scope="row">
                  <Typography variant="body1" fontWeight="bold">Usage limit</Typography>
                </TableCell>
                <TableCell className="p-4 sm:p-2 md:p-4 lg:p-8 flex-grow" component="th" scope="row" align="center">
                  <Typography variant="body1" fontWeight="bold">Bulk limit</Typography>
                </TableCell>
              </TableRow>
              {moduleName.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((module, index) => (
                <TableRow key={index} className="h-72 cursor-pointer" hover tabIndex={-1}>
                  <TableCell className="p-4 sm:p-2 md:p-4 lg:p-8 flex-grow" component="th" scope="row">
                    <Checkbox
                      checked={formState.modules.includes(index)}
                      onChange={(event) => handleCheckboxChange(event, index)}
                    />
                  </TableCell>
                  <TableCell className="p-4 sm:p-2 md:p-4 lg:p-8 flex-grow" component="th" scope="row">
                    {module.moduleName}
                  </TableCell>
                  <TableCell className="p-4 sm:p-2 md:p-4 lg:p-8 flex-grow" component="th" scope="row">
                    <input
                      type="number"
                      className="form-control"
                      min={0}
                      style={{ width: '70px' }}
                      name={`usageLimit-${index}`}
                      value={formState.modules[index]?.usageLimit || ''}
                      onChange={handleChange}
                    />
                  </TableCell>
                  <TableCell className="p-4 sm:p-2 md:p-4 lg:p-8 flex-grow" component="th" scope="row">
                    <input
                      type="number"
                      className="form-control"
                      min={0}
                      style={{ width: '70px' }}
                      name={`bulkLimit-${index}`}
                      value={formState.modules[index]?.bulkLimit || ''}
                      onChange={handleChange}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <TablePagination
            rowsPerPageOptions={[20, 30, 50]}
            component="div"
            count={moduleName.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
}

export default PackageMain;

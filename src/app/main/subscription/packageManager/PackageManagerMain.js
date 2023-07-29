import FuseScrollbars from '@fuse/core/FuseScrollbars';
import _ from '@lodash';
import Typography from '@mui/material/Typography';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import NavLinkAdapter from '@fuse/core/NavLinkAdapter';
import { useState, useEffect } from "react"
import { motion } from 'framer-motion';
import withRouter from '@fuse/core/withRouter'
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';;
import Button from '@mui/material/Button';
import { ListItem, ListItemText } from '@mui/material';
import axios from 'axios';
import TablePagination from '@mui/material/TablePagination';



function PackageManagerMain(props) {
  const [page, setPage] = useState(0);
  const [data, setData] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (results) => {
    setSearchResults(results);
  };

  const [rowsPerPage, setRowsPerPage] = useState(10);

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:5000/api/package/getPackage');
        if (response) {
          setData(response.data.result);
        } else {
          alert("Not fetched")
        }

        // Handle the response data here
      } catch (error) {
        console.error(error);
        // Handle the error here
      }
    };

    fetchData();
  }, []);
  console.log(data)
  
  function handleChangePage(event, value) {
    setPage(value);
  }
  function handleChangeRowsPerPage(event) {
    setRowsPerPage(event.target.value);
  }
  return (

    <>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>

              <StyledTableCell align="center">Package name</StyledTableCell>
              <StyledTableCell align="center">Price</StyledTableCell>
              <StyledTableCell align="center">Validity</StyledTableCell>
              <StyledTableCell align="center">Default package</StyledTableCell>
              <StyledTableCell align="center">Actions</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((value) => (
              <StyledTableRow key={value.name}>
                <StyledTableCell component="th" scope="row" align="center">
                  {value.packageName}
                </StyledTableCell>
                <StyledTableCell align="center">{value.price}</StyledTableCell>
                <StyledTableCell align="center">{value.validity}</StyledTableCell>
                <StyledTableCell align="center">{value.default ? 'Yes' : 'No'}</StyledTableCell>
                <StyledTableCell align="right">
                <div className="flex justify-center">
                      <Button component={NavLinkAdapter} to="new/edit">
                        <FuseSvgIcon size={20}>heroicons-outline:plus</FuseSvgIcon>
                      </Button>
                      <Button>
                        <FuseSvgIcon size={20}>heroicons-outline:pencil</FuseSvgIcon>
                      </Button>
                      <Button>
                        <FuseSvgIcon size={20}>heroicons-outline:trash</FuseSvgIcon>
                      </Button>
                    </div>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />



    </>

  );
}

export default withRouter(PackageManagerMain);

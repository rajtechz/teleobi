import React from 'react';
import Typography from '@mui/material/Typography';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  fab: {
    margin: theme.spacing(2),
    marginLeft:"2px",
    width: theme.spacing(4),
    height: theme.spacing(4),
  },
}));

function PackageHeader() {
  const classes = useStyles();

  return (
    <div className="flex flex-col py-20 px-20">
      <div className="flex flex-row items-center">
        <Fab size="small" color="primary" aria-label="add" className={classes.fab}>
          <AddIcon />
        </Fab>
        <Typography variant="h6" className="font-bold tracking-tight">
          Add Package
        </Typography>
      </div>
     
    </div>
  );
}

export default PackageHeader;

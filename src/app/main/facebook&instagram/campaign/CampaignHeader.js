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

function CampaignHeader() {
  const classes = useStyles();

  return (
    <div className="flex flex-col py-20 px-20">
      <div className="flex flex-row items-center">
        <Fab size="small" color="primary" aria-label="add" className={classes.fab}>
          <AddIcon />
        </Fab>
        <Typography variant="h6" className="font-bold tracking-tight">
          Add OTN subscriber broadcast
        </Typography>
      </div>
      <Typography variant="body2" gutterBottom>
        The messenger platform's one-time notification allows a page to request a user to send one follow-up message after
        the 24-hour messaging window has ended. The user will be offered to receive a future notification. Once the user
        asks to be notified, the page will receive a token which is equivalent to permission to send a single message to
        the user. The token can only be used once and will expire within 1 year of creation.
      </Typography>
    </div>
  );
}

export default CampaignHeader;

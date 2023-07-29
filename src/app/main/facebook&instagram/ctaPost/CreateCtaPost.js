import { Switch, Typography, Button } from "@mui/material";
import { TextareaAutosize } from '@material-ui/core';
import { Box } from "@mui/system";
import React, { useState } from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import { useNavigate } from "react-router-dom";
import { Grid, TextField, FormControl, InputLabel, Select, MenuItem, ListSubheader } from '@mui/material';
import Collapse from '@mui/material/Collapse';


const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};




function CreateCtaPost() {


   

    const theme = useTheme();
    const [personName, setPersonName] = React.useState([]);
    const [isScheduledTime, setIsScheduledTime] = useState(false);
    const [selectedMessageType, setSelectedMessageType] = useState()


    const handleChange = (event) => {
        console.log(event)
        setSelectedMessageType(event.target.value);
    };
    const navigate = useNavigate();

    const handleCancelClick = () => {
        navigate(-1);
    };
    const handleSwitchChange = (event) => {
        setIsScheduledTime(event.target.checked);

    };

    return (
        <>
            <Box sx={{ p: 2 }}>
                <Typography variant="h6" color="#0000FF" fontWeight="bold">
                    Add user
                </Typography>
            </Box>

            <Box sx={{ p: 2 }}>

                <Box
                    sx={{
                        p: 2,
                        border: "1px solid #ccc",
                        alignItems: "center",
                        "& > :not(style)": { m: 1 },
                        width: "100%", // Set the input field to full width
                    }}
                >
                    <Box>
                    <Typography>Campaign Name</Typography>

                        <TextField
                        style={{marginTop:'2%'}}
                            fullWidth // Use fullWidth prop instead of width
                            helperText=" "
                            id="demo-helper-text-aligned-no-helper"
                            label="Campaign Name"
                        />
                    </Box>

                    <Typography>Messege</Typography>

                    <TextareaAutosize
                        rowsMin={5}
                        placeholder="Write your message here..."
                        style={{
                            marginTop: '0.5%',
                            width: '100%',
                            border: '1px solid gray',
                            borderRadius: '4px',
                            padding: '8px',
                        }}
                    />
                    <Box sx={{ display: 'flex' }}>

                        <TextField
                            sx={{ flexBasis: '50%', mr: 1 }}
                            helperText=" "
                            label="Password"
                        />
                        <FormControl sx={{ flexBasis: '50%', m: 1 }}>
                            <InputLabel htmlFor="grouped-select">Grouping</InputLabel>
                            <Select defaultValue="" id="grouped-select" label="Grouping">
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <ListSubheader>Category 1</ListSubheader>
                                <MenuItem value={1}>Option 1</MenuItem>
                                <MenuItem value={2}>Option 2</MenuItem>
                                <ListSubheader>Category 2</ListSubheader>
                                <MenuItem value={3}>Option 3</MenuItem>
                                <MenuItem value={4}>Option 4</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>

                    {/* Second row */}
                    <Box sx={{ display: 'flex' }}>
                        <TextField
                            sx={{ flexBasis: '50%', mr: 1 }}
                            helperText=" "
                            label="Password"
                        />
                        <FormControl sx={{ flexBasis: '50%', m: 1 }}>
                            <InputLabel htmlFor="grouped-select">Grouping</InputLabel>
                            <Select defaultValue="" id="grouped-select" label="Grouping">
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={1}>Option 1</MenuItem>
                                <MenuItem value={2}>Option 2</MenuItem>
                                <MenuItem value={3}>Option 3</MenuItem>
                                <MenuItem value={4}>Option 4</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </Box>
                <FormControlLabel
                            value="top"
                            style={{ marginTop: '5%', marginBottom: '2%' }}
                            control={<Switch color="primary" checked={isScheduledTime} onChange={handleSwitchChange} />}
                            label="Posting Time"
                            labelPlacement="top"
                        />

                        {isScheduledTime && (
                            <Grid container spacing={2} alignItems="center">
                                <Grid item xs={12} sm={6}>
                                    <Typography>Scheduled Time</Typography>
                                    <TextField id="datetime" type="datetime-local" variant="outlined" style={{ width: '100%', marginTop: '15px' }} />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Typography>Timezone</Typography>
                                    <Select
                                        labelId="select-label-1"
                                        id="select-1"
                                        onChange={handleChange}
                                        variant="outlined"
                                        style={{ width: '100%', marginTop: '15px' }}
                                    >
                                        <MenuItem value="">None</MenuItem>
                                        <MenuItem value={1}>Option 1</MenuItem>
                                        <MenuItem value={2}>Option 2</MenuItem>
                                        <MenuItem value={3}>Option 3</MenuItem>
                                    </Select>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Typography>Repost this post</Typography>
                                    <TextField id="datetime" type="datetime-local" variant="outlined" style={{ width: '100%', marginTop: '15px' }} />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Typography>Time interval</Typography>
                                    <Select
                                        labelId="select-label-1"
                                        id="select-1"
                                        onChange={handleChange}
                                        variant="outlined"
                                        style={{ width: '100%', marginTop: '15px' }}
                                    >
                                        <MenuItem value="">None</MenuItem>
                                        <MenuItem value={1}>Option 1</MenuItem>
                                        <MenuItem value={2}>Option 2</MenuItem>
                                        <MenuItem value={3}>Option 3</MenuItem>
                                    </Select>
                                </Grid>
                            </Grid>
                            
                            
                        )}

                        <div style={{ textAlign: 'center', padding: '16px' }}>
                            <Button variant="contained" color="primary" onClick={() => console.log('Button clicked')}>
                                Submit
                            </Button>
                        </div>






            </Box>





        </>
    )
}


export default CreateCtaPost
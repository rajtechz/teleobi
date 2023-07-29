import {  useState } from 'react';
import Typography from '@mui/material/Typography';
import { TextField, TextareaAutosize } from '@material-ui/core';
import { Box, Grid } from '@material-ui/core';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import RightSidebar from './RightSidebar';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Button from '@mui/material/Button';

const theme = createMuiTheme({
    overrides: {
        MuiInputBase: {
            root: {
                fontSize: '16px',
            },
        },
        MuiFormLabel: {
            root: {
                fontSize: '16px',
            },
        },
    },
});

function CampaignMain() {
    const [age, setAge] = useState('');
    const [isScheduledTime, setIsScheduledTime] = useState(false);
    const [selectedMessageType, setSelectedMessageType] = useState('Text')

    const handleSwitchChange = (event) => {
        setIsScheduledTime(event.target.checked);

    };

    const handleAgeChange=(event)=>{
        setAge(event.target.value);

    }

    // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform actions with the form values
    console.log('Form Values:', formValues);
    
    // Access and use individual form values like formValues.age, formValues.gender, etc.
  };


    

    const handleChange = (event) => {
        console.log(event)
        setSelectedMessageType(event.target.value);
    };

    return (
        <div style={{ display: 'flex' }}>
            <div style={{ flex: 1 }}>
                <MuiThemeProvider theme={theme}>
                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1, width: '25ch' },
                        }}
                        noValidate
                        autoComplete="off"
                    />

                    <Typography className="text-24 md:text-26 py-40 font-bold tracking-tight leading-none px-4 sm:pl-20">
                        Campaign Details
                    </Typography>

                    <form className="px-20" onSubmit={handleSubmit}>
                        <Grid container spacing={2} alignItems="center">
                            <Grid item xs={12} sm={6}>
                                <FormControl variant="outlined" style={{ width: '100%', height: '80px' }}>
                                    <Typography>Campaign Name</Typography>
                                    <TextField id="outlined-basic"  variant="outlined" style={{ width: '100%', marginTop: '2%' }} />
                                </FormControl>
                            </Grid>

                            <Grid item xs={12} sm={6}>
                                <FormControl variant="outlined" style={{ width: '100%', height: '30%' }}>
                                    <Typography>Select Page</Typography>
                                    <Select labelId="select-label-2" id="select-2" value={age} onChange={handleChange}>
                                        <MenuItem value="">Select</MenuItem>
                                        <MenuItem value={1}>Option 1</MenuItem>
                                        <MenuItem value={2}>Option 2</MenuItem>
                                        <MenuItem value={3}>Option 3</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                        </Grid>

                        <Typography variant="h6" gutterBottom className="text-24 md:text-26 font-bold tracking-tight py-40 px-2 leading-none  sm:pl-20">
                            Targeted Options
                        </Typography>

                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <FormControl variant="outlined" style={{ width: '100%', height: '30%' }}>
                                    <Typography>Gender</Typography>
                                    <Select labelId="select-label-1" id="select-1" value={age} onChange={handleAgeChange}>
                                        <MenuItem value="">Select</MenuItem>
                                        <MenuItem value="Male">Male</MenuItem>
                                        <MenuItem value="Female">Female</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>

                            <Grid item xs={12} sm={6}>
                                <FormControl variant="outlined" style={{ width: '100%', height: '30%' }}>
                                    <Typography className="px-2 ">Timezone</Typography>
                                    <Select labelId="select-label-2" id="select-2" value={age} onChange={handleChange}>
                                        <MenuItem value="">None</MenuItem>
                                        <MenuItem value={1}>Option 1</MenuItem>
                                        <MenuItem value={2}>Option 2</MenuItem>
                                        <MenuItem value={3}>Option 3</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>

                            <Grid item xs={12} sm={6}>
                                <FormControl variant="outlined" style={{ width: '100%', height: '30%' }}>
                                    <Typography className="px-2 ">Locale</Typography>
                                    <Select labelId="select-label-3" id="select-3" value={age} onChange={handleChange}>
                                        <MenuItem value="">None</MenuItem>
                                        <MenuItem value={1}>Option 1</MenuItem>
                                        <MenuItem value={2}>Option 2</MenuItem>
                                        <MenuItem value={3}>Option 3</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                        </Grid>

                        <Typography className="text-24 md:text-26 font-bold tracking-tight py-40 px-2 leading-none  sm:pl-20">
                            Message Template
                        </Typography>

                        <Grid item xs={12} sm={6}>
                            <FormControl variant="outlined" style={{ width: '100%', height: '60px' }}>
                                <Typography>Select Message Type</Typography>
                                <Select
                                    labelId="select-label-1"
                                    id="select-1"
                                    value={selectedMessageType}
                                    onChange={handleChange}
                                >
                                    <MenuItem value="Text">Text</MenuItem>
                                    <MenuItem value="Image">Image</MenuItem>
                                    <MenuItem value="File">File</MenuItem>
                                    <MenuItem value="Button">Button</MenuItem>
                                    <MenuItem value="Video">Video</MenuItem>
                                    <MenuItem value="Quick Reply">Quick Reply</MenuItem>
                                    <MenuItem value="Mp3">Mp3</MenuItem>

                                </Select>

                            </FormControl>
                        </Grid>
                        <TextareaAutosize
                            rowsMin={5}
                            placeholder="Write your message here..."
                            style={{
                                marginTop: '2%',
                                width: '100%',
                                border: '1px solid gray',
                                borderRadius: '4px',
                                padding: '8px',
                            }}
                        />

                        <FormControlLabel
                            value="top"
                            style={{ marginTop: '5%', marginBottom: '2%' }}
                            control={<Switch color="primary" checked={isScheduledTime} onChange={handleSwitchChange} />}
                            label="Sending Time"
                            labelPlacement="top"
                        />

                        {isScheduledTime && (
                            <Grid container spacing={2} alignItems="center">
                                <Grid item xs={12} sm={6}>
                                    <Typography>Scheduled Time</Typography>
                                    <TextField id="datetime" type="datetime-local" variant="outlined" style={{ width: '100%', marginTop: '15px' }} />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Typography>Select Option</Typography>
                                    <Select
                                        labelId="select-label-1"
                                        id="select-1"
                                        value={age}
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
                    </form>
                </MuiThemeProvider>
            </div>
            <div style={{ width: '1px', backgroundColor: 'lightgrey' }} />
            <div className="col-md-3 d-none d-md-block">
                <RightSidebar selectedMessageType={selectedMessageType} />
            </div>
        </div>
    );
}

export default CampaignMain;

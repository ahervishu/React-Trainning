import React from 'react'
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import Select from '@mui/material/Select';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button'; const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};



function getStyles(name, personName, theme) {
    return {
        fontWeight:
            personName.indexOf(name) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}





export default function ComposeTeam(props) {
    const [position, setPosition] = React.useState([]);
    const [fname, setFname] = React.useState('');
    const [lname, setLname] = React.useState('');
    const [height, setHeight] = React.useState('');
    const player = props.player;
    const allPositions = props.allPositions

    const submitForm = (e) => {
        e.preventDefault();
        props.setPlayer([...player, { pid: `${Math.random().toFixed(3) * 1000}`, fname: fname, lname: lname, height: height, position: position }]);
        setFname('');
        setLname('');
        setHeight('');
        setPosition([])
    }
    const theme = useTheme();
    const handleChange = (event) => {
        const {
            target: { value },
        } = event;
        setPosition(
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    return (
        <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            boxShadow: '0 0 10px 0.5px gray',
            padding:'35px'
        }}>
            <form onSubmit={submitForm} style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '30px'
            }}>
                <div><TextField
                    id="standard-read-only-input"
                    label="First Name"
                    variant="filled"
                    sx={{
                        width: '300px'
                    }}
                    value={fname}
                    onChange={e => setFname(e.target.value)}

                    required
                /></div>
                <div><TextField
                    id="standard-read-only-input"
                    label="Last Name"
                    variant="filled"
                     sx={{
                        width: '300px'
                    }}
                    value={lname}
                    onChange={e => setLname(e.target.value)}
                    required
                /></div>
                <div style={{ display: 'flex', justifyContent: 'center', marginLeft: "207px", gap: '20px', alignItems: 'center' }}><TextField
                    id="filled-read-only-input"
                    label="Height"
                    type='number'
                    variant="filled"
                    sx={{
                        width: '300px'
                    }}
                    value={height}
                    onChange={e => setHeight(e.target.value)}
                    required
                />
                    <Typography color={'red'}>*Height must be a number</Typography>
                </div>
                <div><FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="demo-multiple-name-label">Position</InputLabel>
                    <Select
                        labelId="demo-multiple-name-label"
                        id="demo-simple-select-standard"
                        multiple
                        value={position}
                        onChange={handleChange}
                        input={<OutlinedInput label="Position" />}
                        MenuProps={MenuProps}
                        sx={{
                            minWidth: '300px',
                            border: 'none !important'
                        }}
                    >
                        {allPositions.map((pos) => (
                            <MenuItem
                                key={pos}
                                value={pos}
                                style={getStyles(pos, position, theme)}
                            >
                                {pos}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl></div>
                <div><Button type='submit' variant="contained">Save</Button>
                </div>
            </form>
        </div>

    )
}

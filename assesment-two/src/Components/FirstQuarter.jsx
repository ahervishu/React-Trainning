import React, { useState } from 'react'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';

export default function FirstQuarter(props) {
    const allPlayer = props.player;
    const allPositions = props.allPositions;
    const [playerOne, setPlayerOne] = useState();
    const [positionOne, setPositionOne] = useState();
    const [playerTwo, setPlayerTwo] = useState();
    const [positionTwo, setPositionTwo] = useState();
    const [playerThree, setPlayerThree] = useState();
    const [positionThree, setPositionThree] = useState();
    const [playerFour, setPlayerFour] = useState();
    const [positionFour, setPositionFour] = useState();
    const [playerFive, setPlayerFive] = useState();
    const [positionFive, setPositionFive] = useState();

    console.log('positionOne', positionOne)

    const submitHandler = (e) => {
        e.preventDefault();
        console.log('clicked',
            [
                { playerOne: playerOne, positionOne: positionOne },
                { playerTwo: playerTwo, positionTwo: positionTwo },
                { playerThree: playerThree, positionThree: positionThree },
                { playerFour: playerFour, positionFour: positionFour },
                { playerFive: playerFive, positionFive: positionFive },
            ])
    }


    const selectedPlayerOne = allPlayer.find(player => player.pid === playerOne);
    const selectedPlayerTwo = allPlayer.find(player => player.pid === playerTwo);
    const selectedPlayerThree = allPlayer.find(player => player.pid === playerThree);
    const selectedPlayerFour = allPlayer.find(player => player.pid === playerFour);
    const selectedPlayerFive = allPlayer.find(player => player.pid === playerFive);

    return (
        <div style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%,-50%)', padding: '35px', borderRadius: '5px', boxShadow: '0 0 10px 2px gray ' }}>
            <form onSubmit={submitHandler}>
                <Box sx={{ display: 'flex', gap: '39px', flexDirection: 'column', alignItems: 'center' }}>

                    <div style={{ display: 'flex', justifyContent: 'center', gap: '70px' }}>
                        <FormControl sx={{ width: '300px' }} >
                            <InputLabel variant="standard" htmlFor="uncontrolled-native">
                                Player 1
                            </InputLabel>
                            <NativeSelect
                                required
                                defaultValue={playerOne}
                                onChange={e => {
                                    setPlayerOne(e.target.value);
                                    console.log('player', e.target.value)
                                }}
                            >
                                <option value={''}></option>
                                {
                                    allPlayer?.map(player => {
                                        if (
                                            player.pid === playerTwo ||
                                            player.pid === playerThree ||
                                            player.pid === playerFour ||
                                            player.pid === playerFive) return;
                                        return <option key={player.pid} value={player.pid} >{
                                            player.fname + ' ' + player.lname}</option>
                                    })
                                }
                            </NativeSelect>
                        </FormControl>
                        <FormControl sx={{ width: '300px' }}>
                            <InputLabel>
                                Position
                            </InputLabel>
                            <NativeSelect
                                required
                                defaultValue={positionOne}
                                onChange={e => setPositionOne(e.target.value)}
                            >
                                <option value={''}></option>
                                {
                                    selectedPlayerOne?.position?.map(position => {


                                        if (position === positionTwo ||
                                            position === positionThree ||
                                            position === positionFour ||
                                            position === positionFive) return;
                                        return <option key={position} value={position} >{
                                            position}</option>
                                    })
                                }
                            </NativeSelect>
                        </FormControl>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '70px' }}>
                        <FormControl sx={{ width: '300px' }} >
                            <InputLabel variant="standard" htmlFor="uncontrolled-native">
                                Player 2
                            </InputLabel>
                            <NativeSelect
                                required
                                defaultValue={playerTwo}
                                onChange={e => {
                                    setPlayerTwo(e.target.value);
                                    console.log('player', e.target.value)
                                }}
                            >
                                <option value={''}></option>
                                {
                                    allPlayer?.map(player => {
                                        if (
                                            player.pid === playerOne ||
                                            player.pid === playerThree ||
                                            player.pid === playerFour ||
                                            player.pid === playerFive) return;
                                        return <option key={player.pid} value={player.pid} >{
                                            player.fname + ' ' + player.lname}</option>
                                    })
                                }
                            </NativeSelect>
                        </FormControl>
                        <FormControl sx={{ width: '300px' }}>
                            <InputLabel>
                                Position
                            </InputLabel>
                            <NativeSelect
                                required
                                defaultValue={positionTwo}
                                onChange={e => setPositionTwo(e.target.value)}
                            >
                                <option value={''}></option>
                                {
                                    selectedPlayerTwo?.position?.map(position => {

                                        console.log('selectedPlayerTwo', selectedPlayerTwo);

                                        if (position === positionOne ||
                                            position === positionThree ||
                                            position === positionFour ||
                                            position === positionFive) return;
                                        return <option key={position} value={position} >{
                                            position}</option>
                                    })
                                }
                            </NativeSelect>
                        </FormControl>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '70px' }}>
                        <FormControl sx={{ width: '300px' }} >
                            <InputLabel variant="standard" htmlFor="uncontrolled-native">
                                Player 3
                            </InputLabel>
                            <NativeSelect
                                required
                                defaultValue={playerThree}
                                onChange={e => {
                                    setPlayerThree(e.target.value);
                                    console.log('player', e.target.value)
                                }}
                            >
                                <option value={''}></option>
                                {
                                    allPlayer?.map(player => {
                                        if (
                                            player.pid === playerOne ||
                                            player.pid === playerTwo ||
                                            player.pid === playerFour ||
                                            player.pid === playerFive) return;
                                        return <option key={player.pid} value={player.pid} >{
                                            player.fname + ' ' + player.lname}</option>
                                    })
                                }
                            </NativeSelect>
                        </FormControl>
                        <FormControl sx={{ width: '300px' }}>
                            <InputLabel>
                                Position
                            </InputLabel>
                            <NativeSelect
                                required
                                defaultValue={positionThree}
                                onChange={e => setPositionThree(e.target.value)}
                            >
                                <option value={''}></option>
                                {
                                    selectedPlayerThree?.position?.map(position => {

                                        if (position === positionOne ||
                                            position === positionTwo ||
                                            position === positionFour ||
                                            position === positionFive) return;
                                        return <option key={position} value={position} >{
                                            position}</option>
                                    })
                                }
                            </NativeSelect>
                        </FormControl>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '70px' }}>
                        <FormControl sx={{ width: '300px' }} >
                            <InputLabel variant="standard" htmlFor="uncontrolled-native">
                                Player 4
                            </InputLabel>
                            <NativeSelect
                                required
                                defaultValue={playerFour}
                                onChange={e => {
                                    setPlayerFour(e.target.value);
                                }}
                            >
                                <option value={''}></option>
                                {
                                    allPlayer?.map(player => {
                                        if (
                                            player.pid === playerOne ||
                                            player.pid === playerThree ||
                                            player.pid === playerTwo ||
                                            player.pid === playerFive) return;
                                        return <option key={player.pid} value={player.pid} >{
                                            player.fname + ' ' + player.lname}</option>
                                    })
                                }
                            </NativeSelect>
                        </FormControl>
                        <FormControl sx={{ width: '300px' }}>
                            <InputLabel>
                                Position
                            </InputLabel>
                            <NativeSelect
                                required
                                defaultValue={positionTwo}
                                onChange={e => setPositionFour(e.target.value)}
                            >
                                <option value={''}></option>
                                {
                                    selectedPlayerFour?.position?.map(position => {

                                        if (position === positionOne ||
                                            position === positionTwo ||
                                            position === positionThree ||
                                            position === positionFive) return;
                                        return <option key={position} value={position} >{
                                            position}</option>
                                    })
                                }
                            </NativeSelect>
                        </FormControl>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '70px' }}>
                        <FormControl sx={{ width: '300px' }} >
                            <InputLabel variant="standard" htmlFor="uncontrolled-native">
                                Player 5
                            </InputLabel>
                            <NativeSelect
                                required
                                defaultValue={playerTwo}
                                onChange={e => {
                                    setPlayerFive(e.target.value);
                                }}
                            >
                                <option value={''}></option>
                                {
                                    allPlayer?.map(player => {
                                        if (
                                            player.pid === playerOne ||
                                            player.pid === playerThree ||
                                            player.pid === playerFour ||
                                            player.pid === playerTwo) return;
                                        return <option key={player.pid} value={player.pid} >{
                                            player.fname + ' ' + player.lname}</option>
                                    })
                                }
                            </NativeSelect>
                        </FormControl>
                        <FormControl sx={{ width: '300px' }}>
                            <InputLabel>
                                Position
                            </InputLabel>
                            <NativeSelect
                                required
                                defaultValue={positionFive}
                                onChange={e => setPositionFive(e.target.value)}
                            >
                                <option value={''}></option>
                                {
                                    selectedPlayerFive?.position?.map(position => {

                                        if (position === positionOne ||
                                            position === positionTwo ||
                                            position === positionThree ||
                                            position === positionFour) return;
                                        return <option key={position} value={position} >{
                                            position}</option>
                                    })
                                }
                            </NativeSelect>
                        </FormControl>
                    </div>
                    <div>
                        <Button type='submit' variant="contained">Submit</Button></div>
                </Box>
            </form>
        </div>
    )
}

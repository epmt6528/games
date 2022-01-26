import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import React, {useState} from "react";
import {TicTacToe} from "./index";

const GameHome: React.FC = () => {
    const [gameTitle, setGameTitle] = useState('Tic Tac Toe')
    const returnGameByTitle = (title: string) => {
        switch(title){
            case 'Tic Tac Toe':
                return <TicTacToe />
            default:
                return 'No Game Selected'
        }
    }

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setGameTitle(newValue);
    };


    return(
        <Box sx={rootStyling}>
            <Tabs
                orientation="vertical"
                variant="scrollable"
                value={gameTitle}
                onChange={handleChange}
            >
                <Tab label="Tic Tac Toe" value={"Tic Tac Toe"} />
                <Tab label="Connect 4" value={"Connect 4"} />
            </Tabs>
            {returnGameByTitle(gameTitle)}
        </Box>
    )
}

const rootStyling = {
    display: 'grid',
    gridTemplateColumns: '1fr 85%'
}

export default GameHome
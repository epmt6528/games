import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import React, {useState} from "react";
import {OXOX} from "./pages";

function App() {
    const [gameTitle, setGameTitle] = useState('Tic Tac Toe')
    const returnGameByTitle = (title: string) => {
        switch(title){
            case 'Tic Tac Toe':
                return <OXOX />
            default:

        }
    }

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setGameTitle(newValue);
    };


  return (
    <div>
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
    </div>
  );
}

export default App;

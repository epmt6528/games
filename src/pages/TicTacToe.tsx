import React, {useState} from "react";
import Box from "@mui/material/Box";
import {TableCell} from "../components/organisms/TicTacToe";

type HandleCellClick = (index: number) => void

const TicTacToe: React.FC = () => {
    const [turn, setTurn] = useState('O')
    const [values, setValues] = useState(['','','','','','','','',''])

    const handleCellClick: HandleCellClick = (index) => {
        setValues(prevValues => {
            prevValues[index] = turn
            return prevValues
        })
        setTurn(prevTurn => {
            if(prevTurn === 'O') return 'X'
            return 'O'
        })
    }

    return (
        <Box sx={boxStyles}>
            {values.map((value, index)=>(
                <TableCell key={index} onClick={()=>handleCellClick(index)} value={value} />
            ))}
        </Box>
    )
}

const boxStyles = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridTemplateRows: 'repeat(3, 1fr)',
    width: '300px',
    height: '300px'
}

export default TicTacToe
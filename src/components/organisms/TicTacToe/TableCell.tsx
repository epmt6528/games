import React from "react";
import Box from "@mui/material/Box";

type Props = {
    value: string,
    onClick: () => void
}

const TableCell: React.FC<Props>= ({value, onClick}) => {
    return(
        <Box sx={boxStyles} onClick={onClick}>
            {value}
        </Box>
    )
}

const boxStyles = {
    alignItems: 'center',
    border: '1px solid black',
    display: 'flex',
    justifyContent: 'center',

    '&:hover': {
        background: 'gray',
        cursor: 'pointer',
    }
}

export default TableCell
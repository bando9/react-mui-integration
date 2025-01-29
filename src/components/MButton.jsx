/* eslint-disable react/prop-types */
import { Button, Tooltip } from "@mui/material";

function MButton(props) {
    return (
        <>
            <Tooltip title={props.title} arrow>
                <Button variant="contained" color="primary" {...props}  >{props.children}</Button>
            </Tooltip>
        </>
    )
}

export default MButton
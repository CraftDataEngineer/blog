import React from "react";
import stylesModule from './lib.styles.module.css';
import classnames from "classnames";
import {Avatar, Stack} from "@mui/material";


export default function ImageWithMessageBelow({icon, label, headline}) {
    return (
        <div>
            <Stack
                direction="column"
                justifyContent="center"
                alignItems="center"
                spacing={0.5}
            >
                <Avatar sx={{ bgcolor: "#f1bb00" }} >
                    {icon }
                </Avatar>
                <h3 className={classnames(stylesModule.title)}>{label}</h3>
                <p className={classnames(stylesModule.headline)}>{headline}</p>
            </Stack>
        </div>
    );
}


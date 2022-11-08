import React from "react";
import stylesModule from './lib.styles.module.css';
import classnames from "classnames";
import {Stack} from "@mui/material";

export default function MutltilineMessageWithImage({image,imageStyle, title, headline,action}) {


    return (
        <div >
            <Stack
                direction="column"
                justifyContent="center"
                alignItems="center"
                spacing={3}
            >
                <img src={image} className={imageStyle} alt={""}/>
                <h3 className={classnames(stylesModule.title)}>{title}</h3>
                <p className={classnames(stylesModule.headline)} >{headline}</p>
                <p >{ action }</p>
            </Stack>
        </div>
    );
}
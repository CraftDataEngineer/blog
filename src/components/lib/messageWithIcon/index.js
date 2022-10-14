import React from "react";
import stylesModule from './lib.styles.module.css';
import classnames from "classnames";
import {Chip} from "@mui/material";

export default function MessageWithIcon({icon, label, headline}) {
    return (
        <div>
            <Chip icon={icon}
                  style={{marginTop: "2%", fontFamily: "CircularStd-Black", fontSize: "18px"}}
                  label={label}/>
            <h3 className={classnames(stylesModule.headline)}>{ headline }</h3>
        </div>
    );
}


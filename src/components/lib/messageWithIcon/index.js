import React from "react";
import stylesModule from './lib.styles.module.css';
import classnames from "classnames";
import {Chip} from "@mui/material";

export default function MessageWithIcon({icon, label, headline,titleFontSize = "18px",descriptionStyle = stylesModule.headline}) {
    return (
        <div>
            <Chip icon={icon}
                  style={{marginTop: "2%", fontFamily: "CircularStd-Black", fontSize: titleFontSize }}
                  label={label}/>
            <h3 className={classnames(descriptionStyle)}>{ headline }</h3>
        </div>
    );
}


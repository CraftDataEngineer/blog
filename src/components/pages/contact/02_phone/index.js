import React from "react";
import stylesModule from './styles.module.css';
import classnames from "classnames";
import {Chip, InputAdornment, TextField} from "@mui/material";
import PhoneIcon from '@mui/icons-material/Phone';


export default function ContactCitation() {


    return (
            <div className={classnames("container" ,stylesModule.container)} >
                <div className="row  ">
                    <div className="col col--3"/>
                    <div className="col col--5">
                        <div className={stylesModule.citation}>
                            <Chip
                                icon={<PhoneIcon />}
                                style={{fontFamily: "CircularStd-Black", fontSize: "24px"}}
                                label="09 71 00 64 11"/>
                        </div>
                        <div className={stylesModule.cite}  >
                            <cite >Du Lundi au Vendredi : 09h à 13h </cite>
                        </div>
                    </div>
                </div>
            </div>
    );
}
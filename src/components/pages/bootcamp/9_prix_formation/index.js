import React from "react";
import stylesModule from './styles.module.css';
import YourSvg from '../../../../../static/img/header/geek_2.png';
import Diplom from "../../../../../static/img/inscription/training_course.png";
import classnames from "classnames";
import {Button, Chip} from "@mui/material";
import Link from "@docusaurus/core/lib/client/exports/Link";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import TextLeftImageRight from "../../../lib/textLeftImageRight";
import Badge from '@mui/material/Badge';

export default function BootCampPrix() {
    return (
        <div className="container">
            <TextLeftImageRight containerStyle={classnames(stylesModule.backgroundPrix)}
                                title={"Comment financer la formation"}
                                ponctuation="?"
                                description={
                                    <div className={classnames(stylesModule.headDescription)}>
                                        <h2>
                                             Frais de formation :
                                             <div className={classnames(stylesModule.text)}/>
                                                <Badge
                                                    badgeContent={"solde"}
                                                    color="success"
                                                    anchorOrigin={{
                                                        vertical: 'top',
                                                        horizontal: 'right',
                                                    }}
                                                ><Chip
                                                    style={{fontFamily: "CircularStd-Black", fontSize: "24px"}}
                                                    label="3 495 € "/>
                                                </Badge>


                                        </h2>

                                        <p>
                                            Vous avez une question sur le financement de la formation :
                                            Prenez contact avec un de nos conseillers pour une étude de votre dossier.
                                        </p>
                                        <Link to="/contact/" className={classnames(stylesModule.enrollButton)}>
                                            <Button variant="contained" startIcon={<PhoneInTalkIcon/>} size="large"
                                                    style={{backgroundColor: "#a6a2f7", borderColor: "transparent"}}>
                                                Nous Contacter
                                            </Button>
                                        </Link>
                                    </div>
                                }
                                imageSrc={Diplom}
                                imageStyle={stylesModule.featureSvg}
            />

        </div>
    );
}
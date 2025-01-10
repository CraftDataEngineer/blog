import React from "react";
import stylesModule from './styles.module.css';
import Diplom from "../../../../../static/img/inscription/training_course.png";
import classnames from "classnames";
import {Button, Chip} from "@mui/material";
import Link from "@docusaurus/core/lib/client/exports/Link";
import PhoneIcon from '@mui/icons-material/Phone';
import TextLeftImageRight from "../../../lib/textLeftImageRight";

export default function BootCampPrix() {
    return (
        <div className="container">
            <TextLeftImageRight containerStyle={classnames(stylesModule.backgroundPrix)}
                                title={"Comment financer la formation "}
                                ponctuation="?"
                                description={
                                    <div className={classnames(stylesModule.headDescription)}>
                                        <h2>
                                             Frais de formation :
                                             <div className={classnames(stylesModule.text)}/>
                                                <Chip
                                                    style={{fontFamily: "CircularStd-Black", fontSize: "24px"}}
                                                    label="3 495 € "/>
                                        </h2>

                                        <p>
                                            Vous avez une question sur le financement de la formation :
                                            prenez contact avec un de nos conseillers pour une étude de votre dossier.
                                        </p>
                                        <Link to="/contact/" className={classnames(stylesModule.enrollButton)}>
                                            <Button variant="contained" startIcon={< PhoneIcon />} size="large"
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
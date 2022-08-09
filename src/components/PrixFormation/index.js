import React from "react";
import stylesModule from './styles.module.css';
import YourSvg from '../../../static/img/header/geek_2.png';
import classnames from "classnames";
import {Button, Chip} from "@mui/material";
import Link from "@docusaurus/core/lib/client/exports/Link";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";

function PrixFormation() {
    return (
        <div className={classnames("container",stylesModule.backgroundPrix)} >
            <div className="row">
                <div className="col col--6">
                    <h3 className={classnames(stylesModule.headTeaser)}>
                        <span>Comment financer la formation </span>
                        <span style={{color: "#f1bb00"}}>?</span>
                    </h3>
                    <p className={classnames(stylesModule.headDescription)}>
                        <h2>
                            Frais de formation : <Chip
                                                       style={{fontFamily: "CircularStd-Black", fontSize: "24px"}}
                                                       label="4 000 €"/>

                        </h2>
                        <p>
                            Si vous êtes en recherche d’emploi, la formation peut être prise en charge à 100% par Pôle
                            Emploi.
                        </p>
                        <p>
                            Si vous êtes salarié, vous pouvez demander à votre entreprise de vous financer la formation.
                            Le reste à charge peut être échelonné jusqu’à 3 fois.
                        </p>
                        <Link to="/form/" className={classnames(stylesModule.enrollButton)} >
                            <Button variant="contained" startIcon={<PhoneInTalkIcon/>} size="large"
                                    style={{backgroundColor: "#a6a2f7", borderColor: "transparent"}}>
                                Nous Contacter
                            </Button>
                        </Link>
                    </p>
                </div>
                <div className="col"/>
                <div className="col col--5">
                    <div className="row">
                        <img src={YourSvg} className={stylesModule.featureSvg} alt={""}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PrixFormation;
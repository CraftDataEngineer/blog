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
                                title={"Vous avez besoin d’aide sur un projet "}
                                ponctuation="?"
                                description={
                                    <div className={classnames(stylesModule.headDescription)}>
                                        <p>
                                            Nous mettons à votre disposition notre expertise pour vous accompagner à chaque étape de votre projet. Que ce soit pour définir une stratégie, résoudre des défis techniques, ou garantir un déploiement réussi, nos experts vous apportent des solutions adaptées à vos besoins.
                                        </p>
                                        <Link to="/contact/" className={classnames(stylesModule.enrollButton)}>
                                            <Button variant="contained" startIcon={< PhoneIcon />} size="large"
                                                    style={{backgroundColor: "#a6a2f7", borderColor: "transparent", fontWeight: "bold"}}>
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
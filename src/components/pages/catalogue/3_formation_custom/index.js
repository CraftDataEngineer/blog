import React from "react";
import stylesModule from './styles.module.css';
import Diplom from "../../../../../static/img/inscription/training_course.png";
import classnames from "classnames";
import {Button, Chip} from "@mui/material";
import Link from "@docusaurus/core/lib/client/exports/Link";
import PhoneIcon from '@mui/icons-material/Phone';
import TextLeftImageRight from "../../../lib/textLeftImageRight";

export default function FormationCustom() {
    return (
        <div className="container">
            <TextLeftImageRight containerStyle={classnames(stylesModule.backgroundPrix)}
                                title={"Un besoin spécifique en formation "}
                                ponctuation="?"
                                description={
                                    <div className={classnames(stylesModule.headDescription)}>
                                        <p>
                                            Nous savons que chaque projet et chaque parcours est unique. Contactez-nous dès maintenant pour discuter de vos besoins et créer ensemble la formation qui vous correspond parfaitement.
                                        </p>
                                        <Link to="/contact/" className={classnames(stylesModule.enrollButton)}>
                                            <Button variant="contained" startIcon={< PhoneIcon />} size="large"
                                                    style={{backgroundColor: "#f1bb00", borderColor: "transparent",fontWeight: "bold"}}>
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
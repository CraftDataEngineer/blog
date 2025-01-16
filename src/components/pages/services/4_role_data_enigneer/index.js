import React from "react";
import stylesModule from './styles.module.css';
import YourSvg from "../../../../../static/img/rendez-vous/professional_development.png";
import classnames from "classnames";
import TextRightImageLeft from "../../../lib/textRightImageLeft";
import Link from "@docusaurus/core/lib/client/exports/Link";

const apecUrl = "https://www.apec.fr/tous-nos-outils/chiffres-marche-travail.html?metier=Data%20engineer%20F/H"

export default function BootCampDataEngineer() {
    return (
        <div className={classnames("container" ,stylesModule.container)}>
            <TextRightImageLeft
                title={"Pourquoi choisir Enovate "}
                ponctuation={ "?"}
                titleStyle={stylesModule.titleStyle}
                descriptionStyle={stylesModule.descriptionStyle}
                description={
                    <div>
                        <div>
                            <div>
                               <b>Enovat</b>, c’est l’assurance de collaborer avec une équipe d’experts passionnés, spécialisés en DevOps, Cloud et Intelligence Artificielle. Nous ne nous contentons pas de vous fournir des services : nous construisons avec vous des solutions sur mesure, conçues pour répondre à vos besoins uniques.
                            </div>
                        </div>
                    </div>
                }
                imageSrc={YourSvg}
            />
        </div>
    );
}
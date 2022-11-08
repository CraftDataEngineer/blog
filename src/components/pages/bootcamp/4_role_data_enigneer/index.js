import React from "react";
import stylesModule from './styles.module.css';
import YourSvg from "../../../../../static/img/landingPage/contact/personalized_learning.png";
import classnames from "classnames";
import TextRightImageLeft from "../../../lib/textRightImageLeft";
import Link from "@docusaurus/core/lib/client/exports/Link";

const apecUrl = "https://www.apec.fr/tous-nos-outils/chiffres-marche-travail.html?metier=Data%20engineer%20F/H"

export default function BootCampDataEngineer() {
    return (
        <div className={classnames("container" ,stylesModule.container)}>
            <TextRightImageLeft
                title={"Pourquoi devenir Data Engineer "}
                ponctuation={ "?"}
                titleStyle={stylesModule.titleStyle}
                descriptionStyle={stylesModule.descriptionStyle}
                description={
                    <div>
                        <div>
                            <div>
                                Avec l'émergence de la Data Science et du Big Data toutes les entreprises sont concernées par la maîtrise de leurs
                                données pour évoluer. Le Data Engineer est le maillon central qui permet
                                à une structure d’exploiter ses données : il fait partie des <Link to={apecUrl}> métiers les plus recherchés avec un salaire moyen de 46 500 euros ! </Link>
                            </div>
                        </div>
                    </div>
                }
                imageSrc={YourSvg}
            />
        </div>
    );
}
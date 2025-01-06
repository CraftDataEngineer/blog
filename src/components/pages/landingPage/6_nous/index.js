import React from "react";
import stylesModule from './styles.module.css';
import YourSvg from "../../../../../static/img/landingPage/contact/personalized_learning.png";
import TextRightImageLeft from "../../../lib/textLeftImageRight";
import classnames from "classnames";


export default function LandingPageNous() {


    return (
            <div className={classnames("container" ,stylesModule.container)}>
                <TextRightImageLeft
                    title={"NOTRE MÉTHODE"}
                    titleStyle={stylesModule.titleStyle}
                    descriptionStyle={stylesModule.descriptionStyle}
                    description={
                        <div>
                            <div>
                                <div>
                                    Nous avons la conviction que pour apprendre, il faut pratiquer !
                                    C'est pourquoi, nous vous proposons une formation <b>équilibrée</b> entre <b>théorie</b>
                                    , <b>pratique</b> et <b>études de cas</b> pour le meilleur accompagnement <b>personnalisé</b> et <b>immersif</b>.
                                </div>
                            </div>
                        </div>
                    }
                    imageSrc={YourSvg}
                />
            </div>
    );
}
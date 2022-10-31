import React from "react";
import stylesModule from './styles.module.css';
import YourSvg from "../../../../../static/img/landingPage/methodo/gamification_in_learning.png";
import TextRightImageLeft from "../../../lib/textRightImageLeft";
import classnames from "classnames";


export default function LandingPageMethodo() {


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
                                    Notre accompagnement personnalisé et immersif est un équilibre entre théorie, pratique et études de cas inspirées de l'expérience de nos professeurs.
                                </div>
                            </div>
                        </div>
                    }
                    imageSrc={YourSvg}
                />
            </div>
    );
}
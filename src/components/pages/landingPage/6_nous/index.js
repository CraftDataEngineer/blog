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
                                    Nous avons la conviction que pour apprendre, <b>il faut pratiquer ! </b>
                                    Notre objectif est de vous aider à grandir, à développer vos compétences et à vous approprier durablement les produits que nous mettons en place ensemble.
                                    <b> Avec Enovat</b>, vous ne recevez pas seulement une solution, vous en devenez l’acteur principal, prêt à relever vos futurs défis en toute autonomie.
                                </div>
                            </div>
                        </div>
                    }
                    imageSrc={YourSvg}
                />
            </div>
    );
}
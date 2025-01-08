import React from "react";
import stylesModule from './styles.module.css';
import YourSvg from "../../../../../static/img/landingPage/methodo/gamification_in_learning.png";
import TextRightImageLeft from "../../../lib/textRightImageLeft";
import classnames from "classnames";


export default function LandingPageMethodo() {


    return (
            <div className={classnames("container" ,stylesModule.container)}>
                <TextRightImageLeft
                    title={"POURQUOI ENOVAT"}
                    ponctuation="?"
                    titleStyle={stylesModule.titleStyle}
                    descriptionStyle={stylesModule.descriptionStyle}
                    description={
                        <div>
                            <div>
                                <div>  Chez <b>Enovat</b>, nos formations personnalisées combinent <b>théorie</b>, <b>pratique</b> et cas concrets pour garantir une maîtrise durable des compétences clés. Nos <b>experts</b> vous accompagnent avec des solutions adaptées à vos contraintes organisationnelles et techniques. Que ce soit pour le DevOps, le cloud ou l’intelligence artificielle, nous proposons des approches parfaitement alignées avec vos besoins.  </div>
                            </div>

                        </div>
                    }
                    imageSrc={YourSvg}
                />
            </div>
    );
}
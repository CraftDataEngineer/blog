import React from "react";
import stylesModule from './styles.module.css';
import Bootcamp from "../../../../../static/img/landingPage/produits/bootcamp.png";
import Formations from "../../../../../static/img/landingPage/produits/formations.png";
import ThreeItemsAlignedHorizontally from "../../../lib/threeItemsAlignedHorizontally";
import classnames from "classnames";
import MutltilineMessageWithImage from "../../../lib/mutltilineMessageWithImage";


export default function LandingPageProduits() {


    return (
        <div className={classnames("container", stylesModule.localcontainer)}>
            <ThreeItemsAlignedHorizontally
                firstItem={<MutltilineMessageWithImage title="Conseil"
                                                       image={Bootcamp}  headline="Bénéficiez de l'accompagnement de nos experts pour construire des solutions sur mesure, avec un time to market optimisé et la garantie de la qualité de chaque livrable."
                                                       action={<a
                                                           className="button button--warning button--outline"
                                                           href={"/services"}>DÉCOUVRIR </a>}

                />}


                secondItem={<MutltilineMessageWithImage title="Formations"
                                                        image={Formations}
                                                        headline="Nous vous accompagnons dans le développement de vos compétences en vous proposant un catalogue complet de formations adaptées à vos besoins."

                                                        action={<a className="button button--warning button--outline"
                                                                   href={"/catalogue"}>DÉCOUVRIR </a>}
                />}
            />
        </div>
    );
}
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
                                                       image={Bootcamp}  headline="Développer de nouvelles compétences solides et durables pour lancer votre carrière en participant à notre Bootcamp."
                                                       action={<a
                                                           className="button button--warning button--outline"
                                                           href={"/bootcamp"}>DÉCOUVRIR </a>}

                />}


                secondItem={<MutltilineMessageWithImage title="Formations"
                                                        image={Formations}
                                                        headline="Nous vous aidons à développer vos compétences numériques grâce à un catalogue complet de formations."

                                                        action={<a className="button button--warning button--outline"
                                                                   href={"/catalogue"}>DÉCOUVRIR </a>}
                />}
            />
        </div>
    );
}
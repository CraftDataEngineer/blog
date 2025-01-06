import React from "react";
import stylesModule from './styles.module.css';
import classnames from "classnames";

export default function QuiSommesNousHero() {


    return (
        <header className={classnames('hero hero--primary headTest', stylesModule.heroSection)}>
            <div className="container">
                <div className={"container"}>
                    <h3 className={classnames(stylesModule.title)}>
                        <span>POURQUOI ENOVAT</span>
                        <span className={classnames(stylesModule.point)}>?</span>
                    </h3>
                    <div className={classnames(stylesModule.description)}>
                        Enovat est le fruit de l'association de deux passionnés.  Soucieux des bonnes pratiques de développement, nous avons accompagné plusieurs grands comptes sur la conception de plateformes de données et sur l'utilisation des méthodes de collaboration en agile.
                    </div>
                </div>
                <div className={stylesModule.seperator}/>
                <div className={"container"}>
                    <h3 className={classnames(stylesModule.title)}>
                        <span>NOTRE MISSION</span>
                        <span className={classnames(stylesModule.point)}>.</span>
                    </h3>
                    <div className={classnames(stylesModule.description)}>
                        La volonté de Enovat est le partage des connaissances et l’expertise sur les sujets data. Équiper les futurs développeurs de demain avec des connaissances solides en programmation et en Big Data.
                    </div>
                </div>
            </div>
        </header>
    );
}
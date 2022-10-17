import React from "react";
import stylesModule from './styles.module.css';
import classnames from "classnames";

export default function CatalogueHero() {

    return (
        <header className={classnames('hero headTest', stylesModule.heroSection)}>
            <div className="container">
                <h3 className={classnames(stylesModule.title)}>
                    <span>Toutes nos formations</span>
                    <span className={classnames(stylesModule.point)}>.</span>
                </h3>
                <div className={classnames(stylesModule.description)}>
                    Devenez un <strong>Data Engineer</strong> opérationnel, grâce à un
                    accompagnement <b>personnalisé et immersif</b>.
                </div>
            </div>
        </header>
    );
}
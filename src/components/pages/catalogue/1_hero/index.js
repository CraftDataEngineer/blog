import React from "react";
import stylesModule from './styles.module.css';
import classnames from "classnames";

export default function CatalogueHero() {

    return (
        <header className={classnames('hero headTest')}>
            <div className="container">
                <h3 className={classnames(stylesModule.title)}>
                    <span>Nos formations</span>
                    <span className={classnames(stylesModule.point)}>.</span>
                </h3>
                <div className={classnames(stylesModule.description)}>
                   Découvrez le catalogue complet de nos formations.
                </div>
                <div className={classnames(stylesModule.description)}>
                    Des cours adaptés pour <b>optimiser</b> et <b>accélérer</b> vos projets !
                </div>
            </div>
        </header>
    );
}
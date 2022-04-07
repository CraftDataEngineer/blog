import React from "react";
import useDocusaurusContext from "@docusaurus/core/lib/client/exports/useDocusaurusContext";
import stylesModule from './styles.module.css';
import YourSvg from '../../../static/img/header/header.svg';
import classnames from "classnames";


function HomepageHeader() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <header className={classnames('hero hero--primary headTest', stylesModule.heroSection)}>
            <div className="container" style={{paddingTop: "5%"}}>
                <div className="row">
                    <div className="col col--6">
                        <h6 className={classnames(stylesModule.headTitle)}><span>{siteConfig.title}</span></h6>
                        <h3 className={classnames(stylesModule.headTeaser)}>
                            <span>Découverez le métier du Data Engineer.</span></h3>
                        <p className={classnames(stylesModule.headDescription)}>
                            <span>

                                <b> Expert</b> dans la manipulation et la transformation des données, le <b>Data Engineer </b>
                                 a vu le jour avec l'émergence du <b>Big Data</b>  et figure parmi les profils les plus recherchés par les entreprises !
                                <b> Grâce</b> à un accompagnement personnalisé pour chaque apprenant, notre formation vous donnera les
                                clefs nécessaires pour rejoindre une équipe en tant que <b>Craft</b> Data Engineer !
                                <b> Bonnes pratiques de programmation</b>, <b> DevOps </b> et <b> Big Data </b> n’auront plus de secret pour vous !

                            </span>
                        </p>
                    </div>
                    <div className="col"/>
                    <div className="col col--5">
                        <div className={classnames("text--center")}>
                            <YourSvg className={stylesModule.featureSvg} alt={"test"}/>
                        </div>
                    </div>
                </div>
                <div className={classnames("row ", stylesModule.containerAnnoucements)}>
                    <div className="col ">
                        <span>Financement :</span>
                        <h2 style={{marginTop: "2%"}}> 5000 € </h2>
                        <span className={classnames(stylesModule.displayMobile)}>Formation éligible au CPF</span>
                    </div>
                    <div className={classnames("col ", stylesModule.verticleLine)}>
                        <span>Prochain cours :</span>
                        <h3 style={{marginTop: "2%"}}> JUILLET 05, 2022</h3>
                        <span className={classnames(stylesModule.displayMobile)}>Durée 5 semaines</span>
                    </div>
                    <div className={classnames("col ", stylesModule.verticleLine)}>
                        <span>Prérequis :</span>
                        <h3 style={{marginTop: "2%"}}>Data Geek</h3>
                        <span
                            className={classnames(stylesModule.displayMobile)}>Connaissances basiques en développement et SQL</span>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default HomepageHeader;
import React from "react";
import useDocusaurusContext from "@docusaurus/core/lib/client/exports/useDocusaurusContext";
import stylesModule from './styles.module.css';
import YourSvg  from '../../../static/img/header/header.svg';
import classnames from "classnames";


function HomepageHeader() {
    const {siteConfig} = useDocusaurusContext();
    return (
    <header className={classnames('hero hero--primary headTest', stylesModule.heroSection)}>
            <div className="container" style={{paddingTop:"5%"}}>
                <div className="row">
                    <div className="col col--6">
                        <h6 className={classnames(stylesModule.headTitle)}> <span >{siteConfig.title}</span></h6>
                        <h3 className={classnames(stylesModule.headTeaser)}> <span >Decouverez le metier du Data Engineer.</span></h3>
                        <p className={classnames(stylesModule.headDescription)}>
                            <span >
                                Le <b>Big Data</b> a basculé l’utilisation des données vers une autre dimension.
                                Des volumétries beaucoup plus importantes à une échelle étendue à l’internationale ! <b>Expert</b> dans la manipulation et la transformation des données, le <b>Data Engineer</b> a vu le jour et constitue aujourd'hui un maillon essentiel
                                dans chaque entreprise orientée data.
                            </span>
                        </p>
                    </div>
                    <div className="col"/>
                    <div className="col col--5">
                        <div className={classnames("text--center")}>
                            <YourSvg className={stylesModule.featureSvg} alt={"test"} />
                        </div>
                    </div>
                </div>
                <div className={classnames("row ",stylesModule.containerAnnoucements)}>
                    <div className="col "  >
                        <span>Financement :</span>
                        <h2> 2000 € </h2>
                        <span className={classnames(stylesModule.displayMobile)}>Formation éligible au CPF</span>
                    </div>
                    <div className={classnames("col ",stylesModule.verticleLine)} >
                        <span>Prochain cours :</span>
                        <h3>JUILLET 05, 2022</h3>
                        <span  className={classnames(stylesModule.displayMobile)}>Durée 5 semaines</span>
                    </div>
                    <div className={classnames("col ",stylesModule.verticleLine)}>
                        <span>Prérequis :</span>
                        <h3 >Data Geek</h3>
                        <span className={classnames(stylesModule.displayMobile)}>Connaissances basiques en développement</span>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default HomepageHeader;
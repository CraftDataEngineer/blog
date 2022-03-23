import React from "react";
import useDocusaurusContext from "@docusaurus/core/lib/client/exports/useDocusaurusContext";
import stylesModule from './styles.module.css';
import YourSvg  from '../../../static/img/header/header.svg';
import classnames from "classnames";


function HomepageHeader() {
    const {siteConfig} = useDocusaurusContext();
    return (
    <header className={classnames('hero hero--primary headTest', stylesModule.heroSection)}>
            <div className="container" style={{paddingBottom: "180px",paddingTop:"10%"}}>
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
            </div>
        </header>
    );
}

export default HomepageHeader;
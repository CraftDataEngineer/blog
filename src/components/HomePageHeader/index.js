import React from "react";
import useDocusaurusContext from "@docusaurus/core/lib/client/exports/useDocusaurusContext";
import stylesModule from './styles.module.css';
import YourSvg  from '../../../static/img/de_glob.svg';
import classnames from "classnames";
import styles from "../HomePageModules/styles.module.css";


function HomepageHeader() {
    const {siteConfig} = useDocusaurusContext();
    return (
    <header className={classnames('hero hero--primary headTest', stylesModule.heroSection)}>
            <div className="container" style={{paddingBottom: "150px",paddingTop:"10%"}}>
                <div className="row">
                    <div className="col col--7">
                        <h6 className={classnames(stylesModule.headTitle)}> <span >{siteConfig.title}</span></h6>
                        <h3 className={classnames(stylesModule.headTeaser)}> <span >Decouverez le metier du Data Engineer.</span></h3>
                        <p className={classnames(stylesModule.headDescription)}>
                            <span >Devenez un expert de du traitement et stockage des données !
                                Amener la culture craft au coeur de vos developpemnts !
                             Amener la culture craft au coeur de vos developpemnts !</span>
                        </p>
                    </div>
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
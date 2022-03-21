import React from "react";
import styles from './styles.module.css';
import YourSvg from '../../../static/img/module/parcours.svg';
import classnames from "classnames";
import stylesModule from "./styles.module.css";


function HomepageModules() {
    return (
        <div className={classnames(styles.moduleContainer)}>
            <div className={classnames("container")} style={{paddingBottom: "3%"}}>
                <h6 className={classnames(styles.modulesTitle)}><span>Craft Data Engineer</span></h6>
                <h3 className={classnames(styles.modulesTeaser)}><span>Decouverez le metier du Data Engineer.</span>
                </h3>
                <p className={classnames(styles.modulesDescription)}>
                    <span>Devenez un expert de du traitement et stockage des données ! </span>
                </p>
                <div className={classnames("text--center")}>
                    <YourSvg className={classnames(stylesModule.featureSvg)}  alt={"test"}/>
                </div>
            </div>
        </div>
    )
}

export default HomepageModules;
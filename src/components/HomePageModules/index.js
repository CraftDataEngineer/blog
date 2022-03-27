import React from "react";
import styles from './styles.module.css';
import YourSvg from '../../../static/img/module/parcours.svg';
import classnames from "classnames";
import stylesModule from "./styles.module.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';




function HomepageModules() {

    function f() {
        if (document.getElementById('test1').id !== undefined) {
            document.getElementById('test1').id = 'bolt1';
        }
        if (document.getElementById('test2').id !== undefined) {
            document.getElementById('test2').id = 'bolt2';
        }
        if (document.getElementById('test3') !== undefined) {
            document.getElementById('test3').id = 'bolt3';
        }
    }


    return (
        <div id="parcours" className={classnames(styles.moduleContainer)}>
            <div className={classnames("container")} style={{paddingBottom: "3%"}}>
                <h6 className={classnames(styles.modulesTitle)}><span>Craft Data Engineer</span></h6>
                <h3 className={classnames(styles.modulesTeaser)}><span>Decouverez le metier du Data Engineer.</span>
                </h3>
                <p className={classnames(styles.modulesDescription)}>
                    <span>Devenez un expert de du traitement et stockage des données ! </span>
                </p>
                <div className={classnames("text--center")}>
                    <AnimationOnScroll animateIn="animate__fadeIn" afterAnimatedIn={f} delay="100" animatePreScroll="false">
                        <YourSvg className={classnames(stylesModule.featureSvg)}  alt={"test"}/>
                    </AnimationOnScroll>
                </div>
            </div>
        </div>
    )
}

export default HomepageModules;
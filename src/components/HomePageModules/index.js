import React, {useState} from "react";
import styles from './styles.module.css';
import YourSvg from '../../../static/img/module/parcours-new.svg';
import classnames from "classnames";
import stylesModule from "./styles.module.css";
import {AnimationOnScroll} from 'react-animation-on-scroll';


const textIds = ["text1", "text2", "text3", "text4", "text5", "text6"]
const boltIds = ["bolt1", "bolt2", "bolt3", "bolt4", "bolt5", "bolt6"]


function HomepageModules() {

    function changeIdsToAnimate(visible) {
        textIds.forEach((element, index) => {
            if (document.getElementById(element).id !== undefined) {
                document.getElementById(element).id = boltIds[index];
            }
        })
    }

    return (
        <div id="parcours" className={classnames(styles.moduleContainer)}>
            <div className={classnames("container")} >
                <h6 className={classnames(styles.modulesTitle)}><span>Craft Data Engineer</span></h6>
                <h3 className={classnames(styles.modulesTeaser)}><span>Devenez un expert de la donnée !</span>
                </h3>
                <p className={classnames(styles.modulesDescription)}>
                    <span>Un parcours complet pour gagner en expertise ! </span>
                </p>
                <div className={classnames("text--center",styles.modulesSvg)}>
                    <AnimationOnScroll offset={300} animateIn="animate__fadeIn" afterAnimatedIn={changeIdsToAnimate}
                                       animatePreScroll={false}>
                        <YourSvg className={classnames(stylesModule.featureSvg)} alt={"test"}/>
                    </AnimationOnScroll>
                </div>
            </div>
        </div>
    )
}

export default HomepageModules;
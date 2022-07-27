import styles from "./styles.module.css";
import React from "react";
import classnames from "classnames";
import Infinite from '../../../static/img/teaser/infinite.svg';
import Exercices from '../../../static/img/teaser/exercices.png';
import Tp from '../../../static/img/teaser/lab.png';
import Atelier from '../../../static/img/teaser/atelier.png';
import Project from '../../../static/img/teaser/build.png';
import Design from '../../../static/img/teaser/design.png';
import TakeAway from '../../../static/img/teaser/takeaway.png';
import Dojo from '../../../static/img/teaser/judo.png';
import Education from '../../../static/img/teaser/education.png';
import stylesModule from "../HomePageModules/styles.module.css";
import Question from "../../../static/img/form/think.png";

const MOBILE_SIZE = 800

class HomePageTeaser extends React.Component {

    constructor(props) {
        super(props);
        this.state = {showTheorie: true, showPratique: false};

    }


    openBeta = () => {
        this.setState(state => ({
            ...state,
            showPratique: true,
            showTheorie: false
        }));
    };

    openAlpha = () => {
        this.setState(state => ({
            ...state,
            showPratique: false,
            showTheorie: true
        }));
    };

    render() {
        const mobileWidth = (typeof window !== "undefined") ? window.innerWidth <= MOBILE_SIZE : false
        return (
            <div className={classnames(styles.teaserContainer)}>
                <div className={classnames("container", styles.displayMobileHeader)}>
                    <div className="row">
                        <div className="col">
                            <h3 className={classnames(styles.teaserTeaser)}><span>Vous hésitez sur votre choix de formation <span style={{color:"#f1bb00"}}>?</span></span>
                            </h3>
                            <p className={classnames(styles.teaserDescription)}>
                                Posez nous toutes vos questions !
                            </p>
                        </div>
                        <div className="col col--5">
                            <img alt={"inscription"} src={Question} className={classnames(stylesModule.infinteSvg)} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default HomePageTeaser;
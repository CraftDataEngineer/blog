import styles from "./styles.module.css";
import React from "react";
import classnames from "classnames";
import Question from "../../../../../static/img/form/think.png";

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
                            <img alt={"inscription"} src={Question} className={classnames(styles.infinteSvg)} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default HomePageTeaser;
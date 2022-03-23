import styles from "./styles.module.css";
import React from "react";
import classnames from "classnames";
import DataFilesPng from '../../../static/img/teaser/data_files.png';
import Program from '../../../static/img/teaser/programmer.png';
import Database from '../../../static/img/teaser/server.png';
import Process from '../../../static/img/teaser/process.png';
import Ops from '../../../static/img/teaser/ops.png';
import Genius from '../../../static/img/teaser/genius.png';
import BookPng from '../../../static/img/teaser/book.png';

const MOBILE_SIZE = 800

class HomePageTeaser extends React.Component {

    constructor(props) {
        super(props);
        this.state = {showAlpha: true, showBeta: false , isMobile:false};

    }

    componentDidMount() {
        this.setState({
            isMobile:  window.innerWidth <= MOBILE_SIZE
        });
    }

    openBeta = () => {
        this.setState(state => ({
            ...state,
            showBeta: true,
            showAlpha: false
        }));
    };

    openAlpha = () => {
        this.setState(state => ({
            ...state,
            showBeta: false,
            showAlpha: true
        }));
    };

    render() {
        return (
            <div className={classnames(styles.teaserContainer)}>
                <div className={classnames("container")}>
                    <h6 className={classnames(styles.teaserTitle)}><span>Craft Data Engineer</span></h6>
                    <h3 className={classnames(styles.teaserTeaser)}><span>Data engineer, quel est ce nouveau métier ?</span>
                    </h3>
                    <p className={classnames(styles.teaserDescription)}>
                        <span>Devenez un expert de du traitement et stockage des données ! </span>
                    </p>
                </div>
                <div className={classnames("container")}
                     style={{color: "#ffff", background: "rgba(189, 195, 199, 0.2)", height: "1000%"}}>
                    <ul className={`tabs ${this.state.isMobile ? "" : "tabs--block"}`}>
                        <li className={`tabs__item ${this.state.showAlpha ? "tabs__item--active" : ""}`}
                            style={{color: "#ffff"}} onClick={this.openAlpha}>Compétences
                        </li>
                        <li className={`tabs__item ${this.state.showBeta ? "tabs__item--active" : ""}`}
                            style={{color: "#ffff"}} onClick={this.openBeta}>Missions
                        </li>
                    </ul>

                    {this.state.showAlpha && <div className={classnames("container")} style={{color: "#ffff"}}>
                        <div className="row" style={{padding: "5% 10% 0 10%"}}>
                            <div className="col">
                                <div>
                                    <img className={classnames(styles.moduleSvg)} src={Program} alt={"test"}/>
                                </div>
                                <h3 className={classnames(styles.teaserMenuTitle)}><span> Développement</span>
                                </h3>
                                <p className={classnames(styles.teaserMenuDescription)}>
                                    <span>
                                        Il est éssentiel pour le Data Engineer de maitriser les langages de développement (Python , Java , Scala ...)
                                        et faire du code de qualité.
                                    </span>
                                </p>
                            </div>
                            <div className="col col--2"/>
                            <div className="col">
                                <div>
                                    <img className={classnames(styles.moduleSvg)} src={Database} alt={"test"}/>
                                </div>
                                <h3 className={classnames(styles.teaserMenuTitle)}><span>Stockage</span>
                                </h3>
                                <p className={classnames(styles.teaserMenuDescription)}>
                                    <span>Devenez un expert de du traitement et stockage des données ! Devenez un expert de du traitement et stockage des données ! </span>
                                </p></div>
                        </div>
                        <div className="row" style={{padding: "5% 10% 10% 10%"}}>
                            <div className="col">
                                <div>
                                    <img className={classnames(styles.featureFiles,styles.moduleSvg)} src={Genius} alt={"test"}/>
                                </div>
                                <h3 className={classnames(styles.teaserMenuTitle)}><span>Traitement Distribué</span>
                                </h3>
                                <p className={classnames(styles.teaserMenuDescription)}>
                                    <span>Devenez un expert de du traitement et stockage des données ! Devenez un expert de du traitement et stockage des données ! </span>
                                </p>
                            </div>
                            <div className="col col--2"/>
                            <div className="col">
                                <div>
                                    <img className={classnames(styles.featureFiles,styles.moduleSvg)} src={Ops} alt={"test"}/>
                                </div>
                                <h3 className={classnames(styles.teaserMenuTitle)}><span>DevOps</span>
                                </h3>
                                <p className={classnames(styles.teaserMenuDescription)}>
                                    <span>Devenez un expert de du traitement et stockage des données ! Devenez un expert de du traitement et stockage des données ! </span>
                                </p></div>
                        </div>
                    </div>
                    }
                    {this.state.showBeta && <div className={classnames("container")} style={{color: "#ffff"}}>
                        <div className="row" style={{padding: "10% 10% 0 10%"}}>
                            <div className="col">
                                <div>
                                    <img className={classnames(styles.featureFiles,styles.moduleSvg)} src={BookPng} alt={"test"}/>
                                </div>
                                <h3 className={classnames(styles.teaserMenuTitle)}><span>Decouverez le metier du Data Engineer.</span>
                                </h3>
                                <p className={classnames(styles.teaserMenuDescription)}>
                                    <span>Devenez un expert de du traitement et stockage des données ! Devenez un expert de du traitement et stockage des données ! </span>
                                </p>
                            </div>
                            <div className="col">
                                <div>
                                    <img className={classnames(styles.featureFiles,styles.moduleSvg)} src={BookPng} alt={"test"}/>
                                </div>
                                <h3 className={classnames(styles.teaserMenuTitle)}><span>Decouverez le metier du Data Engineer.</span>
                                </h3>
                                <p className={classnames(styles.teaserMenuDescription)}>
                                    <span>Devenez un expert de du traitement et stockage des données ! Devenez un expert de du traitement et stockage des données ! </span>
                                </p></div>
                        </div>
                        <div className="row" style={{padding: "10% 10% 10% 10%"}}>
                            <div className="col">
                                <div>
                                    <img className={classnames(styles.featureFiles,styles.moduleSvg)} src={BookPng} alt={"test"}/>
                                </div>
                                <h3 className={classnames(styles.teaserMenuTitle)}><span>Decouverez le metier du Data Engineer.</span>
                                </h3>
                                <p className={classnames(styles.teaserMenuDescription)}>
                                    <span>Devenez un expert de du traitement et stockage des données ! Devenez un expert de du traitement et stockage des données ! </span>
                                </p></div>
                            <div className="col">
                                <div>
                                    <img className={classnames(styles.featureFiles,styles.moduleSvg)} src={BookPng} alt={"test"}/>
                                </div>
                                <h3 className={classnames(styles.teaserMenuTitle)}><span>Decouverez le metier du Data Engineer.</span>
                                </h3>
                                <p className={classnames(styles.teaserMenuDescription)}>
                                    <span>Devenez un expert de du traitement et stockage des données ! Devenez un expert de du traitement et stockage des données ! </span>
                                </p></div>
                        </div>
                    </div>
                    }
                </div>
            </div>
        );
    }
};

export default HomePageTeaser;
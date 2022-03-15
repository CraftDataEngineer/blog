import styles from "./styles.module.css";
import React from "react";
import classnames from "classnames";
import DataFilesPng  from '../../../static/img/teaser/data_files.png';
import BookPng  from '../../../static/img/teaser/book.png';


class HomePageTeaser extends React.Component {

    constructor(props) {
        super(props);
        this.state = {showAlpha:true ,showBeta: false};

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
                    <h6 className={classnames(styles.teaserTitle)}> <span >Craft Data Engineer</span></h6>
                    <h3 className={classnames(styles.teaserTeaser)}> <span >Decouverez le metier du Data Engineer.</span></h3>
                    <p className={classnames(styles.teaserDescription)}>
                        <span >Devenez un expert de du traitement et stockage des données ! </span>
                    </p>
                </div>
                <div className={classnames("container")} style={{color:"#ffff",background:"rgba(189, 195, 199, 0.2)",height:"1000%"}}>
                    <ul className="tabs tabs--block">
                        <li className={`tabs__item ${this.state.showAlpha ? "tabs__item--active" : ""}`} style={{color:"#ffff"}}  onClick={this.openAlpha} >Théorie</li>
                        <li className={`tabs__item ${this.state.showBeta ? "tabs__item--active" : ""}`}  style={{color:"#ffff"}} onClick={this.openBeta}>Pratique</li>
                    </ul>

                    {this.state.showAlpha && <div className={classnames("container")} style={{color:"#ffff"}}>
                            <div className="row" style={{ padding:"10% 10% 0 10%"}}>
                                <div className="col">
                                    <div>
                                        <img className={styles.featureFiles} src={DataFilesPng} alt={"test"}/>
                                    </div>
                                    <h3 className={classnames(styles.teaserMenuTitle)}> <span >Decouverez le metier du Data Engineer.</span></h3>
                                    <p className={classnames(styles.teaserDescription)}>
                                        <span >Devenez un expert de du traitement et stockage des données ! Devenez un expert de du traitement et stockage des données ! </span>
                                    </p>
                                </div>
                                <div className="col">
                                    <div>
                                        <img className={styles.featureFiles} src={DataFilesPng} alt={"test"}/>
                                    </div>
                                    <h3 className={classnames(styles.teaserMenuTitle)}> <span >Decouverez le metier du Data Engineer.</span></h3>
                                    <p className={classnames(styles.teaserDescription)}>
                                        <span >Devenez un expert de du traitement et stockage des données ! Devenez un expert de du traitement et stockage des données ! </span>
                                    </p>                                </div>
                            </div>
                            <div className="row" style={{ padding:"10% 10% 10% 10%"}}>
                                <div className="col">
                                    <div>
                                        <img className={styles.featureFiles} src={DataFilesPng} alt={"test"}/>
                                    </div>
                                    <h3 className={classnames(styles.teaserMenuTitle)}> <span >Decouverez le metier du Data Engineer.</span></h3>
                                    <p className={classnames(styles.teaserDescription)}>
                                        <span >Devenez un expert de du traitement et stockage des données ! Devenez un expert de du traitement et stockage des données ! </span>
                                    </p>                                </div>
                                <div className="col">
                                    <div>
                                        <img className={styles.featureFiles} src={DataFilesPng} alt={"test"}/>
                                    </div>
                                    <h3 className={classnames(styles.teaserMenuTitle)}> <span >Decouverez le metier du Data Engineer.</span></h3>
                                    <p className={classnames(styles.teaserDescription)}>
                                        <span >Devenez un expert de du traitement et stockage des données ! Devenez un expert de du traitement et stockage des données ! </span>
                                    </p>                                </div>
                            </div>
                    </div>
                    }
                    {this.state.showBeta && <div className={classnames("container")} style={{color:"#ffff"}} >
                        <div className="row" style={{ padding:"10% 10% 0 10%"}}>
                            <div className="col">
                                <div>
                                    <img className={styles.featureBook} src={BookPng} alt={"test"}/>
                                </div>
                                <h3 className={classnames(styles.teaserMenuTitle)}> <span >Decouverez le metier du Data Engineer.</span></h3>
                                <p className={classnames(styles.teaserDescription)}>
                                    <span >Devenez un expert de du traitement et stockage des données ! Devenez un expert de du traitement et stockage des données ! </span>
                                </p>
                            </div>
                            <div className="col">
                                <div>
                                    <img className={styles.featureBook} src={BookPng} alt={"test"}/>
                                </div>
                                <h3 className={classnames(styles.teaserMenuTitle)}> <span >Decouverez le metier du Data Engineer.</span></h3>
                                <p className={classnames(styles.teaserDescription)}>
                                    <span >Devenez un expert de du traitement et stockage des données ! Devenez un expert de du traitement et stockage des données ! </span>
                                </p>                                </div>
                        </div>
                        <div className="row" style={{ padding:"10% 10% 10% 10%"}}>
                            <div className="col">
                                <div>
                                    <img className={styles.featureBook} src={BookPng} alt={"test"}/>
                                </div>
                                <h3 className={classnames(styles.teaserMenuTitle)}> <span >Decouverez le metier du Data Engineer.</span></h3>
                                <p className={classnames(styles.teaserDescription)}>
                                    <span >Devenez un expert de du traitement et stockage des données ! Devenez un expert de du traitement et stockage des données ! </span>
                                </p>                                </div>
                            <div className="col">
                                <div>
                                    <img className={styles.featureBook} src={BookPng} alt={"test"}/>
                                </div>
                                <h3 className={classnames(styles.teaserMenuTitle)}> <span >Decouverez le metier du Data Engineer.</span></h3>
                                <p className={classnames(styles.teaserDescription)}>
                                    <span >Devenez un expert de du traitement et stockage des données ! Devenez un expert de du traitement et stockage des données ! </span>
                                </p>                                </div>
                        </div>
                    </div>
                    }
                </div>
            </div>
        );
    }
};

export default HomePageTeaser;
import styles from "./styles.module.css";
import React from "react";
import classnames from "classnames";
import sam  from '../../../static/img/enroll/uncle-sam.png';


function HomePageEnroll() {

        return (
            <div className={classnames(styles.enrollContainer)}>
                <div className={classnames("container")}>
                    <h6 className={classnames(styles.enrollTitle)}> <span >Craft Data Engineer</span></h6>
                    <h3 className={classnames(styles.enrollTeaser)}> <span >Rejoignez la liste d'attente ! </span></h3>
                    <p className={classnames(styles.enrollDescription)}>
                        <span >Devenez un expert de du traitement et stockage des données ! </span>
                    </p>
                </div>
                 <div className={classnames(styles.gridContainer)}>
                    <div className="row ">
                        <div className="col "/>
                        <div className="col col--4">
                            <div className="card-demo shadow--lw">
                                <div className="card">
                                    <div className="card__image">
                                        <img
                                            src={sam}
                                            alt="Image alt text"
                                            title="Logo Title Text 1"
                                        />
                                    </div>
                                    <div className="card__body ">
                                        <h4 className={classnames(styles.enrollSubTitle)} >Apprenez :</h4>
                                        <ul style={{ listStyleType: "square" }} className={classnames(styles.enrollDescriptionPoints)}>
                                            <li >A faire du code de qualité </li>
                                            <li >Tous sur le stockage des données  </li>
                                            <li >Tous sur le traitement des données  </li>
                                        </ul>
                                    </div>
                                    <div className="card__footer ">
                                        <button className="button button--outline button--primary button--block shadow--md ">Inscrivez vous</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col"/>
                    </div>
                 </div>
            </div>
        );
};

export default HomePageEnroll;
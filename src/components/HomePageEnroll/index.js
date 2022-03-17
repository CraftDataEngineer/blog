import styles from "./styles.module.css";
import React from "react";
import classnames from "classnames";
import sam  from '../../../static/img/enroll/learn-1.jpg';
import Link from "@docusaurus/core/lib/client/exports/Link";


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
                            <div className="card-demo " >
                                <div className="card shadow--lw" style={{  borderRadius: "30px"}}>
                                    <div className={classnames("card__image")}>
                                        <img className={classnames(styles.featureProfile)}
                                            src={sam}
                                            alt="Image alt text"
                                            title="Inscrivez-vous"
                                        />
                                    </div>
                                    <div className="card__body ">
                                        <h4 className={classnames(styles.enrollSubTitle)} >Apprenez</h4>
                                        <ul style={{ listStyleType: "square" }} className={classnames(styles.enrollDescriptionPoints)}>
                                            <li >A faire du code de qualité </li>
                                            <li >Tous sur le stockage des données  </li>
                                            <li >Tous sur le traitement des données  </li>
                                        </ul>
                                    </div>
                                    <div className="card__footer ">
                                        <Link to="/blog/form/" style={{ textDecoration: 'none' }}> <button className="button button--outline button--primary button--block shadow--lw ">Rejoindre la liste d'attente</button></Link>
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
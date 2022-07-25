import styles from "./styles.module.css";
import React from "react";
import classnames from "classnames";


import TerminalIcon from '@mui/icons-material/Terminal';
import StorageIcon from '@mui/icons-material/Storage';
import SpeedIcon from '@mui/icons-material/Speed';
import MemoryIcon from '@mui/icons-material/Memory';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import GroupsIcon from '@mui/icons-material/Groups';
import Octocat from "../../../static/img/contenu/Octocat.png";
import Python from "../../../static/img/contenu/python.png";
import Elastic from "../../../static/img/contenu/elastic.png";
import Kafka from "../../../static/img/contenu/kafka.png";
import Postgres from "../../../static/img/contenu/postgres.png";
import Spark from "../../../static/img/contenu/spark.png";
import Terraform from "../../../static/img/contenu/terraform.png";
import Jira from "../../../static/img/contenu/jira.png";



export default function ContenuFormation() {


    return (
        <div className={classnames(styles.backGroundContainer)}>
            <div className={classnames("container",styles.titleContiner)}>
                <h3 className={classnames(styles.modulesTeaser)}>
                    <span>Contenu de la formation</span>
                    <span style={{color: "#f1bb00"}}>.</span>
                </h3>
                <p className={classnames(styles.modulesDescription)}>
                    <span>Un parcours complet pour apprendre à : </span>
                </p>
            </div>
            <div className={classnames("container", styles.gridContainer)}>
                <div className={classnames("row", styles.rowContainer)}>
                    <div className={classnames("col", styles.colContainer)}>
                        <div className={styles.leftPart}>
                            <ul>
                                <li>
                                    <div>
                                        <div><TerminalIcon viewBox="0 -5 25 25"/></div>
                                        <h6>Code</h6>
                                        <h2><img alt="" src={Octocat} className={styles.icon}/>
                                            <img alt="" src={Python} className={styles.icon}/></h2>
                                    </div>
                                    <p> Développer du code Python de qualité et travailler en équipe avec du Git !</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col col--1"/>
                    <div className={classnames("col", styles.colContainer)}>
                        <div className={styles.leftPart}>
                            <ul>
                                <li>
                                    <div>
                                        <div><StorageIcon viewBox="0 -4 25 25"/></div>
                                        <h6>Stockage</h6>
                                        <h2><img alt="" src={Postgres} className={styles.icon}/>
                                            <img alt="" src={Elastic} className={styles.icon}/>
                                        </h2>
                                    </div>
                                    <p> Enregistrer et requêter de la donnée pour toutes les volumétries !</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col col--2"/>
                </div>
                <div className={classnames("row", styles.rowContainer)}>
                    <div  className={classnames("col", styles.colContainer)}>
                        <div className={styles.leftPart}>
                            <ul>
                                <li>
                                    <div>
                                        <div><MemoryIcon viewBox="0 -5 25 25"/></div>
                                        <h6>Batch</h6>
                                        <h2>
                                            <img alt="" src={Spark} className={styles.largeIcon}/>
                                        </h2>
                                    </div>
                                    <p> Manipuler d'importantes volumétries grâce aux traitements distribués !</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col col--1"/>
                    <div  className={classnames("col", styles.colContainer)}>
                        <div className={styles.leftPart}>
                            <ul>
                                <li>
                                    <div>
                                        <div><SpeedIcon viewBox="0 -5 25 25"/></div>
                                        <h6>Streaming</h6>
                                        <h2>
                                            <img alt="" src={Kafka} className={styles.largeIcon}/>
                                        </h2>
                                    </div>
                                    <p> Analyser des données en temps réel grâce au streaming ! </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col col--2"/>
                </div>
                <div className={classnames("row", styles.rowContainer)}>
                    <div  className={classnames("col", styles.colContainer)}>
                        <div className={styles.leftPart}>
                            <ul>
                                <li>
                                    <div>
                                        <div><PrecisionManufacturingIcon viewBox="0 -5 25 25"/></div>
                                        <h6>DevOps</h6>
                                        <h2>
                                            <img alt="" src={Terraform} className={styles.largeIcon}/>
                                        </h2>
                                    </div>
                                    <p> Automatiser la construction de l'infrastructure et le déploiement du code en
                                        production
                                        !</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col col--1"/>
                    <div  className={classnames("col", styles.colContainer)}>
                        <div className={styles.leftPart}>
                            <ul>
                                <li>
                                    <div>
                                        <div><GroupsIcon viewBox="0 -5 25 25"/></div>
                                        <h6>Agile</h6>
                                        <h2>
                                            <img alt="" src={Jira} className={styles.icon}/>
                                        </h2>
                                    </div>
                                    <p> Apprenez à collaborer en équipe et travailler avec les méthodes agiles !</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col col--2"/>
                </div>
            </div>
        </div>
    );
}


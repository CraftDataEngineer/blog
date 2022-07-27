import styles from "./styles.module.css";
import React from "react";
import classnames from "classnames";
import Qualiopi from '../../../static/img/enroll/qualiopi.png';
import {Button} from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import Link from "@docusaurus/core/lib/client/exports/Link";

function HomePageEnroll() {

    return (
        <div className={classnames(styles.backGroundContainer)}>
            <div className={classnames(styles.waveDivider)}>
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="10 0 1200 120" preserveAspectRatio="none">
                    <path
                        d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
                        className={classnames(styles.shapeFill)}></path>
                </svg>
            </div>
            <div className={classnames("container",styles.enrollContainer)}>
                <div >
                    <h3 className={classnames(styles.enrollTeaser,styles.textPosition)}><span>Vous hésitez sur votre choix de formation <span style={{color:"#f1bb00"}}>?</span></span>
                    </h3>
                </div>
                <div className={classnames(styles.gridContainer)}>
                    <div className="row " >
                        <div className="col col--4"/>
                        <div  className={classnames("col", styles.colContainer)}>
                            <div className={styles.leftPart}>
                                <h3> À l’issue de votre parcours, vous saurez
                                </h3>
                                <ul>
                                    <li>
                                        <h6>🖥 &nbsp; Code </h6>
                                        <p>Développer du <b>code clean</b> en vous posant les bonnes questions </p>
                                    </li>
                                    <li>
                                        <h6> 📊 &nbsp; Big Data</h6>
                                        <p>Maîtriser les concepts fondamentaux du Big Data </p>
                                    </li>
                                    <li>
                                        <h6> 👥 &nbsp;  Méthodologie</h6>
                                        <p>Collaborer en équipe avec les bonnes méthodologies </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col">
                            <div className={styles.leftPart}>
                                <h3> Un organisme de formation de qualité.</h3>
                                <ul>
                                    <li>
                                        <h6>🎓  &nbsp; Qualiopi </h6>
                                        <p>Toutes nos formations sont certifiées Qualiopi au titre des actions de formation.</p>
                                        <img src={Qualiopi} className={styles.featureImg}  alt={"test"}/>
                                    </li>
                                </ul>
                            </div>
                            <div className={classnames(styles.buttonDownload)}>
                                <Link to="/inscription/" className={classnames(styles.enrollButton)}>
                                    <Button variant="contained" startIcon={<DownloadIcon/>} size="large"
                                            style={{backgroundColor: "#a6a2f7", borderColor: "transparent"}}>
                                        Télécharger le Syllabus
                                    </Button>
                                </Link>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default HomePageEnroll;
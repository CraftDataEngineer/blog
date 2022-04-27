import styles from "./styles.module.css";
import React from "react";
import classnames from "classnames";
import useDocusaurusContext from "@docusaurus/core/lib/client/exports/useDocusaurusContext";


function HomePageEnroll() {

    const context = useDocusaurusContext();
    const {siteConfig = {}} = context;

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
                    <h6 className={classnames(styles.enrollTitle, styles.textPosition)}><span>{siteConfig.title}</span>
                    </h6>
                    <h3 className={classnames(styles.enrollTeaser, styles.textPosition)}><span>Rejoignez la prochaine session<span style={{color:"#f1bb00"}}>.</span></span>
                    </h3>
                    <p className={classnames(styles.enrollDescription, styles.textPosition)}>
                        <span>À l’issue de votre parcours, vous saurez</span>
                    </p>
                </div>
                <div className={classnames(styles.gridContainer)}>
                    <div className="row " >
                        <div className="col col--4"/>
                        <div className="col">
                            <div className={styles.leftPart}>
                                <h3> Un organisme de formation certifié et référencé.</h3>
                                <ul>
                                    <li>
                                        <h6>🎓  &nbsp; Certification </h6>
                                        <p>A l'issue de votre formation vous serez certifié !</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
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
                    </div>

                </div>
            </div>
        </div>
    );
};

export default HomePageEnroll;
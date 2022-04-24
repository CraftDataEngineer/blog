import styles from "./styles.module.css";
import React from "react";
import classnames from "classnames";
import useDocusaurusContext from "@docusaurus/core/lib/client/exports/useDocusaurusContext";


function HomePageEnroll() {

    const context = useDocusaurusContext();
    const {siteConfig = {}} = context;

    return (
        <div className={classnames(styles.backGroundContainer)}>
            <div className={classnames(styles.enrollContainer)}>
                <div className={classnames("container")}>
                    <h6 className={classnames(styles.enrollTitle, styles.textPosition)}><span>{siteConfig.title}</span>
                    </h6>
                    <h3 className={classnames(styles.enrollTeaser, styles.textPosition)}><span>Rejoignez la prochaine session !</span>
                    </h3>
                    <p className={classnames(styles.enrollDescription, styles.textPosition)}>
                        <span>À l’issue de votre parcours, vous saurez</span>
                    </p>
                </div>
                <div className={classnames(styles.gridContainer)}>
                    <div className="row " style={{paddingBottom: "4%"}}>
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
                        <div className="col col--1"/>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default HomePageEnroll;
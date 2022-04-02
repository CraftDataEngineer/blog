import styles from "./styles.module.css";
import React from "react";
import classnames from "classnames";
import sam from '../../../static/img/enroll/course.jpg';
import Link from "@docusaurus/core/lib/client/exports/Link";


function HomePageEnroll() {

    return (
        <div className={classnames(styles.enrollContainer)}>
            <div className={classnames("container")}>
                <h6 className={classnames(styles.enrollTitle)}><span>Craft Data Engineer</span></h6>
                <h3 className={classnames(styles.enrollTeaser)}><span>Rejoignez la prochaine session !</span></h3>
                <p className={classnames(styles.enrollDescription)}>
                    <span>À l’issue de votre parcours, vous saurez : </span>
                </p>
            </div>
            <div className={classnames(styles.gridContainer)}>
                <div className="row "  style={{paddingBottom:"4%"}}>
                    <div className="col "/>
                    <div className="col col--4">
                        <div className="card-demo ">
                            <div className="card shadow--lw" style={{borderRadius: "30px"}}>
                                <div className={classnames("card__image")}>
                                    <img className={classnames(styles.featureProfile)}
                                         src={sam}
                                         alt="Image alt text"
                                         title="Inscrivez-vous"
                                    />
                                </div>
                                <div className="card__body ">
                                    <ul className={classnames(styles.enrollDescriptionPoints)}>
                                        <li>Développer du <b>code clean</b> en vous posant les bonnes questions</li>
                                        <li>Maîtriser les concepts fondamentaux du <b>Big Data</b></li>
                                        <li><b>Collaborer en équipe</b> avec les bonnes méthodologies</li>
                                    </ul>
                                </div>
                                <div className="card__footer ">
                                    <Link to="/inscription/" className={classnames(styles.cardEnrollButton)} >
                                        <button
                                            className="button button--primary button--block  ">Inscrivez-vous
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="col"/>
                </div>
                <div className="row " >
                    <div className="col ">
                        <div className={classnames("hero hero--dark",styles.questionContainer)} >
                            <div className="container">
                                <h1  className={classnames("hero__title",styles.contactTeaser)}>Vous avez des questions ?</h1>
                                <p className="hero__subtitle" >Nous sommes convaincus que vous aimerez la formation. Si vous avez des questions, nous serons heureux d'y répondre.</p>
                                <div>
                                    <Link to="/form/" className={classnames(styles.contactButton)} >
                                    <button className="button button--primary  button--lg">
                                        Nous Contacter
                                    </button>
                                    </Link>

                                    <Link to="/inscription/" className={classnames(styles.enrollButton)} >
                                        <button
                                            className="button button--outline button--secondary  button--lg ">Inscrivez-vous
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePageEnroll;
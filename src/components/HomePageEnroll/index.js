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
                <h3 className={classnames(styles.enrollTeaser)}><span>Vous avez des questions ?</span></h3>
                <p className={classnames(styles.enrollDescription)}>
                    <span>Apprenez ...</span>
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
                                        <li>A faire du code de qualité</li>
                                        <li>Tout sur le stockage des données</li>
                                        <li>Tout sur le traitement des données</li>
                                    </ul>
                                </div>
                                <div className="card__footer ">
                                    <Link to="/inscription/" style={{textDecoration: 'none'}}>
                                        <button
                                            className="button button--outline button--primary button--block shadow--lw ">Inscrivez-vous
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
                        <div className="hero hero--dark" style={{backgroundColor:"black",paddingTop:"4%",borderRadius:"20px"}}>
                            <div className="container">
                                <h1 className="hero__title">On reponds à vos questions !</h1>
                                <p className="hero__subtitle">Nous sommes convaincus que vous aimerez le programme. Si vous avez des questions, nous serons heureux d'y répondre.</p>
                                <div>
                                    <Link to="/form/" style={{textDecoration: 'none',paddingLeft:"1%"}}>
                                    <button className="button button--primary  button--lg">
                                        Nous Contacter
                                    </button>
                                    </Link>

                                    <Link to="/inscription/" style={{textDecoration: 'none',paddingLeft:"1%",color:"white"}}>
                                        <button
                                            className="button button--outline button--primary  button--lg ">Inscrivez-vous
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
import styles from "./styles.module.css";
import React from "react";
import classnames from "classnames";
import sbe  from '../../../static/img/formateur/sbe.png';
import loca  from '../../../static/img/formateur/loca.png';


function HomePageFormateur() {

        return (
            <div className={classnames(styles.formateurContainer)}>
                <div className={classnames("container")} >
                    <h6 className={classnames(styles.formateurTitle)}> <span >Formateurs</span></h6>
                    <h3 className={classnames(styles.formateurTeaser)}> <span >On Partage avec vous Notre Experience ! </span></h3>
                </div>
                 <div className={classnames(styles.gridContainer)}>
                    <div className="row row--no-gutters">
                        <div className="col ">
                            <img className={classnames(styles.featureProfile,styles.mediaProfile)} src={loca} alt={"loca"}/>
                        </div>
                        <div className="col col--6">
                            <p className={classnames(styles.formateurDescription,"text-center")}>
                                <span >Nous avons développé un cursus Data Engineer au plus près des attentes du métier. À l’issue de votre parcours, vous saurez :  </span>
                            </p>
                            <div className={classnames(styles.formateurDescriptionPoints)}>
                                <ul className={classnames(styles.formateurDescriptionPoints)}>
                                    <li> Comprendre les différentes solutions de stockages (NoSQL, Relationnel) </li>
                                    <li> Maîtriser les concepts fondamentaux des BDD (Moteur stockage, Moteur de requête)</li>
                                    <li> Comprendre l'intérêt de l'agilité et savoir l'appliquer dans un contexte data </li>
                                    <li> Développer du code clean en se posant les bonnes questions </li>
                                    <li> Savoir collaborer en équipe avec les bonnes pratiques et méthodologies </li>
                                    <li> Savoir automatiser la création d'infrastructure sur AWS via Terraform </li>
                                </ul>
                            </div>
                            <p className={classnames(styles.formateurDescription,"text-center")}>
                                <span > </span>
                            </p>
                        </div>
                        <div className="col ">
                            <img className={classnames(styles.featureProfile,styles.mediaProfile)} src={sbe} alt={"sbe"}/>
                        </div>
                    </div>
                 </div>
            </div>
        );
};

export default HomePageFormateur;
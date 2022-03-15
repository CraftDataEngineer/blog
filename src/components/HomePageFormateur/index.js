import styles from "./styles.module.css";
import React from "react";
import classnames from "classnames";
import sbe  from '../../../static/img/formateur/sbe.png';
import loca  from '../../../static/img/formateur/loca.png';


function HomePageFormateur() {

        return (
            <div className={classnames(styles.formateurContainer)}>
                <div className={classnames("container")}>
                    <h6 className={classnames(styles.formateurTitle)}> <span >Formateurs</span></h6>
                    <h3 className={classnames(styles.formateurTeaser)}> <span >On Partage avec vous Notre Experience ! </span></h3>
                </div>
                 <div className={classnames(styles.gridContainer)}>
                    <div className="row row--no-gutters">
                        <div className="col ">
                            <img className={styles.featureProfile} src={loca} alt={"loca"}/>
                        </div>
                        <div className="col col--7">
                            <p className={classnames(styles.formateurDescription,"text-center")}>
                                <span >Devenez un expert de du traitement et stockage des données ! </span>
                            </p>
                            <div className={classnames(styles.formateurDescriptionPoints)}>
                                <ul className={classnames(styles.formateurDescriptionPoints)}>
                                    <li >Devenez un expert de du traitement et stockage des données ! </li>
                                    <li >Devenez un expert de du traitement et stockage des données ! </li>
                                    <li >Devenez un expert de du traitement et stockage des données ! </li>
                                </ul>
                            </div>
                            <p className={classnames(styles.formateurDescription,"text-center")}>
                                <span >We created this course to help people like you use psychology (ethically!) to build better products, sharpen your skills, delight your customers and help companies scale faster.
You’ve seen what we do in our case studies... Now it’s time for you to have the exact knowledge to do the same for your product. </span>
                                <span >Devenez un expert de du traitement et stockage des données ! </span>
                            </p>
                        </div>
                        <div className="col ">
                            <img className={styles.featureProfile} src={sbe} alt={"sbe"}/>
                        </div>
                    </div>
                 </div>
            </div>
        );
};

export default HomePageFormateur;
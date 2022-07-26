import styles from "./styles.module.css";
import React from "react";
import classnames from "classnames";
import Infinite from '../../../static/img/teaser/infinite.svg';

import ScienceIcon from '@mui/icons-material/Science';
import DashboardIcon from '@mui/icons-material/Dashboard';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import SportsKabaddiIcon from '@mui/icons-material/SportsKabaddi';
import ArchitectureIcon from '@mui/icons-material/Architecture';
import EngineeringIcon from '@mui/icons-material/Engineering';

export default function HomePageTheoriePratique() {


        return (
            <div className={classnames(styles.backGroundContainer)}>
                <div className={classnames(styles.waveDivider)}>
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="10 0 1200 120" preserveAspectRatio="none">
                        <path
                            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
                            className={classnames(styles.shapeFill)}></path>
                    </svg>
                </div>
                <div className={classnames("container", styles.displayMobileHeader)}>
                    <div className="row">
                        <div className="col">
                            <h3 className={classnames(styles.teaserTeaser)}><span>En quoi consiste la formation ?</span>
                            </h3>
                            <p className={classnames(styles.teaserDescription)}>
                                Une formation qui allie <b style={{color:"#ffff"}}>théorie</b> et <b style={{color:"#ffff"}}>pratique</b> et un accompagnement
                                personnalisé pour chaque candidat.
                            </p>
                        </div>
                        <div className="col col--5">
                            <Infinite className={classnames(styles.infinteSvg)} alt={"test"}/>
                        </div>
                    </div>
                </div>
                <div className={classnames("container",styles.gridContainer)}>
                    <div className="row " >
                        <div  className={classnames("col")}>
                            <div className={styles.leftPart}>
                                <h3 style={{fontFamily:"CircularStd-Black"}} > Théorie </h3>
                                <ul>
                                    <li>
                                        <h6><MenuBookIcon viewBox="0 -4 24 24" /> Cours </h6>
                                        <p>Nos cours utilisent un format pédagogique qui vous permettra de maîtriser rapidement l’ensemble des concepts clés nécessaires à votre prochain rôle ! </p>
                                    </li>
                                    <li>
                                        <h6> <ArchitectureIcon viewBox="0 -4 24 24" />Études de cas</h6>
                                        <p>On travaillera sur plusieurs études de cas inspirés de la vie réelle qui vous permettront de vous projeter facilement dans vos futures missions ! </p>
                                    </li>
                                    <li>
                                        <h6> <SportsKabaddiIcon viewBox="0 -4 24 24" /> Dojo</h6>
                                        <p>On travaillera en groupe sur des problèmes algorithmiques et d’architectures pour créer les automatismes indispensables du Data Engineer.</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className={classnames("col",styles.colContainer)}>
                            <div className={styles.leftPart}>
                                <h3 style={{fontFamily:"CircularStd-Black"}} > Pratique </h3>
                                <ul>
                                    <li>
                                        <h6><ScienceIcon viewBox="0 -4 24 24" /> Travaux pratiques </h6>
                                        <p>Des TPs sont donnés lors des cours afin de dynamiser et d'appliquer les concepts théoriques.</p>
                                    </li>
                                    <li>
                                        <h6> <DashboardIcon viewBox="0 -4 24 24" />  Ateliers Architectures</h6>
                                        <p>Les ateliers d'architectures sont animés durant les séances live, il faudra
                                            proposer une architecture cible par rapport à un besoin. </p>
                                    </li>
                                    <li>
                                        <h6>  <EngineeringIcon viewBox="0 -4 24 24" />   Projet fil rouge </h6>
                                        <p>Un travail de cadrage suivi d'un <b> Proof of concept (PoC) </b> vous sera demandé sur plusieurs semaines
                                            pour finaliser cette formation.</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col col--3"/>
                    </div>

                </div>
            </div>
        );
}


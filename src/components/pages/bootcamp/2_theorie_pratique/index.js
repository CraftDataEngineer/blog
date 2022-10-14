import styles from "./styles.module.css";
import React from "react";
import classnames from "classnames";
import Infinite from '../../../../../static/img/theorie_pratique/infinite.svg';

import ScienceIcon from '@mui/icons-material/Science';
import DashboardIcon from '@mui/icons-material/Dashboard';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import SportsKabaddiIcon from '@mui/icons-material/SportsKabaddi';
import ArchitectureIcon from '@mui/icons-material/Architecture';
import EngineeringIcon from '@mui/icons-material/Engineering';
import MutltilineMessageWithTitle from "../../../lib/mutltilineMessageWithTitle";

export default function BootCampTheoriePratique() {


    return (
        <div className={classnames(styles.backGroundContainer)}>
            <div className={classnames(styles.waveDivider)}>
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="10 0 1200 120"
                     preserveAspectRatio="none">
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
                            Une formation qui allie <b style={{color: "#ffff"}}>théorie</b> et <b
                            style={{color: "#ffff"}}>pratique</b> et un accompagnement
                            personnalisé pour chaque candidat.
                        </p>
                    </div>
                    <div className="col col--5">
                        <Infinite className={classnames(styles.infinteSvg)} alt={"test"}/>
                    </div>
                </div>
            </div>
            <div className={classnames("container", styles.gridContainer)}>
                <div className="row ">
                    <div className={classnames("col")}>
                        <MutltilineMessageWithTitle
                            title={"Théorie"}
                            items={[
                                {
                                    icon: <MenuBookIcon viewBox="0 -4 24 24"/>,
                                    title: "Théorie",
                                    text: "Nos cours utilisent un format pédagogique qui vous permettra de maîtriser rapidement l’ensemble des concepts clés nécessaires à votre prochain rôle !"
                                },
                                {
                                    icon: <ArchitectureIcon viewBox="0 -4 24 24"/>,
                                    title: "Études de cas",
                                    text: "On travaillera sur plusieurs études de cas inspirées de la vie réelle qui vous\n" +
                                        "                                        permettront de vous projeter facilement dans vos futures missions ! "
                                },
                                {
                                    icon: <SportsKabaddiIcon viewBox="0 -4 24 24"/>,
                                    title: "Dojo",
                                    text: "On travaillera en groupe sur des problèmes algorithmiques et d’architectures pour\n" +
                                        "                                        créer les automatismes indispensables du Data Engineer."
                                }
                            ]}
                        />
                    </div>
                    <div className={classnames("col", styles.colContainer)}>
                        <MutltilineMessageWithTitle
                            title={"Pratique"}
                            items={[
                                {
                                    icon: <ScienceIcon viewBox="0 -4 24 24"/>,
                                    title: "Travaux pratiques ",
                                    text: "Des TPs sont donnés lors des cours afin de dynamiser et d'appliquer les concepts\n" +
                                        "théoriques."
                                },
                                {
                                    icon: <DashboardIcon viewBox="0 -4 24 24"/>,
                                    title: "ÉAteliers Architectures",
                                    text: "Les ateliers d'architectures sont animés durant les séances live, il faudra\n" +
                                        "proposer une architecture cible par rapport à un besoin."
                                },
                                {
                                    icon: <EngineeringIcon viewBox="0 -4 24 24"/>,
                                    title: "Projet fil rouge",
                                    text: "Un travail de cadrage suivi d'un Proof of concept (PoC) vous sera demandé\n" +
                                    "sur plusieurs semaines pour finaliser cette formation."

                                }
                            ]}
                        />
                    </div>
                    <div className="col col--3"/>
                </div>
            </div>
        </div>
    );
}


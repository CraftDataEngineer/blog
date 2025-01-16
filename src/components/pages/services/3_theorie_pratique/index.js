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

import ComputerIcon from '@mui/icons-material/Computer';
import StorageIcon from '@mui/icons-material/Storage';
import PeopleIcon from '@mui/icons-material/People';
import SchoolIcon from '@mui/icons-material/School';
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
import EuroIcon from '@mui/icons-material/Euro';
import FilterDramaIcon from '@mui/icons-material/FilterDrama';
import CloudSyncIcon from '@mui/icons-material/CloudSync';
import HandymanIcon from '@mui/icons-material/Handyman';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';

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
                        <h3 className={classnames(styles.teaserTeaser)}><span>Nos Domaines d’Expertise.</span>
                        </h3>
                        <p className={classnames(styles.teaserDescription)}>
                          Un conseil stratégique assuré par des <b style={{color: "#ffff"}}>experts</b> dans leur domaine.

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
                           <MutltilineMessageWithTitle title="DevOps"
                                                                                items={[
                                                                                    {
                                                                                        icon: <AllInclusiveIcon viewBox="0 -5 24 24"/>,
                                                                                        title: "Devops",
                                                                                        text: "Profitez de notre expertise et adoptez les meilleures pratiques pour augmenter votre time to market et garantir la qualité de vos livrables."
                                                                                    },
                                                                                    {
                                                                                        icon: <HandymanIcon viewBox="2 -3.1 24 24"/>,
                                                                                        title: "Automatisation",
                                                                                        text: "Déployez une infrastructure automatisée, scalable, pour des systèmes flexibles et toujours prêts à évoluer avec vos besoins."
                                                                                    },
                                                                                    {
                                                                                        icon: <PeopleIcon viewBox="2 -4 24 24"/>,
                                                                                        title: "CULTURE COLLABORATIVE",
                                                                                        text: "Favorisez une collaboration fluide au sein de vos équipes grâce à  notre accompagnement."
                                                                                    },
                                                                                ]}
                                                                                minHeight="31rem"
                                                    />
                    </div>
                    <div className={classnames("col", styles.colContainer)}>
                         <MutltilineMessageWithTitle title="Cloud"
                                                                                items={[
                                                                                    {
                                                                                        icon: <FilterDramaIcon viewBox="0 -4.2 24 24"/>,
                                                                                        title: "Cloud",
                                                                                        text: "Bénéficiez de notre experience sur le cloud pour des construire architectures flexibles, évolutives, et securisées."


                                                                                    },
                                                                                    {
                                                                                        icon: <CloudSyncIcon viewBox="2 -4 24 24"/>,
                                                                                        title: "PUBLIQUE / PRivé / Hybride",
                                                                                        text: "Nous vous accompagnons dans le déploiement de vos solutions, qu’il s’agisse de cloud publique, privé ou hybride."
                                                                                    },
                                                                                    {
                                                                                        icon: <EuroIcon viewBox="2 -3 24 24"/>,
                                                                                        title: "FINOPS",
                                                                                        text: "Nous vous aidons à mettre en place une stratégie FinOps efficace pour optimiser vos coûts cloud."
                                                                                    },
                                                                                ]}
                                                                                minHeight="31rem"
                                                    />
                    </div>
                         <div className={classnames("col", styles.colContainer)}>
                                       <MutltilineMessageWithTitle title="Data & IA"
                                                                                              items={[
                                                                                                  {
                                                                                                      icon: <StorageIcon viewBox="0 -4.2 24 24"/>,
                                                                                                      title: "Data",
                                                                                                      text: "Exploitez le potentiel de vos données et de l'intelligence artificielle pour optimiser vos processus et innover."
                                                                                                  },
                                                                                                  {
                                                                                                      icon: <SmartToyIcon viewBox="2 -4 24 24"/>,
                                                                                                      title: "Intelligence artificielle",
                                                                                                      text: "Nous vous accompagnons dans le déploiement de vos solutions, qu’il s’agisse de cloud publique, privé ou hybride."
                                                                                                  },
                                                                                                  {
                                                                                                      icon: <PrecisionManufacturingIcon viewBox="2 -3 24 24"/>,
                                                                                                      title: "MLOPS",
                                                                                                      text: "Nous vous aidons à mettre en place une stratégie FinOps efficace pour optimiser vos coûts cloud."
                                                                                                  },
                                                                                              ]}
                                                                                              minHeight="31rem"
                                                                  />
</div>
                </div>
            </div>
        </div>
    );
}


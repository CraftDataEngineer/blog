import styles from "./styles.module.css";
import React from "react";
import classnames from "classnames";
import Qualiopi from '../../../../../static/img/enroll/qualiopi.png';
import {Button} from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
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

export default function LandingPageOffre() {
    const [open, setOpen] = React.useState(false);


    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    return (
        <div>
            <div className={classnames("container")}>

                <div className={classnames(styles.gridContainer)}>
                                        <div>
                                            <h3 className={classnames(styles.enrollTeaser)}><span>Nos Domaines d’Expertise<span
                                                style={{color: "#f1bb00"}}>.</span></span>
                                            </h3>
                                        </div>
                    <div className="row ">
                        <div className={classnames("col", styles.screenDisplay)}>
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
                        <div className={classnames("col", styles.screenDisplay)}>
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
                        <div className={classnames("col", styles.screenDisplay)}>
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
                                                                text: "Créez de nouvelles opportunités grâce à l’intelligence artificielle et une gestion optimisée de vos données."
                                                            },
                                                            {
                                                                icon: <PrecisionManufacturingIcon viewBox="2 -3 24 24"/>,
                                                                title: "MLOPS",
                                                                text: "Automatisez, déployez et scalez vos solutions IA avec efficacité."
                                                            },
                                                        ]}
                                                        minHeight="31rem"
                            />
                        </div>
                        <div className={classnames("col", styles.mobileDisplay)}>
                            <MutltilineMessageWithTitle
                                                        items={[
                                                            {
                                                                icon: <AllInclusiveIcon viewBox="0 -5 24 24"/>,
                                                                title: "Devops",
                                                                text: "Profitez de notre expertise et adoptez les meilleures pratiques pour augmenter votre time to market et garantir la qualité de vos livrables."
                                                            },
                                                           {
                                                               icon: <FilterDramaIcon viewBox="0 -4.2 24 24"/>,
                                                               title: "Cloud",
                                                               text: "Bénéficiez de notre experience sur le cloud pour des construire architectures flexibles, évolutives, et securisées."
                                                           },
                                                            {
                                                                icon: <PrecisionManufacturingIcon viewBox="2 -3 24 24"/>,
                                                                title: "Data & IA",
                                                                text: "Exploitez le potentiel de vos données et de l'intelligence artificielle pour optimiser vos processus et innover."
                                                            },
                                                        ]}
                                                        minHeight="31rem"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};
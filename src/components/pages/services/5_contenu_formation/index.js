import styles from "./styles.module.css";
import React from "react";
import classnames from "classnames";


import TerminalIcon from '@mui/icons-material/Terminal';
import StorageIcon from '@mui/icons-material/Storage';
import SpeedIcon from '@mui/icons-material/Speed';
import MemoryIcon from '@mui/icons-material/Memory';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import GroupsIcon from '@mui/icons-material/Groups';
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
import Octocat from "../../../../../static/img/contenu/Octocat.png";
import Aws from "../../../../../static/img/contenu/aws.png";
import Azure from "../../../../../static/img/contenu/azure.png";
import Elastic from "../../../../../static/img/contenu/elastic.png";
import Kafka from "../../../../../static/img/contenu/kafka.png";
import Postgres from "../../../../../static/img/contenu/postgres.png";
import Spark from "../../../../../static/img/contenu/spark.png";
import Terraform from "../../../../../static/img/contenu/terraform.png";
import Jira from "../../../../../static/img/contenu/bedrock.png";
import {Button} from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import SyllabusForm from "../form_syllabus/SyllabusFrom";
import ComplexMessageWithMultipleIcons from "../../../lib/complexMessageWithMultipleIcons";
import SmartToyIcon from '@mui/icons-material/SmartToy';



export default function BootCampContenuFormation() {
    const [open, setOpen] = React.useState(false);


    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    return (
        <div className={classnames(styles.backGroundContainer)}>
            <div className={classnames("container", styles.titleContiner)}>
                <div className="row">
                    <div className="col col--7">
                        <h3 className={classnames(styles.modulesTeaser)}>
                            <span>Nos expertises</span>
                            <span style={{color: "#f1bb00"}}>.</span>
                        </h3>
                        <p className={classnames(styles.modulesDescription)}>
                            <span>Des services adaptés à votre innovation technologique.
                                   </span>
                        </p>
                    </div>
                    <div className="col">

                        <SyllabusForm
                            open={open}
                            onClose={handleClose}
                        />
                    </div>
                </div>
            </div>
            <div className={classnames("container", styles.gridContainer)}>
                <div className={classnames("row", styles.rowContainer)}>
                    <div className={classnames("col", styles.colContainer)}>
                        <ComplexMessageWithMultipleIcons
                            title="Cloud"
                            titleIcon={<AllInclusiveIcon viewBox="0 -5 25 25"/>}
                            images={[{src: Aws, large: false},{src: Azure, large: false}]}
                            text="Concevez et implémentez des solutions cloud évolutives"
                        />
                    </div>
                    <div className="col col--1"/>
                    <div className={classnames("col", styles.colContainer)}>
                        <ComplexMessageWithMultipleIcons
                            title="Stockage"
                            titleIcon={<StorageIcon viewBox="0 -4 25 25"/>}
                            images={[{src: Postgres, large: false}, {src: Elastic, large: false}]}
                            text="Enregistrer et récupérer de la donnée pour toutes les volumétries "
                        />
                    </div>
                    <div className="col col--2"/>
                </div>
                <div className={classnames("row", styles.rowContainer)}>
                    <div className={classnames("col", styles.colContainer)}>
                        <ComplexMessageWithMultipleIcons
                            title="Batch"
                            titleIcon={<MemoryIcon viewBox="0 -5 25 25"/>}
                            images={[{src: Spark, large: true}]}
                            text="Manipuler d'importantes volumétries grâce aux traitements distribués"
                        />
                    </div>
                    <div className="col col--1"/>
                    <div className={classnames("col", styles.colContainer)}>
                        <ComplexMessageWithMultipleIcons
                            title="Streaming"
                            titleIcon={<SpeedIcon viewBox="0 -5 25 25"/>}
                            images={[{src: Kafka, large: true}]}
                            text=" Traiter et Analyser des données en temps réel grâce au streaming  "
                        />
                    </div>
                    <div className="col col--2"/>
                </div>
                <div className={classnames("row", styles.rowContainer)}>
                    <div className={classnames("col", styles.colContainer)}>
                        <ComplexMessageWithMultipleIcons
                            title="DevOps"
                            titleIcon={<PrecisionManufacturingIcon viewBox="0 -5 25 25"/>}
                            images={[{src: Terraform, large: true},{src: Octocat, large: false} ]}
                            text="Automatiser la création de l'infrastructure et le déploiement du code en production"
                        />
                    </div>
                    <div className="col col--1"/>
                    <div className={classnames("col", styles.colContainer)}>
                        <ComplexMessageWithMultipleIcons
                            title="IA & MLOPS"
                            titleIcon={<SmartToyIcon viewBox="0 -5 25 25"/>}
                            images={[{src: Jira, large: false}]}
                            text="Optimisez vos process avec l’intelligence artificielle"
                        />
                    </div>
                    <div className="col col--2"/>
                </div>
            </div>
        </div>
    );
}


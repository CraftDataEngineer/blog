import styles from "./styles.module.css";
import React from "react";
import classnames from "classnames";


import TerminalIcon from '@mui/icons-material/Terminal';
import StorageIcon from '@mui/icons-material/Storage';
import SpeedIcon from '@mui/icons-material/Speed';
import MemoryIcon from '@mui/icons-material/Memory';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import GroupsIcon from '@mui/icons-material/Groups';
import Octocat from "../../../../../static/img/contenu/Octocat.png";
import Python from "../../../../../static/img/contenu/python.png";
import Elastic from "../../../../../static/img/contenu/elastic.png";
import Kafka from "../../../../../static/img/contenu/kafka.png";
import Postgres from "../../../../../static/img/contenu/postgres.png";
import Spark from "../../../../../static/img/contenu/spark.png";
import Terraform from "../../../../../static/img/contenu/terraform.png";
import Jira from "../../../../../static/img/contenu/jira.png";
import {Button} from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import SyllabusForm from "../forms/SyllabusFrom";
import ComplexMessageWithMultipleIcons from "../../../lib/complexMessageWithMultipleIcons";


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
                            <span>Contenu de la formation</span>
                            <span style={{color: "#f1bb00"}}>.</span>
                        </h3>
                        <p className={classnames(styles.modulesDescription)}>
                            <span>Un parcours complet pour apprendre à : </span>
                        </p>
                    </div>
                    <div className="col">
                                <Button variant="contained" startIcon={<DownloadIcon/>} size="large" onClick={handleClickOpen}
                                        style={{backgroundColor: "#a6a2f7", borderColor: "transparent",marginTop:"5%"}}>
                                    Télécharger le Syllabus
                                </Button>
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
                                title="Code"
                                titleIcon={<TerminalIcon viewBox="0 -5 25 25"/>}
                                images={[{src:Octocat,large:false},{src:Python,large:false}]}
                                text="Développer du code Python de qualité et travailler en équipe avec du Git !"
                            />
                        </div>
                        <div className="col col--1"/>
                        <div className={classnames("col", styles.colContainer)}>
                            <ComplexMessageWithMultipleIcons
                                title="Stockage"
                                titleIcon={<StorageIcon viewBox="0 -4 25 25"/>}
                                images={[{src:Postgres,large:false},{src:Elastic,large:false}]}
                                text="Enregistrer et récupérer de la donnée pour toutes les volumétries !"
                            />
                        </div>
                        <div className="col col--2"/>
                    </div>
                    <div className={classnames("row", styles.rowContainer)}>
                        <div className={classnames("col", styles.colContainer)}>
                            <ComplexMessageWithMultipleIcons
                                title="Batch"
                                titleIcon={<MemoryIcon viewBox="0 -5 25 25"/>}
                                images={[{src:Spark,large:true}]}
                                text="Manipuler d'importantes volumétries grâce aux traitements distribués !"
                            />
                        </div>
                        <div className="col col--1"/>
                        <div className={classnames("col", styles.colContainer)}>
                            <ComplexMessageWithMultipleIcons
                                title="Streaming"
                                titleIcon={<SpeedIcon viewBox="0 -5 25 25"/>}
                                images={[{src:Kafka,large:true}]}
                                text=" Traiter et Analyser des données en temps réel grâce au streaming ! "
                            />
                        </div>
                        <div className="col col--2"/>
                    </div>
                    <div className={classnames("row", styles.rowContainer)}>
                        <div className={classnames("col", styles.colContainer)}>
                            <ComplexMessageWithMultipleIcons
                                title="DevOps"
                                titleIcon={<PrecisionManufacturingIcon viewBox="0 -5 25 25"/>}
                                images={[{src:Terraform,large:true}]}
                                text="Automatiser la construction de l'infrastructure et le déploiement du code en production !"
                            />
                        </div>
                        <div className="col col--1"/>
                        <div className={classnames("col", styles.colContainer)}>
                            <ComplexMessageWithMultipleIcons
                                title="Agile"
                                titleIcon={<GroupsIcon viewBox="0 -5 25 25"/>}
                                images={[{src:Jira,large:false}]}
                                text="Collaborer en équipe et travailler avec les méthodes agiles !"
                            />
                        </div>
                        <div className="col col--2"/>
                    </div>
                </div>
            </div>
            );
            }


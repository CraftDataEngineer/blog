import styles from "./styles.module.css";
import React from "react";
import classnames from "classnames";
import Qualiopi from '../../../../../static/img/enroll/qualiopi.png';
import {Button} from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import SyllabusForm from "../forms/SyllabusFrom";
import MutltilineMessageWithTitle from "../../../lib/mutltilineMessageWithTitle";
import ComputerIcon from '@mui/icons-material/Computer';
import StorageIcon from '@mui/icons-material/Storage';
import PeopleIcon from '@mui/icons-material/People';
import SchoolIcon from '@mui/icons-material/School';

export default function BootCampHesitationFormation() {
    const [open, setOpen] = React.useState(false);


    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    return (
        <div className={classnames(styles.backGroundContainer)}>
            <div className={classnames("container")}>
                <div>
                    <h3 className={classnames(styles.enrollTeaser, styles.textPosition)}><span>Vous hésitez sur votre choix de formation <span
                        style={{color: "#f1bb00"}}>?</span></span>
                    </h3>
                </div>
                <div className={classnames(styles.gridContainer)}>
                    <div className="row ">
                        <div className="col col--4"/>
                        <div className={classnames("col")}>
                            <MutltilineMessageWithTitle title="À l’issue de votre parcours, vous saurez"
                                                        items={[
                                                            {
                                                                icon: <ComputerIcon viewBox="2 -4 24 24"/>,
                                                                title: "Code",
                                                                text: <div>Développer du <b>code clean</b> en vous
                                                                    posant les bonnes questions</div>
                                                            },
                                                            {
                                                                icon: <StorageIcon viewBox="2 -4 24 24"/>,
                                                                title: "Big Data",
                                                                text: "Maîtriser les concepts fondamentaux du Big Data"
                                                            },
                                                            {
                                                                icon: <PeopleIcon viewBox="2 -4 24 24"/>,
                                                                title: "Méthodologie",
                                                                text: "Collaborer en équipe avec les bonnes méthodologies"
                                                            },
                                                        ]}
                                                        minHeight="25rem"
                            />
                        </div>
                        <div className="col">
                            <MutltilineMessageWithTitle title="Un organisme de formation de qualité."
                                                        items={[
                                                            {
                                                                icon: <SchoolIcon viewBox="2 -4 24 24"/>,
                                                                title: "Qualiopi",
                                                                text: <div><p>Toutes nos formations sont certifiées
                                                                    Qualiopi au titre des actions de formation.</p>
                                                                    <img src={Qualiopi} className={styles.featureImg}
                                                                         alt={"test"}/></div>
                                                            }
                                                        ]}
                                                        minHeight="20rem"
                            />
                            <div className={classnames(styles.buttonDownload)}>
                                <Button variant="contained" startIcon={<DownloadIcon/>} size="large"
                                        onClick={handleClickOpen}
                                        style={{backgroundColor: "#a6a2f7", borderColor: "transparent"}}>
                                    Télécharger le Syllabus
                                </Button>
                                <SyllabusForm
                                    open={open}
                                    onClose={handleClose}
                                />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};
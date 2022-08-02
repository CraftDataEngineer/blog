import styles from "./styles.module.css";
import React from "react";
import classnames from "classnames";
import Qualiopi from '../../../static/img/enroll/qualiopi.png';
import {Button} from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import SyllabusForm from "../SyllabusFrom";

function HomePageEnroll() {
    const [open, setOpen] = React.useState(false);


    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    return (
        <div className={classnames(styles.backGroundContainer)}>
            <div className={classnames("container",styles.enrollContainer)}>
                <div >
                    <h3 className={classnames(styles.enrollTeaser,styles.textPosition)}><span>Vous hésitez sur votre choix de formation <span style={{color:"#f1bb00"}}>?</span></span>
                    </h3>
                </div>
                <div className={classnames(styles.gridContainer)}>
                    <div className="row " >
                        <div className="col col--4"/>
                        <div  className={classnames("col", styles.colContainer)}>
                            <div className={styles.leftPart}>
                                <h3> À l’issue de votre parcours, vous saurez
                                </h3>
                                <ul>
                                    <li>
                                        <h6>🖥 &nbsp; Code </h6>
                                        <p>Développer du <b>code clean</b> en vous posant les bonnes questions </p>
                                    </li>
                                    <li>
                                        <h6> 📊 &nbsp; Big Data</h6>
                                        <p>Maîtriser les concepts fondamentaux du Big Data </p>
                                    </li>
                                    <li>
                                        <h6> 👥 &nbsp;  Méthodologie</h6>
                                        <p>Collaborer en équipe avec les bonnes méthodologies </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col">
                            <div className={styles.leftPart}>
                                <h3> Un organisme de formation de qualité.</h3>
                                <ul>
                                    <li>
                                        <h6>🎓  &nbsp; Qualiopi </h6>
                                        <p>Toutes nos formations sont certifiées Qualiopi au titre des actions de formation.</p>
                                        <img src={Qualiopi} className={styles.featureImg}  alt={"test"}/>
                                    </li>
                                </ul>
                            </div>
                            <div className={classnames(styles.buttonDownload)}>
                                    <Button variant="contained" startIcon={<DownloadIcon/>} size="large" onClick={handleClickOpen}
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

export default HomePageEnroll;
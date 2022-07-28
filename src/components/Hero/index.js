import React from "react";
import useDocusaurusContext from "@docusaurus/core/lib/client/exports/useDocusaurusContext";
import stylesModule from './styles.module.css';
import YourSvg from '../../../static/img/header/geek.png';
import classnames from "classnames";
import SyllabusForm from "../SyllabusFrom";
import {Button, Chip} from "@mui/material";
import DownloadIcon from '@mui/icons-material/Download';
import DevicesIcon from '@mui/icons-material/Devices';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ViewModuleIcon from '@mui/icons-material/ViewModule';

function HomepageHeader() {
    const [open, setOpen] = React.useState(false);
    const {siteConfig} = useDocusaurusContext();

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    const saveFile = () => {
        saveAs(
            "/files/programme.pdf",
            "programme.pdf"
        );
    };

    return (
        <header className={classnames('hero hero--primary headTest', stylesModule.heroSection)}>
            <div className="container" style={{paddingTop: "3%"}}>
                <div className="row">
                    <div className="col col--6">
                        <h3 className={classnames(stylesModule.headTeaser)}>
                            <span>Boot Camp Data Engineer</span>
                            <span style={{color:"#f1bb00"}}>.</span>
                        </h3>
                        <p className={classnames(stylesModule.headDescription)}>
                            <p>
                                 Devenez un <b>Data Engineer opérationnel</b> , grâce à notre Boot Camp vous allez être
                                 mis en situation comme si vous étiez en mission ! Un <b>Accompagnement personnalisé</b> et <b>immersif  </b>
                                 vous premettrons d'acquérir les clefs nécessaires pour entreprendre votre futur métier
                                 dans de bonnes conditions.
                            </p>

                            <div  className={classnames(stylesModule.buttonDownload)} >
                                <Button variant="contained" startIcon={<DownloadIcon />} size="large" onClick={saveFile} style={{backgroundColor:"#a6a2f7" , borderColor:"transparent"}} >
                                    Télécharger le programme
                                </Button>
                                <SyllabusForm
                                    open={open}
                                    onClose={handleClose}
                                />
                            </div>
                        </p>
                    </div>
                    <div className="col"/>
                    <div className="col col--5">
                        <div className="row">
                            <img src={YourSvg} className={stylesModule.featureSvg} alt={"test"}/>
                        </div>
                    </div>
                </div>
                <div className={classnames("row ", stylesModule.containerAnnoucements)}>
                    <div className={classnames("col ", stylesModule.firstverticleLine)}>
                        <Chip icon={<DevicesIcon />}  style={{marginTop: "2%",fontFamily:"CircularStd-Black",fontSize: "18px" }} label="Formation" />
                        <h2 style={{marginTop: "2%",fontFamily:"CircularStd-Black"}}> 100% en ligne</h2>
                    </div>
                    <div className={classnames("col ", stylesModule.verticleLine)}>
                        <Chip  icon={<CalendarMonthIcon />}  style={{marginTop: "2%",fontFamily:"CircularStd-Black",fontSize: "18px" }} label="Prochaine rentrée " />
                        <h3 style={{marginTop: "2%",fontFamily:"CircularStd-Black"}}> OCTOBRE 01, 2022</h3>
                    </div>
                    <div className={classnames("col ", stylesModule.verticleLine)}>
                        <Chip icon={<ViewModuleIcon />}  style={{marginTop: "2%",fontFamily:"CircularStd-Black",fontSize: "18px" }} label="Format" />
                        <h3 style={{marginTop: "2%",fontFamily:"CircularStd-Black",fontWeight:"400"}}>Bootcamp 2 mois</h3>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default HomepageHeader;
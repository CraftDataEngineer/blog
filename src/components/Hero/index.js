import React from "react";
import stylesModule from './styles.module.css';
import YourSvg from '../../../static/img/header/header.png';
import classnames from "classnames";
import {Button, Chip} from "@mui/material";
import DownloadIcon from '@mui/icons-material/Download';
import DevicesIcon from '@mui/icons-material/Devices';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ViewModuleIcon from '@mui/icons-material/ViewModule';

function HomepageHeader() {

    const saveFile = () => {
        saveAs(
            "/files/programme.pdf",
            "programme.pdf"
        );
    };

    return (
        <header className={classnames('hero hero--primary headTest', stylesModule.heroSection)}>
            <div className="container" >
                <div className="row">
                    <div className="col col--6">
                        <h3 className={classnames(stylesModule.headTeaser)}>
                            <span>Bootcamp Data Engineer</span>
                            <span style={{color:"#f1bb00"}}>.</span>
                        </h3>
                        <p className={classnames(stylesModule.headDescription)}>
                            <p>
                                <div className={stylesModule.surligne} >

                                    Devenez un <strong>Data Engineer</strong>  opérationnel, grâce à  un  accompagnement <b>personnalisé et immersif</b>.
                                    Notre Bootcamp vous permettra d'acquérir les connaissances nécessaires pour entreprendre votre futur rôle dans les meilleures conditions : <b>Bonnes pratiques de programmation</b>, <b>DevOps</b> et <b>Big Data</b> !
                                </div>
                            </p>

                            <div  className={classnames(stylesModule.buttonDownload)} >
                                <Button variant="contained" startIcon={<DownloadIcon />} size="large" onClick={saveFile} style={{backgroundColor:"#a6a2f7" , borderColor:"transparent"}} >
                                    Télécharger le programme
                                </Button>
                            </div>
                        </p>
                    </div>
                    <div className="col"/>
                    <div className="col col--5">
                        <div className="row">
                            <img src={YourSvg} className={stylesModule.featureSvg} alt={""}/>
                        </div>
                    </div>
                </div>
                <div className={classnames("row ", stylesModule.containerAnnoucements)}>
                    <div className={classnames("col ", stylesModule.firstverticleLine)}>
                        <Chip icon={<DevicesIcon />}  style={{marginTop: "2%",fontFamily:"CircularStd-Black",fontSize: "18px" }} label="Formation" />
                        <h3 style={{marginTop: "2%",fontFamily:"CircularStd-Black"}}> 100% en ligne</h3>
                    </div>
                    <div className={classnames("col ", stylesModule.verticleLine)}>
                        <Chip  icon={<CalendarMonthIcon />}  style={{marginTop: "2%",fontFamily:"CircularStd-Black",fontSize: "18px" }} label="Prochaine rentrée " />
                        <h3 style={{marginTop: "2%",fontFamily:"CircularStd-Black"}}> Octobre 10, 2022</h3>
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
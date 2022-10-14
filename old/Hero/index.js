import React from "react";
import stylesModule from './styles.module.css';
import YourSvg from '../../static/img/header/header.png';
import classnames from "classnames";
import {Button, Chip} from "@mui/material";
import DownloadIcon from '@mui/icons-material/Download';
import DevicesIcon from '@mui/icons-material/Devices';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import TextLeftImageRight from "../../src/components/lib/textLeftImageRight";
import ThreeItemsInLine from "../../src/components/lib/threeItemsInLine";
import MessageWithIcon from "../../src/components/lib/messageWithIcon";

function HomepageHeader() {

    const saveFile = () => {
        saveAs(
            "/files/programme.pdf",
            "programme.pdf"
        );
    };

    return (
        <header className={classnames('hero hero--primary headTest', stylesModule.heroSection)}>
            <div className="container">
                <TextLeftImageRight
                    title={"Bootcamp Data Engineer"}
                    description={
                        <div>
                            <div>
                                <div className={stylesModule.surligne}>

                                    Devenez un <strong>Data Engineer</strong> opérationnel, grâce à un
                                    accompagnement <b>personnalisé et immersif</b>.
                                    Notre Bootcamp vous permettra d'acquérir les connaissances nécessaires pour
                                    entreprendre votre futur rôle dans les meilleures conditions : <b>Bonnes pratiques
                                    de programmation</b>, <b>DevOps</b> et <b>Big Data</b> !
                                </div>
                            </div>
                            <div className={classnames(stylesModule.buttonDownload)}>
                                <Button variant="contained" startIcon={<DownloadIcon/>} size="large" onClick={saveFile}
                                        style={{backgroundColor: "#a6a2f7", borderColor: "transparent"}}>
                                    Télécharger le programme
                                </Button>
                            </div>
                        </div>
                    }
                    imageSrc={YourSvg}
                />
                <ThreeItemsInLine
                    firstItem={<MessageWithIcon icon={<DevicesIcon/>} label={"Formation"} headline={"100% en ligne"}/>}

                    secondItem={<MessageWithIcon icon={<CalendarMonthIcon/>} label={"Prochaine rentrée"}
                                                 headline={"Janvier 09, 2023"}/>}

                    thirdItem={<MessageWithIcon icon={<ViewModuleIcon/>} label={"Format"}
                                                headline={"Bootcamp 2 mois"}/>}
                />
            </div>
        </header>
    );
}

export default HomepageHeader;
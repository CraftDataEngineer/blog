import React from "react";
import stylesModule from './styles.module.css';
import YourSvg from '../../../../../static/img/header/img.png';
import classnames from "classnames";
import {Button, Chip} from "@mui/material";
import DownloadIcon from '@mui/icons-material/Download';
import DevicesIcon from '@mui/icons-material/Devices';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import TextLeftImageRight from "../../../lib/textLeftImageRight";
import ThreeItemsInLine from "../../../lib/threeItemsInLine";
import MessageWithIcon from "../../../lib/messageWithIcon";

function BootCampHero() {

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

                                    Rejoignez notre Bootcamp pour apprendre à développer correctement et être reconnu par vos pairs ! Notre objectif est de vous former à la vie réelle, se concentrer sur l’essentiel et apprendre en pratiquant.
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
                <div className={stylesModule.seperator}/>
                <ThreeItemsInLine
                    firstItem={<MessageWithIcon icon={<DevicesIcon/>} label={"En ligne"} headline={"Avec des professeurs"}/>}

                    secondItem={<MessageWithIcon icon={<CalendarMonthIcon/>} label={"Rentrée"}
                                                 headline={"Janvier 16, 2023"}/>}

                    thirdItem={<MessageWithIcon icon={<ViewModuleIcon/>} label={"Durée"}
                                                headline={"5 semaines"}/>}
                />
            </div>
        </header>
    );
}

export default BootCampHero;
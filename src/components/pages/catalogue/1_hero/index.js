import React from "react";
import stylesModule from './styles.module.css';
import YourSvg from '../../../../../static/img/header/img.png';
import classnames from "classnames";
import {Button, Chip, Stack} from "@mui/material";
import DownloadIcon from '@mui/icons-material/Download';
import DevicesIcon from '@mui/icons-material/Devices';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import TextLeftImageRight from "../../../lib/textLeftImageRight";
import ThreeItemsInLine from "../../../lib/threeItemsInLine";
import MessageWithIcon from "../../../lib/messageWithIcon";
import {useWindowSize} from "@docusaurus/theme-common";

function CatalogueHero() {

    const windowSize = useWindowSize(); // Mobile sidebar not visible on hydration: can avoid SSR rendering

    const shouldRender = windowSize === 'mobile';

    return (
        <header className={classnames('hero hero--primary headTest', stylesModule.heroSection)}>
            <div className="container">
                <TextLeftImageRight
                    title={"Catalogue des formations"}
                    description={
                        <Stack
                            direction="column"
                            spacing={5}
                            justifyContent={ shouldRender ? "center" : "left"}
                            alignItems={ shouldRender ? "center" : "left"}
                        >
                            <div>
                                <div className={stylesModule.surligne}>

Découvrez un catalogue complet de formations adaptées à vos besoins, alliant théorie, pratique et études de cas concrets. Que vous soyez débutant ou expert, nos programmes sont conçus pour vous accompagner à chaque étape de votre montée en compétences.                                </div>
                            </div>
                        </Stack>
                    }
                    imageSrc={YourSvg}
                    imageStyle={stylesModule.image}
                />
                <div className={stylesModule.seperator}/>

            </div>
        </header>
    );
}

export default CatalogueHero;
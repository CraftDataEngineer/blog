import React from "react";
import stylesModule from './styles.module.css';
import YourSvg from '../../../../../static/img/header/offres_header.png';
import classnames from "classnames";
import {Button, Chip, Stack} from "@mui/material";
import DownloadIcon from '@mui/icons-material/Download';
import DevicesIcon from '@mui/icons-material/Devices';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import FilterDramaIcon from '@mui/icons-material/FilterDrama';
import TextLeftImageRight from "../../../lib/textLeftImageRight";
import ThreeItemsInLine from "../../../lib/threeItemsInLine";
import MessageWithIcon from "../../../lib/messageWithIcon";
import {useWindowSize} from "@docusaurus/theme-common";
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';

function ServicesHero() {

    const saveFile = () => {
        saveAs(
            "/files/programme.pdf",
            "dataguru_programme.pdf"
        );
    };

    const windowSize = useWindowSize(); // Mobile sidebar not visible on hydration: can avoid SSR rendering

    const shouldRender = windowSize === 'mobile';

    return (
        <header className={classnames('hero hero--primary headTest', stylesModule.heroSection)}>
            <div className="container">
                <TextLeftImageRight
                    title={"Des solutions sur mesure"}
                    description={
                        <Stack
                            direction="column"
                            spacing={5}
                            justifyContent={ shouldRender ? "center" : "left"}
                            alignItems={ shouldRender ? "center" : "left"}
                        >
                            <div>
                                <div className={stylesModule.surligne}>

Transformez vos projets technologiques avec nos experts. De l’optimisation des infrastructures au déploiement d’algorithmes IA avancés, nous vous accompagnons avec des solutions adaptées à vos défis organisationnelles et techniques.                                </div>
                            </div>
                        </Stack>
                    }
                    imageSrc={YourSvg}
                />
                <div className={stylesModule.seperator}/>
                <ThreeItemsInLine
                    firstItem={<MessageWithIcon icon={<AllInclusiveIcon/>} label={"DevOps"} headline={"Augmentez votre time to market"}/>}

                    secondItem={<MessageWithIcon icon={<FilterDramaIcon/>} label={"Cloud"}
                                                 headline={"Optimisez votre infrastructure"}/>}

                    thirdItem={<MessageWithIcon icon={<ViewModuleIcon/>} label={"Data & IA"}
                                                headline={"Valorisez vos données et process"}/>}
                />
            </div>
        </header>
    );
}

export default ServicesHero;
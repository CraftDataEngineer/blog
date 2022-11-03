import React from "react";
import stylesModule from './styles.module.css';
import YourSvg from '../../../../../static/img/landingPage/hero/self_development.png';
import classnames from "classnames";
import PsychologyIcon from '@mui/icons-material/Psychology';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import TextLeftImageRight from "../../../lib/textLeftImageRight";
import CastForEducationIcon from '@mui/icons-material/CastForEducation';
import ImageWithMessageBelow from "../../../lib/imageWithMessageBelow";
import ThreeItemsAlignedHorizontally from "../../../lib/threeItemsAlignedHorizontally";

export default function LandingPageHero() {


    return (
        <header className={classnames('hero hero--primary headTest', stylesModule.heroSection)}>
            <div className="container">
                <TextLeftImageRight
                    title={"Data Guru"}
                    titleStyle={stylesModule.titleStyle}
                    descriptionStyle={stylesModule.descriptionStyle}
                    description={
                        <div>
                            <div>
                                <div className={stylesModule.surligne}>

                                    Améliorez vos compétences grâce à nos formations animées par des consultants-formateurs expérimentés.
                                    Chez Data Guru, notre objectif est de vous délivrer des formations de "qualité artisanale" avec des professeurs experts dans chaque domaine !
                                </div>
                            </div>
                        </div>
                    }
                    imageSrc={YourSvg}
                />
                <div className={stylesModule.seperator}/>
                <ThreeItemsAlignedHorizontally

                    firstItem={<ImageWithMessageBelow icon={<CastForEducationIcon/>} label={"Formation Hybride"} headline={"Session en présentiel ou distanciel"}/>}

                    secondItem={<ImageWithMessageBelow icon={<PeopleOutlineIcon/>} label={"Formateurs"}
                                                 headline={"Des experts qui opèrent sur le terrain"}/>}

                    thirdItem={<ImageWithMessageBelow icon={<PsychologyIcon/>} label={"Qualité"}
                                                headline={"Des parcours pédagogiques bien pensés"}/>}
                />
            </div>
        </header>
    );
}
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
                    title={"Enovat"}
                    titleStyle={stylesModule.titleStyle}
                    descriptionStyle={stylesModule.descriptionStyle}
                    description={
                        <div>
                            <div>
                                <div className={stylesModule.surligne}>
                                    Faites progresser vos compétences et vos projets grâce à une équipe de <b>passionnés</b> !

                                    Nous vous accompagnons avec une approche sur mesure : des formations
                                    d'<b>excellence</b> et un conseil stratégique assuré par des <b>experts</b> dans leur domaine.
                                </div>
                            </div>
                        </div>
                    }
                    imageSrc={YourSvg}
                />
                <div className={stylesModule.seperator}/>
                <ThreeItemsAlignedHorizontally

                    firstItem={<ImageWithMessageBelow icon={<CastForEducationIcon/>} label={"Formations"} headline={"Des formations adaptées à vos besoins et personnalisables."}/>}

                    secondItem={<ImageWithMessageBelow icon={<PeopleOutlineIcon/>} label={"Experts"}
                                                 headline={"Des professionnels animés par la passion de leur métier"}/>}

                    thirdItem={<ImageWithMessageBelow icon={<PsychologyIcon/>} label={"Qualité"}
                                                headline={"Au cœur de nos priorités et guide chacune de nos actions."}/>}
                />
            </div>
        </header>
    );
}
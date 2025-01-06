import styles from "./styles.module.css";
import React from "react";
import classnames from "classnames";
import useDocusaurusContext from "@docusaurus/core/lib/client/exports/useDocusaurusContext";
import {Box, Button, MobileStepper} from "@mui/material";
import MehImage from "../../../../../static/img/avis/meh.jpeg";
import KevinImage from "../../../../../static/img/avis/kevin.png";
import LeoImage from "../../../../../static/img/avis/leo.jpg";
import ThibaultImage from "../../../../../static/img/avis/thibaut.jpg";
import Avis from "../../../lib/testimonyMessage";
import {useTheme} from "@emotion/react";
import {KeyboardArrowLeft, KeyboardArrowRight} from "@mui/icons-material";
import {autoPlay} from "react-swipeable-views-utils";
import SwipeableViews from "react-swipeable-views";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);


const images = [
    {
        name: "Mehdi O.",
        photo: MehImage,
        subtitle: "Senior Data Engineer",
        text: " Un contenu pédagogique dense et complet ! Avec la formation dispensée par DataGuru, " +
            "vous allez découvrir les principaux outils utilisés et les défis que rencontre un Data Engineer au " +
            "quotidien. Mais au delà de l’usage de ces outils, c’est une des rares formations qui insiste sur la " +
            "qualité du code et la culture des tests au sein d’un projet.",
        web_text: "Un contenu pédagogique dense et complet ! Avec la formation dispensée par DataGuru, " +
            "vous allez découvrir les principaux outils utilisés et les défis que rencontre un Data Engineer au " +
            "quotidien. Mais au delà de l’usage de ces outils, c’est une des rares formations qui insiste sur la " +
            "qualité du code et la culture des tests au sein d’un projet. L’alternance entre théorie et pratique est " +
            "parfaitement équilibré et permettra aux étudiants de rapidement mettre en place des flux de données et de" +
            " manipuler du code afin de devenir opérationnel. Ce bootcamp est un vrai accélérateur dans la transition vers " +
            "le métier de Data Engineer."
    },
    {
        name: "Thibaut E.",
        photo: ThibaultImage,
        subtitle: "Développeur @Sportihome",
        text: "J’ai été agréablement surpris du format de formation proposé par DataGuru. " +
            "Ayant été étudiant quelques années auparavant dans une université d’informatique avec des " +
            "méthodes pédagogiques plus conventionnelles, j'aurais aimé " +
            "un format comme le propose ce BootCamp, c'est à dire plus immersif et qui a pour objectif de vous rendre opérationnel."
    },
    {
        name: "Kévin D.",
        photo: KevinImage,
        subtitle: "Fondateur @Keltio",
        text: "Le support de formation est de qualité, l’équipe pédagogique est investie, réactive et soucieuse de la réussite de ses apprenants. " +
            "Les projets, basés sur des cas réels, permettent d'expérimenter et d'approfondir les connaissances techniques."
    },
    {
        name: "Léo T.",
        photo: LeoImage,
        subtitle: "Géo-Data Engineer",
        text: "Le cursus est très pédagogique et aborde toutes les notions nécessaires au poste de data engineer : " +
            "de l'apprentissage de python à l'acquisition de données jusqu'aux compétences les plus poussées en SGBD, Cloud et DevOps."
    },
];

export default function LandingPageAvis() {
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = 4;

    const context = useDocusaurusContext();
    const {siteConfig = {}} = context;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStepChange = (step) => {
        setActiveStep(step);
    };

    return (
        <div className={classnames("container", styles.enrollContainer)}>
            <div>
                <h3 className={classnames(styles.enrollTeaser)}><span>Ce que les gens pensent de Enovat<span
                    style={{color: "#f1bb00"}}>.</span></span>
                </h3>
            </div>
            <div className={classnames(styles.gridContainer)}>
                <div className="row ">
                    <div className={classnames("col", styles.colContainer)}>
                        <Avis name={images[0].name}
                              photo={images[0].photo}
                              subtitle={images[0].subtitle}
                              text={images[0].web_text}/>
                    </div>
                    <div className={classnames("col", styles.colContainer)}>
                        <Avis name={images[2].name}
                              photo={images[2].photo}
                              subtitle={images[2].subtitle}
                              text={images[2].text}/>
                        <br/>

                        <Avis name={images[3].name}
                              photo={images[3].photo}
                              subtitle={images[3].subtitle}
                              text={images[3].text}/>
                    </div>
                    <div className={classnames("col", styles.colContainer)}>
                        <Avis name={images[1].name}
                              photo={images[1].photo}
                              subtitle={images[1].subtitle}
                              text={images[1].text}/>
                    </div>
                </div>
            </div>
            <div className={classnames(styles.mobileContainer)}>
                <Box sx={{maxWidth: 400, flexGrow: 1, minHeight: 400}}>
                    <AutoPlaySwipeableViews
                        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                        index={activeStep}
                        onChangeIndex={handleStepChange}
                        interval={"6000"}
                        enableMouseEvents
                    >
                        {images.map((step, index) => (
                            <div key={step.name}>
                                {Math.abs(activeStep - index) <= 2 ? (
                                    <Avis name={step.name}
                                          photo={step.photo}
                                          subtitle={step.subtitle}
                                          text={step.text}/>
                                ) : null}
                            </div>
                        ))}
                    </AutoPlaySwipeableViews>
                    <MobileStepper
                        steps={maxSteps}
                        position="static"
                        activeStep={activeStep}
                        nextButton={
                            <Button
                                size="small"
                                onClick={handleNext}
                                disabled={activeStep === maxSteps - 1}
                            >
                                Suivant
                                {theme.direction === 'rtl' ? (
                                    <KeyboardArrowLeft/>
                                ) : (
                                    <KeyboardArrowRight/>
                                )}
                            </Button>
                        }
                        backButton={
                            <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                                {theme.direction === 'rtl' ? (
                                    <KeyboardArrowRight/>
                                ) : (
                                    <KeyboardArrowLeft/>
                                )}
                                Précédent
                            </Button>
                        }
                    />
                </Box>
            </div>

        </div>
    );
};
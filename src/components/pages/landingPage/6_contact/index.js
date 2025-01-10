import React from "react";
import styles from "./styles.module.css"
import classnames from "classnames";
import Link from "@docusaurus/core/lib/client/exports/Link";
import {Button} from "@mui/material";
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';
import PhoneIcon from '@mui/icons-material/Phone';
import PermPhoneMsgIcon from '@mui/icons-material/PermPhoneMsg';
import StartIcon from '@mui/icons-material/Start';

const steps = [
    {
        label: 'Vous avez besoin d’aide sur un projet ?',
        description: `Nous mettons à votre disposition notre expertise pour vous accompagner à chaque étape de votre projet. Que ce soit pour définir une stratégie, résoudre des défis techniques, ou garantir un déploiement réussi, nos experts vous apportent des solutions adaptées à vos besoins.`,
        icon : PlaylistAddCheckIcon
    },
    {
        label: "Vous avez besoin d'une formation ?",
        description:
            'Enovat propose des formations sur mesure, conçues pour répondre précisément à vos besoins et à vos objectifs. Chaque formation est pensée pour être engageante, immersive et directement applicable à vos projets.',
        icon : EmojiObjectsIcon,
        button : "Notre catalogue",
        buttonUrl : "/catalogue",
        buttonColor : "#f1bb00",
        buttonIcon : StartIcon,
    },
    {
        label: 'Vous avez un doute ?',
        description: `N’hésitez pas à nous contacter pour discuter de vos objectifs et trouver la meilleure façon de les atteindre.`,
        icon : PermPhoneMsgIcon,
        button : "Nous Contacter",
        buttonUrl : "/contact/",
        buttonColor : "#a6a2f7",
        buttonIcon : PhoneIcon,
    },
];

export default function LandingPageContact() {
     return (
         <div className={classnames("container", styles.container)}>
             <div className="row row--no-gutters">
                 <div className="col col--1"/>
                 <div className="col col--12">
                     <h3 className={classnames(styles.titleStyle)}>
                         <span>Comment Enovat peut vous accompagner </span>
                         <span className={classnames(styles.point)}> ?</span>
                     </h3>
                     <Box className={styles.boxContainer}>
                         <Stepper nonLinear  orientation="vertical">
                             {steps.map((step, index) => (
                                 <Step key={step.label} active={true}>
                                         <StepLabel  StepIconComponent={step.icon} color="inherit">
                                             <span className={styles.stepLabel} >{step.label} </span>
                                         </StepLabel>
                                     <StepContent>
                                         <div className={styles.stepDescription} >{step.description} </div>
                                         {step.button !== undefined && <p className={classnames(styles.contactButton)} >
                                             <Link to={step.buttonUrl} style={{color: step.buttonColor }} >
                                                 <Button variant="contained" startIcon={<step.buttonIcon/>} size="large"
                                                         style={{
                                                             backgroundColor: step.buttonColor,
                                                             borderColor: "transparent",
                                                             fontWeight: "bold"
                                                         }}>
                                                     {step.button}
                                                 </Button>
                                             </Link>
                                         </p>
                                         }
                                     </StepContent>
                                 </Step>
                             ))}
                         </Stepper>
                     </Box>
                 </div>
                 <div className="col col--1"/>
             </div>
         </div>
     );
 };
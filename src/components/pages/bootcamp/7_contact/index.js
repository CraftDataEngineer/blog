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
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import PermPhoneMsgIcon from '@mui/icons-material/PermPhoneMsg';
import StartIcon from '@mui/icons-material/Start';

const steps = [
    {
        label: 'Quels connaissances faut il avoir ?',
        description: `On demande à nos futurs élèves des connaissances basiques en programmation et en système Linux. 
        Pour que le bootcamp vous soit bénéfique, il est plus pertinent que vous avez déjà fait quelques lignes de code avant.`,
        icon : PlaylistAddCheckIcon
    },
    {
        label: 'Vous n’avez jamais fait de code avant ?',
        description:
            'Pas grave, on a créé une formation en 5 jours pour vous aider et gagner en confiance sur du code python, linux et sql.',
        icon : EmojiObjectsIcon,
        button : "Découvrir",
        buttonUrl : "/catalogue/",
        buttonColor : "#f1bb00",
        buttonIcon : StartIcon,
    },
    {
        label: 'Vous avez un doute ?',
        description: `Contacter nous on pourra faire une évaluation ensemble et voir ce qui vous correspond le mieux.`,
        icon : PermPhoneMsgIcon,
        button : "Nous Contacter",
        buttonUrl : "/contact/",
        buttonColor : "#a6a2f7",
        buttonIcon : PhoneInTalkIcon,
    },
];

export default function BootCampContact() {


    return (
        <div className={classnames("container", styles.container)}>
            <div className="row row--no-gutters">
                <div className="col col--1"/>
                <div className="col col--12">
                    <h3 className={classnames(styles.titleStyle)}>
                        <span>Un programme fait pour moi </span>
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
}
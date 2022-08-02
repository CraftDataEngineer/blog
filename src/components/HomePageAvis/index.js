import styles from "./styles.module.css";
import React from "react";
import classnames from "classnames";
import Link from "@docusaurus/core/lib/client/exports/Link";
import Bulle from "../../../static/img/avis/bulle.svg";
import useDocusaurusContext from "@docusaurus/core/lib/client/exports/useDocusaurusContext";
import {Button} from "@mui/material";
import HowToRegIcon from '@mui/icons-material/HowToReg';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';


function Avis({name, subtitle, stars, photo, text}) {
    return (
        <div>
            <div className="avatar" style={{alignItems: "center"}}>
                <img
                    className="avatar__photo avatar__photo--lg" src={photo}/>
                <div className="avatar__intro">
                    <div className="avatar__name">{name}</div>
                    <small className="avatar__subtitle"> {subtitle} <br/> {stars}</small>
                </div>
            </div>
            <div style={{marginTop: "-0.5rem"}}>
                <Bulle style={{marginBottom: "-0.5rem"}}/>
                <div className={classnames(styles.avisContainer)}>
                    <span>{text}</span>
                </div>
            </div>
        </div>
    );
}


function HomePageAvis() {

    const context = useDocusaurusContext();
    const {siteConfig = {}} = context;

    return (
        <div className={classnames(styles.enrollContainer)}>
            <div className={classnames(styles.allAvisContainer)}>
                <h3 className={classnames(styles.enrollTeaser)}><span>Ce que les gens pensent du programme<span
                    style={{color: "#f1bb00"}}>.</span></span>
                </h3>
            </div>
            <div className={classnames(styles.gridContainer)}>
                <div className="row ">
                    <div className={classnames("col", styles.colContainer)}>
                        <Avis name={"Mehdi O."}
                              photo={"https://media-exp1.licdn.com/dms/image/C5103AQHKaGelYV31qw/profile-displayphoto-shrink_100_100/0/1517453131131?e=1665014400&v=beta&t=2-Vav_RNPWzePAPwGNjsmspHtoONEOc1T75fEE6Kb-0"}
                              subtitle={"Senior Data Engineer"}
                              text={"\n" +
                              "Un contenu pédagogique dense et complet ! Avec la formation dispensée par DataGuru, " +
                              "vous allez découvrir les principaux outils utilisés et les défis que rencontre un Data Engineer au " +
                              "quotidien. Mais au delà de l’usage de ces outils, c’est une des rares formations qui insiste sur la " +
                              "qualité du code et la culture des tests au sein d’un projet. L’alternance entre théorie et pratique est " +
                              "parfaitement équilibré et permettra aux étudiants de rapidement mettre en place des flux de données et de" +
                              " manipuler du code afin de devenir opérationnel. Ce bootcamp est un vrai accélérateur dans la transition vers " +
                              "le métier de Data Engineer."}/>
                    </div>
                    <div className={classnames("col", styles.colContainer)}>
                        <Avis name={"Kévin D."}
                              photo={"https://media-exp1.licdn.com/dms/image/C4D03AQGBiYTgSMCI3g/profile-displayphoto-shrink_400_400/0/1550944336592?e=1665014400&v=beta&t=j8h0f1BUUQbcMx9F8YyX6SM8FSM-oBjgBr1kDPtbCEg"}
                              subtitle={"Fondateur @Keltio"}
                              text={"\n" +
                              "Le support de formation est de qualité, l’équipe pédagogique est investie, réactive et soucieuse de la réussite de ses apprenants. " +
                              "Les projets, basés sur des cas réels, permettent d'expérimenter et d'approfondir les connaissances techniques."}/>
                        <br/>
                        <Avis name={"Léo T."}
                              photo={"https://media-exp1.licdn.com/dms/image/C5603AQGVk0X64KsYmw/profile-displayphoto-shrink_400_400/0/1517042126091?e=1665014400&v=beta&t=pbnTQ8DIEIMTGK3nKVAex6jMUGk-rGTz9tiTdMchy4g"}
                              subtitle={"Géo-Data Engineer"}
                              text={
                                  "Le cursus est très pédagogique et aborde toutes les notions nécessaires au poste de data engineer : " +
                                  "de l'apprentissage de python à l'acquisition de données jusqu'aux compétences les plus poussées en SGBD, Cloud et DevOps."}/>

                    </div>
                    <div className={classnames("col", styles.colContainer)}>
                        <Avis name={"Thibaut E."}
                              photo={"https://media-exp1.licdn.com/dms/image/C5603AQFDecrTqRN-Yg/profile-displayphoto-shrink_400_400/0/1578345640755?e=1664409600&v=beta&t=gFA1X81w8w1dq-ms53lvsFEd1G-lRnDHd7HFx2C2TrE"}
                              subtitle={"Développeur @Sportihome"}
                              text={"\n" +
                              "J’ai été agréablement surpris du format de formation proposé par DataGuru. " +
                              "Ayant été étudiant quelques années auparavant dans une université d’informatique avec des " +
                              "méthodes pédagogique plus conventionnelles, j'aurai aimé " +
                              "un format comme le propose ce BootCamp, c'est à dire plus immersif et qui a pour objectif de vous rendre opérationnel."}/>
                    </div>
                </div>
                <div className="row " style={{paddingBottom: "4%", paddingTop: "4%"}}>
                    <div className="col ">
                        <div className={classnames("hero hero--dark shadow--md", styles.questionContainer)}>
                            <div className="container">
                                <h1 className={classnames("hero__title", styles.contactTeaser)}>Vous avez besoin
                                    d'éclaircir un point <span style={{color: "#f1bb00"}}>?</span></h1>
                                <p className="hero__subtitle">N'hésitez pas à nous contacter, nous serons heureux d'y
                                    répondre.</p>
                                <div>
                                    <Link to="/form/" className={classnames(styles.contactButton)}>
                                        <Button variant="contained" startIcon={<PhoneInTalkIcon/>} size="large"
                                                style={{backgroundColor: "#a6a2f7", borderColor: "transparent"}}>
                                            Nous Contacter
                                        </Button>


                                    </Link>

                                    <Link to="/inscription/" className={classnames(styles.enrollButton)}>
                                        <Button variant="contained" startIcon={<HowToRegIcon/>} size="large"
                                                style={{backgroundColor: "#f1bb00", borderColor: "transparent"}}>
                                            Inscrivez-vous
                                        </Button>

                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default HomePageAvis;
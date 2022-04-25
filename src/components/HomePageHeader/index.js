import React from "react";
import useDocusaurusContext from "@docusaurus/core/lib/client/exports/useDocusaurusContext";
import stylesModule from './styles.module.css';
import YourSvg from '../../../static/img/header/dashboard.svg';
import classnames from "classnames";
import SyllabusForm from "../SyllabusFrom";





function HomepageHeader() {
    const [open, setOpen] = React.useState(false);
    const {siteConfig} = useDocusaurusContext();

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <header className={classnames('hero hero--primary headTest', stylesModule.heroSection)}>
            <div className="container" style={{paddingTop: "3%"}}>
                <div className="row">
                    <div className="col col--6">
                        <h3 className={classnames(stylesModule.headTeaser)}>
                            <span>Découverez le métier du Data Engineer</span>
                            <span style={{color:"#f1bb00"}}>.</span>
                        </h3>
                        <p className={classnames(stylesModule.headDescription)}>
                            <span>

                                <b> Expert</b> dans la manipulation et la transformation des données, le <b>Data Engineer </b>
                                 a vu le jour avec l'émergence du <b>Big Data</b>  et figure parmi les profils les plus recherchés par les entreprises !
                                 Grâce à un <b> accompagnement personnalisé </b> pour chaque apprenant, notre <b>formation</b> vous donnera les
                                <b> clefs nécessaires</b> pour rejoindre une équipe en tant que <b>Craft</b> Data Engineer !
                                <b> Bonnes pratiques de programmation</b>, <b> DevOps </b> et <b> Big Data </b> n’auront plus de secret pour vous !

                            </span>
                        </p>

                    </div>
                    <div className="col"/>
                    <div className="col col--5">
                        <div className="row">
                            <YourSvg className={stylesModule.featureSvg} alt={"test"}/>
                        </div>
                        <div  className={classnames(stylesModule.buttonDownload)} >
                                <button className="button  button--primary"  onClick={handleClickOpen}  >Télécharger le programme</button>
                        </div>
                        <SyllabusForm
                            open={open}
                            onClose={handleClose}
                        />
                    </div>
                </div>
                <div className={classnames("row ", stylesModule.containerAnnoucements)}>
                    <div className="col ">
                        <span>Financement :</span>
                        <h2 style={{marginTop: "2%",fontFamily:"CircularStd-Black"}}> 5100 € </h2>
                        <span className={classnames(stylesModule.displayMobile)}>Formation éligible au CPF</span>
                    </div>
                    <div className={classnames("col ", stylesModule.verticleLine)}>
                        <span>Prochain cours :</span>
                        <h3 style={{marginTop: "2%",fontFamily:"CircularStd-Black"}}> JUILLET 05, 2022</h3>
                        <span className={classnames(stylesModule.displayMobile)}>Durée 3 mois</span>
                    </div>
                    <div className={classnames("col ", stylesModule.verticleLine)}>
                        <span>Prérequis :</span>
                        <h3 style={{marginTop: "2%",fontFamily:"CircularStd-Black",fontWeight:"400"}}>BAC + 5</h3>
                        <span
                            className={classnames(stylesModule.displayMobile)}>Connaissances basiques en développement et SQL</span>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default HomepageHeader;
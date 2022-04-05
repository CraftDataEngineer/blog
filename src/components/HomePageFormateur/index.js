import styles from "./styles.module.css";
import React from "react";
import classnames from "classnames";
import sbe  from '../../../static/img/formateur/sbe.png';
import loca  from '../../../static/img/formateur/loca.png';


function HomePageFormateur() {

        return (
            <div className={classnames(styles.formateurContainer)}>
                <div className={classnames("container")} >
                    <h6 className={classnames(styles.formateurTitle)}> <span >Formateurs</span></h6>
                    <h3 className={classnames(styles.formateurTeaser)}> <span >On Partage avec vous Notre Experience ! </span></h3>
                </div>
                 <div className={classnames(styles.gridContainer)}>
                     <div className={classnames("row row--no-gutters" ,styles.featureAvatar)}>
                         <div className="col">
                             <div className="avatar">
                                 <img
                                     className="avatar__photo avatar__photo--xl"
                                     src={loca} style={{ marginRight : "40%"}} />
                                 <img
                                     className="avatar__photo avatar__photo--xl"
                                     src={sbe} style={{ paddingLeft : "0"}}/>
                             </div>
                         </div>
                     </div>
                    <div className="row row--no-gutters">
                        <div className="col ">
                            <img className={classnames(styles.featureProfile,styles.mediaProfile)} src={loca} alt={"loca"}/>
                        </div>
                        <div className="col col--6">
                            <p className={classnames(styles.formateurDescription,"text-center")}>
                                <span > Non moins de 8 ans d'expériences dans le métier,
                                    il a conçu 3 datalakes chez : EDF, BNP et Engie. Il a également participé a des missions d'ops
                                sur le cloud AWS en automatisant la construction/configurations des ressources.
                                Soufiane a tout autant de casquettes dont il vous donnera de très intéressants retours d'expériences.
                                Pour continuer sur les projets des plus impressionnants, Il est maintenant
                                Senior Data Engineer en freelance sur un Datalake du cac 40.
                                </span>
                                <span><br></br></span>
                                <span > A la fin des ses études Loïc a rejoint Octo Technology, il intègre un boot camp en 2018 pour
                                    apprendre les bonnes pratiques et méthodologies de développement (craftmanship).
                                    Il a également conçu 2 datalakes sur AWS, et a été sur des missions d'ops pour les démarches du service public.
                                    Tout comme Soufiane, il lie à la fois le craft, l'ops et ses connaissances autour de la donnée afin de
                                    répondre au mieux aux problématiques que rencontre le data engineer.
                                </span>
                            </p>
                        </div>
                        <div className="col ">
                            <img className={classnames(styles.featureProfile,styles.mediaProfile)} src={sbe} alt={"sbe"}/>
                        </div>
                    </div>
                 </div>
            </div>
        );
};

export default HomePageFormateur;
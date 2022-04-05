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
                                <span >👋 Salut, c'est Loïc et Soufiane... En bref nous :</span>
                            </p>
                            <div className={classnames(styles.formateurDescriptionPoints)}>
                                <ul className={classnames(styles.formateurDescriptionPoints)}>
                                    <li > 👨‍💻 sommes artisant de bonnes pratiques de développement </li>
                                    <li > 🤓 passionnés par les systèmes de gestion de données </li>
                                    <li > 👴 avons plus de 6 ans d'expériences chacuns ... 14 missions au compteurs !</li>
                                </ul>
                            </div>
                            <p className={classnames(styles.formateurDescription,"text-center")}>
                                <span >Depuis plus de 6 ans dans le conseil, nous avons accompagnés de nombreux grand comptes.
                                    Pendant ces années nous avons fait monter en compétences les plus juniors.
                                    En étant encore sur le terrain nous savons ce qui est attendu d'un data engineer.
                                    A travers cette formation nous allons à l'essentiel pour vous donner les clés nécessaire
                                    pour arriver en mission opérationnel  </span>
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
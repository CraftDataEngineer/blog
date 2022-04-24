import styles from "./styles.module.css";
import React from "react";
import classnames from "classnames";
import sbe  from '../../../static/img/formateur/sbe.png';
import loca  from '../../../static/img/formateur/loca.png';
import bloca  from '../../../static/img/formateur/bloca.png';
import bsbe from '../../../static/img/formateur/bsbe.png';

function HomePageFormateur() {

        return (
            <div className={classnames(styles.formateurContainer)}>
                <div className={classnames("container")} >
                    <h6 className={classnames(styles.formateurTitle)}> <span >Formateurs</span></h6>
                    <h3 className={classnames(styles.formateurTeaser)}> <span >On Partage avec vous Notre Experience<span style={{color:"#f1bb00"}}>.</span></span></h3>
                </div>
                 <div className={classnames(styles.gridContainer)}>
                     <div className={classnames("row row--no-gutters" ,styles.featureAvatar)}>
                         <div className="col">
                             <div className="avatar">
                                 <img
                                     className="avatar__photo avatar__photo--xl"
                                     src={loca} style={{ marginRight : "50%"}} />
                                 <img
                                     className="avatar__photo avatar__photo--xl"
                                     src={sbe} style={{ paddingLeft : "0"}}/>
                             </div>
                         </div>
                     </div>
                    <div className="row row--no-gutters">
                        <div className="col  col--3">
                            <img className={classnames(styles.featureProfile,styles.mediaProfile)} src={bloca} alt={"loca"}/>
                        </div>
                        <div className="col col--6">
                            <p className={classnames(styles.formateurDescription,"text-center")}>
                                <span >👋 &nbsp; Salut, c'est  <strong style={{fontFamily:"CircularStd-Black"}}>Loïc et Soufiane </strong>... En bref :</span>
                            </p>
                            <div className={classnames(styles.formateurDescriptionPoints)}>
                                <ul className={classnames(styles.formateurDescriptionPoints)}>
                                    <li >👨‍💻 &nbsp; Nous sommes des artisans des bonnes pratiques de développement.</li>
                                    <li >🏗 &nbsp; Nous sommes des passionnés des systèmes et plateformes de données. </li>
                                    <li >🥼 &nbsp; Nous avons plus de 8 ans d'expériences chacun ... 20 missions au compteur.</li>
                                </ul>
                            </div>
                            <p className={classnames(styles.formateurDescription,"text-center")}>
                                <span >Avec plusieurs années d'expériences, on a participé à l'élaboration de plusieurs plateformes de données chez différents grands comptes. Le métier de Data Engineer est avant tout notre quotidien !
                                    <strong style={{fontFamily:"CircularStd-Black"}}> Toujours sur le terrain </strong>, nous savons ce qui est attendu de ce profil.
                                    Notre volonté à travers cette formation est de partager notre expérience et notre passion pour ce domaine
                                    et de vous donner les clés nécessaires pour arriver à votre prochaine mission opérationnelle. </span>
                            </p>
                        </div>
                        <div className="col col--3">
                            <img className={classnames(styles.featureProfile,styles.mediaProfile)} src={bsbe} alt={"sbe"}/>
                        </div>
                    </div>
                 </div>
            </div>
        );
};

export default HomePageFormateur;
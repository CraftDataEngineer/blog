import styles from "./styles.module.css";
import React from "react";
import classnames from "classnames";
import Infinite from '../../../static/img/teaser/infinite.svg';
import Exercices from '../../../static/img/teaser/exercices.png';
import Tp from '../../../static/img/teaser/lab.png';
import Atelier from '../../../static/img/teaser/atelier.png';
import Project from '../../../static/img/teaser/build.png';
import Design from '../../../static/img/teaser/design.png';
import TakeAway from '../../../static/img/teaser/takeaway.png';
import Dojo from '../../../static/img/teaser/judo.png';
import Education from '../../../static/img/teaser/education.png';
import stylesModule from "../HomePageModules/styles.module.css";

const MOBILE_SIZE = 800

class HomePageTeaser extends React.Component {

    constructor(props) {
        super(props);
        this.state = {showTheorie: true, showPratique: false};

    }


    openBeta = () => {
        this.setState(state => ({
            ...state,
            showPratique: true,
            showTheorie: false
        }));
    };

    openAlpha = () => {
        this.setState(state => ({
            ...state,
            showPratique: false,
            showTheorie: true
        }));
    };

    render() {
        const mobileWidth = (typeof window !== "undefined") ? window.innerWidth <= MOBILE_SIZE : false
        return (
            <div className={classnames(styles.teaserContainer)}>
                <div className={classnames("container", styles.displayMobileHeader)}>
                    <div className="row">
                        <div className="col">
                            <h6 className={classnames(styles.teaserTitle)}><span>Craft Data Engineer</span></h6>
                            <h3 className={classnames(styles.teaserTeaser)}><span>En quoi consiste la formation ?</span>
                            </h3>
                            <p className={classnames(styles.teaserDescription)}>
                                Une formation qui allie <b>théorie</b> et <b>pratique</b> et un accompagnement
                                personnalisé pour chaque candidat.
                            </p>
                        </div>
                        <div className="col col--5">
                            <Infinite className={classnames(stylesModule.infinteSvg)} alt={"test"}/>
                        </div>
                    </div>
                </div>
                <div className={classnames("container")}>
                    <div className={classnames("container", styles.backgroundTitle)}>
                        <ul  className={classnames(`tabs shadow--tl ${mobileWidth ? "" : "tabs--block"}`)}>
                            <li className={classnames(`tabs__item ${this.state.showTheorie ? "tabs__item--active" : ""}`)}
                                style={{color: `${this.state.showTheorie ? "white" : "grey"}`}}
                                onClick={this.openAlpha}><h2 style={{fontFamily:"CircularStd-Black"}}>1. Théorie</h2>
                            </li>
                            <li className={`tabs__item ${this.state.showPratique ? "tabs__item--active" : ""}`}
                                style={{color: `${this.state.showPratique ? "white" : "grey"}`}}
                                onClick={this.openBeta}>
                                <h2 style={{fontFamily:"CircularStd-Black"}}> 2. Pratique</h2>
                            </li>
                        </ul>
                    </div>

                    {this.state.showTheorie && <div className={classnames("container", styles.tabContainer)}>
                        <div className={classnames(styles.pointsDescription)}>
                            <p>
                            <span>
                                Notre objectif est de vous fournir les compétences nécessaires pour votre
                                 prochain rôle de Data Engineer. On vous partagera nos
                                 connaissances et nos retours d'expériences sur les bonnes pratiques du
                                 <b> Software CraftsManship</b> pour vous différencier des autres profils.
                            </span>
                            </p>
                        </div>
                        <div className={classnames("row", styles.rowPadding)}>
                            <div className="col">
                                <div>
                                    <img className={classnames(styles.moduleSvg)} style={{marginTop: "20%"}}
                                         src={Education} alt={"test"}/>
                                </div>
                                <h3 className={classnames(styles.teaserMenuTitle)}><span> Cours</span>
                                </h3>
                                <p className={classnames(styles.teaserMenuDescription)}>
                                    <span>
                                       Nos cours utilisent un format pédagogique qui vous permettra de maîtriser rapidement l’ensemble des concepts clés nécessaires à votre prochain rôle !
                                    </span>
                                </p>
                            </div>
                            <div className="col col--2"/>
                            <div className="col">
                                <div>
                                    <img className={classnames(styles.moduleSvg)} src={Atelier} alt={"test"}/>
                                </div>
                                <h3 className={classnames(styles.teaserMenuTitle)}><span>Études de cas</span>
                                </h3>
                                <p className={classnames(styles.teaserMenuDescription)}>
                                    <span> On travaillera sur plusieurs études de cas inspirés de la vie réelle qui vous permettront de vous projeter facilement dans vos futures missions ! </span>
                                </p></div>
                        </div>
                        <div className="row" style={{padding: "5% 10% 10% 10%"}}>
                            <div className="col">
                                <div>
                                    <img className={classnames(styles.moduleSvg)} src={TakeAway}
                                         alt={"test"}/>
                                </div>
                                <h3 className={classnames(styles.teaserMenuTitle)}><span>Take Away</span>
                                </h3>
                                <p className={classnames(styles.teaserMenuDescription)}>
                                    <span> À la fin de chaque leçon, on reviendra sur les notions importantes à retenir pour être toujours opérationnel dans votre quotidien de développeur.</span>
                                </p>
                            </div>
                            <div className="col col--2"/>
                            <div className="col">
                                <div>
                                    <img className={classnames(styles.moduleSvg)} src={Dojo}
                                         alt={"test"}/>
                                </div>
                                <h3 className={classnames(styles.teaserMenuTitle)}><span>Dojo</span>
                                </h3>
                                <p className={classnames(styles.teaserMenuDescription)}>
                                    <span> Inspiré des Katas en sport de combat, on travaillera en groupe sur des problèmes algorithmiques et d’architectures pour créer les automatismes indispensables du Data Engineer.
                                    </span>
                                </p></div>
                        </div>
                    </div>
                    }
                    {this.state.showPratique && <div className={classnames("container", styles.tabContainer)}>
                        <div className={classnames(styles.pointsDescription)}>
                            <p>
                            <span>
                                Notre formation est à <b>6O% de travaux pratiques. </b>On vous propose differents formats pour pratiquer et maîtriser les concepts théoriques :
                            </span>
                            </p>
                        </div>
                        <div className={classnames("row", styles.rowPadding)}>
                            <div className="col">
                                <div>
                                    <img className={classnames(styles.pratiqueSvg)} src={Tp}
                                         alt={"test"}/>
                                </div>
                                <h3 className={classnames(styles.teaserMenuTitle)} style={{marginTop: "15%"}}><span>Travaux pratiques</span>
                                </h3>
                                <p className={classnames(styles.teaserMenuDescription)}>
                                    <span> Des TPs sont donnés lors des cours afin de dynamiser et d'appliquer les
                                    concepts théoriques. Ils seront réalisés principalement sur des environnements Cloud.</span>
                                </p>
                            </div>
                            <div className="col col--2"/>
                            <div className="col">
                                <div>
                                    <img className={classnames(styles.pratiqueSvg)} src={Design}
                                         alt={"test"}/>
                                </div>
                                <h3 className={classnames(styles.teaserMenuTitle)}><span>Ateliers Architectures</span>
                                </h3>
                                <p className={classnames(styles.teaserMenuDescription)}>
                                    <span> Les ateliers d'architectures sont animés durant les séances live, il faudra
                                           proposer une architecture cible par rapport à un besoin.</span>
                                </p></div>
                        </div>
                        <div className="row" style={{padding: "5% 10% 10% 10%"}}>
                            <div className="col">
                                <div>
                                    <img className={classnames(styles.pratiqueSvg)} src={Exercices}
                                         alt={"test"}/>
                                </div>
                                <h3 className={classnames(styles.teaserMenuTitle)}><span>Exercices maison</span>
                                </h3>
                                <p className={classnames(styles.teaserMenuDescription)}>
                                    <span>Pratiquer en dehors des séances live avec des exercices maison et une correction
                                          personnalisée pour chaque apprenant.</span>
                                </p></div>
                            <div className="col col--2"/>
                            <div className="col">
                                <div>
                                    <img className={classnames(styles.pratiqueSvg)} src={Project}
                                         alt={"test"}/>
                                </div>
                                <h3 className={classnames(styles.teaserMenuTitle)}><span>Projet fil rouge</span>
                                </h3>
                                <p className={classnames(styles.teaserMenuDescription)}>
                                    <span> Un travail de cadrage suivi d'un <b> Proof of concept (PoC) </b> vous sera demandé sur plusieurs semaines
                                           pour finaliser cette formation. Vous allez présenter le résultat sous format
                                           démonstration devant les autres apprenants.</span>
                                </p></div>
                        </div>
                    </div>
                    }
                </div>
            </div>
        );
    }
};

export default HomePageTeaser;
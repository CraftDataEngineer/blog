import styles from "./styles.module.css";
import React from "react";
import classnames from "classnames";
import questions from "../../../static/img/faq/questions.png";


class HomePageFaq extends React.Component  {

    constructor(props) {
        super(props);
        this.state = {show_q_1:true ,show_q_2: true,show_q_3: true};
    }

    openQ1 = () => {
        this.setState(state => ({
            ...state,
            show_q_1: !this.state.show_q_1
        }));
    };

    openQ2 = () => {
        this.setState(state => ({
            ...state,
            show_q_2: !this.state.show_q_2
        }));
    };

    openQ3 = () => {
        this.setState(state => ({
            ...state,
            show_q_3: !this.state.show_q_3
        }));
    };

    render() {
        return (
            <div className={classnames(styles.faqContainer)}>
                <div className={classnames("container")} style={{paddingBottom:"50px"}}>
                    <h6 className={classnames(styles.faqTitle)}><span>FAQ</span></h6>
                    <h3 className={classnames(styles.faqTeaser)}><span>Questions les plus fréquentes </span></h3>
                </div>
                <div className={classnames(styles.gridContainer,"container")}>
                    <div className="row " style={{paddingTop:"5%",paddingBottom:"5%"}}>
                        <div className="col col--1"/>
                        <div className="col col--2">
                            <img
                                className={classnames(styles.featureSvg,styles.mediaProfile)}
                                src={questions}
                                alt="Image alt text"
                                title="Faq"
                            />
                        </div>
                        <div className="col col--7" style={{paddingTop:"1%"}}>
                            <div className={`menu__list-item-collapsible ${this.state.show_q_1 ? "" : "menu__list-item--collapsed"}`}  onClick={this.openQ1} >
                                <a  className={classnames(styles.faqQuestion, "menu__link menu__link--sublist")} >Comment financer ma formation ? CPF, AIF,
                                    Abondements ?</a>
                            </div>
                            { this.state.show_q_1 && <p className={classnames(styles.faqDescription, "menu__link")}>
                                <span>Toutes nos formations sont éligibles au CPF (Compte Personnel de Formation).
                                    Si vous êtes demandeur d’emploi ou en accompagnement CSP, vous pouvez faire une demande d’AIF (Aide Individuelle à la Formation)
                                    ou d’abondement de CPF (Sachez que la formation permet de valider le bloc 2 des compétences du titre RNCP de niveau 6).
                                    Ces dispositifs vous permettent d’être financé par Pôle Emploi jusqu’à hauteur de 2000€. Un financement
                                    d’entreprise est également possible en passant par l’OPCO. Pour le reste à charge,
                                    il est possible de le financer jusqu’à 10 fois </span>
                            </p>
                            }
                            <div className={`menu__list-item-collapsible ${this.state.show_q_2 ? "" : "menu__list-item--collapsed"}`}  onClick={this.openQ2}>
                                <a className={classnames(styles.faqQuestion, "menu__link menu__link--sublist")}>Comment s’organise la formation ?</a>
                            </div>
                            {this.state.show_q_2 && <p className={classnames(styles.faqDescription, "menu__link")}>
                                <span>La formation est composée d’une partie d’e-learning coaché sur notre plateforme
                                    et de séances de masterclass et de coaching animées par nos formateurs data scientists.
                                    Tout au long du parcours, un support live chat vous permet de guider votre apprentissage
                                    et répond à vos questions.  </span>
                            </p>
                            }
                            <div className={`menu__list-item-collapsible ${this.state.show_q_3 ? "" : "menu__list-item--collapsed"}`}  onClick={this.openQ3}>
                                <a className={classnames(styles.faqQuestion, "menu__link menu__link--sublist")}>Un programme fait pour moi ?</a>
                            </div>
                            {this.state.show_q_3 && <div className={classnames(styles.faqDescription, "menu__link")}>
                                <ul style={{ listStyleType: "circle" }}>
                                    <li>
                                        Bac +3 en mathématiques (niveau 6) ou bac +5 en sciences (niveau 7)
                                    </li>
                                    <li>
                                        Compréhension du langage SQL et des systèmes Linux
                                    </li>
                                </ul>
                            </div>
                            }
                        </div>
                        <div className="col col--2"/>
                    </div>
                </div>
            </div>
        );
    }
};

export default HomePageFaq;
import styles from "./styles.module.css";
import React from "react";
import classnames from "classnames";
import questions from "../../../static/img/faq/think.png";


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
                    <h3 className={classnames(styles.faqTeaser)}><span>Questions les plus fréquentes<span style={{color:"#f1bb00"}}>.</span></span></h3>
                </div>
                <div className={classnames(styles.gridContainer,"container")} >
                    <div className="row " style={{marginTop:"5%"}}>
                        <div className="col col--1"/>
                        <div className="col col--2">
                            <img
                                className={classnames(styles.mediaProfile)}
                                src={questions}
                                alt="Image alt text"
                                title="Faq"
                            />
                        </div>
                        <div className="col col--7"  >
                            <div className={`menu__list-item-collapsible ${this.state.show_q_1 ? "" : "menu__list-item--collapsed"}`} style={{marginTop:"5%"}} onClick={this.openQ1} >
                                <a  className={classnames(styles.faqQuestion, "menu__link menu__link--sublist")} >Comment financer ma formation ?</a>
                            </div>
                            { this.state.show_q_1 && <p className={classnames(styles.faqDescription, "menu__link")}>
                                <span>Il est possible de le financer jusqu’à 3 fois. </span>
                            </p>
                            }
                            <div className={`menu__list-item-collapsible ${this.state.show_q_2 ? "" : "menu__list-item--collapsed"}`} style={{marginTop:"3%"}} onClick={this.openQ2}>
                                <a className={classnames(styles.faqQuestion, "menu__link menu__link--sublist")}>Comment s’organise la formation ?</a>
                            </div>
                            {this.state.show_q_2 && <p className={classnames(styles.faqDescription, "menu__link")}>
                                <span>La formation est dispensée à distance avec nos formateurs. Elle sera composée
                                    de séances de masterclass et de coaching individuels.  </span>
                            </p>
                            }
                            <div className={`menu__list-item-collapsible ${this.state.show_q_3 ? "" : "menu__list-item--collapsed"}`} style={{marginTop:"3%"}} onClick={this.openQ3}>
                                <a className={classnames(styles.faqQuestion, "menu__link menu__link--sublist")}>Un programme fait pour moi ?</a>
                            </div>
                            {this.state.show_q_3 && <div className={classnames(styles.faqDescription, "menu__link")}>
                                <span>
                                        Connaissances en programmation et des systèmes Linux.
                                </span>
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
import React from 'react';
import classnames from "classnames";
import styles from "./styles.module.css"
import RendezVous from "../../../../../static/img/rendez-vous/rendezVous.png";
import {InlineWidget} from "react-calendly";


export default function RendezVousForm() {

    return (
        <div>
            <div className={classnames("container", styles.titleContainer)}>
                <div className="row row--no-gutters ">
                    <div className="col ">
                        <h3 className={classnames(styles.formTeaser)}>
                            <span>Vous avez des questions <span style={{color: "#f1bb00"}}>?</span></span>
                        </h3>
                        <p className={classnames(styles.formDescription)}>
                            <span>Prenez un rendez-vous avec notre équipe ! </span>
                        </p>
                    </div>
                    <div className="col col--5">
                        <img alt={"inscription"} src={RendezVous} className={classnames(styles.diplomImg)}/>
                    </div>
                </div>
                <div className="row row--no-gutters ">
                    <div className="col" >
                        <InlineWidget styles={{height: "800px"}}  url="https://calendly.com/dataguru-advisory/30min"/>
                    </div>
                    <div className="col col--1 "/>
                </div>
            </div>
        </div>
    );
};
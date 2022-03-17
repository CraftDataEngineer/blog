import React, {useRef} from 'react';
import emailjs from '@emailjs/browser';
import classnames from "classnames";
import styles from "./styles.module.css"
import questions from "../../../static/img/faq/questions.png";

export default function ContactUs() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_USER_ID')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div>
            <div className={classnames("container", styles.titleContainer)}>
                <h6 className={classnames(styles.formTitle)}><span>Craft Data Engineer</span></h6>
                <h3 className={classnames(styles.formTeaser)}><span>Inscrivez vous à la prochaine session !</span>
                </h3>
                <p className={classnames(styles.formDescription)}>
                    <span>Inscrivez vous à la prochaine session et posez nous toutes vos questions ! </span>
                </p>
            </div>
            <div className={classnames("container")} style={{paddingBottom: "200px"}}>
                <form className={classnames(styles.formContainer,"shadow--md")}>
                    <div className="row row--no-gutters ">
                            <div className="col col--1"/>
                            <div className="col col--2">
                                <div className="field">
                                <label>Email : </label>
                                </div>
                            </div>
                            <div className="col col--5">
                                <input type="email" name="email" className="button--block"
                                        style={{ fontSize: "0.9rem"}}/>
                            </div>
                    </div>
                    <div className="row row--no-gutters " style={{ paddingTop: "10px"}}>
                            <div className="col col--1"/>
                            <div className="col col--2">
                                <div className="field">
                                <label>Questions : </label>
                                </div>
                            </div>
                            <div className="col col--5">
                                <textarea name="questions" rows="10" className="button--block"
                                        style={{ rows:"40" ,cols:"50"}}/>
                            </div>
                    </div>
                    <div className="row row--no-gutters " style={{ paddingTop: "10px"}}>
                            <div className="col col--4">
                            </div>
                            <div className="col col--3">
                                <button className="button button--sm button--block button--outline button--primary" >Envoyer</button>
                            </div>
                    </div>
                </form>
            </div>
        </div>
    );
};
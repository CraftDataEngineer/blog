import React, {useRef, useState} from 'react';
import emailjs from '@emailjs/browser';
import classnames from "classnames";
import styles from "./styles.module.css"
import Link from "@docusaurus/core/lib/client/exports/Link";


const SERVICE_ID = 'service_kmjngyo'
const TEMPLATE_ID = 'template_1t3e77o'
const USER_ID = 'XelOog_ZvkGiZ60Ty'

export default function ContactUs() {
    const [loading, setLoading] = useState(false)
    const [send, setSend] = useState(false);
    const [error, setError] = useState(false);

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true)
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, USER_ID)
            .then((result) => {
                setSend(true)
                setLoading(false)
            }, (error) => {
                setError(true)
                setLoading(false)
            });
    };

    return (
        <div>
            <div className={classnames("container")} style={{paddingBottom: "200px"}}>
                <form className={classnames(styles.formContainer, "shadow--lw")} ref={form} onSubmit={sendEmail}>
                    <div className="row row--no-gutters ">
                        <div className="col col--1"/>
                        <div className="col col--2">
                            <div className="field">
                                <label>@ Email </label>
                                <label style={{fontSize: "0.8rem",color:"red"}}>٭</label>
                            </div>
                        </div>
                        <div className="col col--5">
                            <input type="email" name="email" className="button--block"
                                   style={{fontSize: "0.9rem"}} required={true}/>
                        </div>
                    </div>
                    <div className="row row--no-gutters " style={{paddingTop: "10px"}}>
                        <div className="col col--1"/>
                        <div className="col col--2">
                            <div className="field">
                                <label>Questions </label>
                                <label style={{fontSize: "0.8rem",color:"red"}}>٭</label>
                            </div>
                        </div>
                        <div className="col col--5">
                                <textarea name="message" rows="10" className="button--block"
                                          style={{rows: "40", cols: "50"}} required={true}/>
                        </div>
                    </div>
                    <div className="row row--no-gutters " style={{paddingTop: "10px"}}>
                        <div className="col col--3"/>
                        <div className="col col--5">
                            <input type="checkbox" id="inscription" name="inscription" value="true"/>
                            <label> Je souhaite m'inscrire à la formation</label>
                        </div>
                    </div>
                    <div className="row row--no-gutters " style={{paddingTop: "10px"}}>
                        <div className="col col--3">
                        </div>
                        {!send && !error && !loading && <div className="col col--5">
                            <button className="button button--block button--outline button--primary">Envoyer</button>
                        </div>}
                        {send && !error && !loading  &&  <div className="col col--5">
                            <div className="alert alert--success" role="alert">
                                <button aria-label="Close" className="clean-btn close" type="button">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                                Message <strong> envoyé</strong> !
                            </div>
                            <br/>
                            <Link to={"/"}><button className="button button--block  button--outline button--primary">Revenir à l'accueil</button></Link>
                        </div>
                        }
                        {error && !send && !loading && <div className="col col--5">
                            <div className="alert alert--danger" role="alert">
                            <button aria-label="Close" className="clean-btn close" type="button">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                                <strong>Erreur</strong> le message n'est pas envoyé !
                            </div>
                            <br/>
                            <Link to={"/#"}><button className="button button--block  button--outline button--primary">Revenir à l'accueil</button></Link>
                        </div>
                        }
                    </div>
                </form>
            </div>
        </div>
    );
};
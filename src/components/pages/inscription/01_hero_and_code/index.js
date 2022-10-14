import React, {useRef, useState} from 'react';
import emailjs from '@emailjs/browser';
import classnames from "classnames";
import styles from "./styles.module.css"
import Link from "@docusaurus/core/lib/client/exports/Link";
import Diplom from "../../../../../static/img/inscription/diplom.png";

const SERVICE_ID = 'service_kmjngyo'
const TEMPLATE_ID = 'template_v6b7dip'
const USER_ID = 'XelOog_ZvkGiZ60Ty'

export default function InscriptionForm() {
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
            <div className={classnames("container", styles.titleContainer)}>
                <div className="row row--no-gutters ">
                    <div className="col col--7 ">
                        <h3 className={classnames(styles.formTeaser)}>
                            <span>Inscrivez vous à la prochaine session<span style={{color:"#f1bb00"}}>.</span></span>
                        </h3>
                        <p className={classnames(styles.formDescription)}>
                            <span>Inscrivez-vous à la prochaine session et profitez des dernières places ! </span>
                        </p>
                    </div>
                    <div className="col col--5">
                        <img alt={"inscription"} src={Diplom}  />
                    </div>
                </div>
            </div>
            <div className={classnames("container")} style={{paddingBottom: "200px"}}>
                <form className={classnames(styles.formContainer, "shadow--lw")} ref={form} onSubmit={sendEmail}>
                    <div className="row row--no-gutters " style={{paddingTop: "10px"}}>
                        <div className="col col--2"/>
                        <div className="col col--2">
                            <div className="field">
                                <label>Prénom </label>
                                <label style={{fontSize: "0.8rem", color: "red"}}>٭</label>
                            </div>
                        </div>
                        <div className="col col--3">
                            <input type="text" name="name" className="button--block"
                                   style={{fontSize: "0.9rem"}} required={true}/>
                        </div>
                    </div>
                    <div className="row row--no-gutters " style={{paddingTop: "10px"}}>
                        <div className="col col--2"/>
                        <div className="col col--2">
                            <div className="field">
                                <label>Nom </label>
                                <label style={{fontSize: "0.8rem", color: "red"}}>٭</label>
                            </div>
                        </div>
                        <div className="col col--3">
                            <input type="text" name="fullname" className="button--block"
                                   style={{fontSize: "0.9rem"}} required={true}/>
                        </div>
                    </div>
                    <div className="row row--no-gutters " style={{paddingTop: "10px"}}>
                        <div className="col col--2"/>
                        <div className="col col--2">
                            <div className="field">
                                <label>@ Email </label>
                                <label style={{fontSize: "0.8rem", color: "red"}}>٭</label>
                            </div>
                        </div>
                        <div className="col col--3">
                            <input type="email" name="email" className="button--block"
                                   style={{fontSize: "0.9rem"}} required={true}/>
                        </div>
                    </div>
                    <div className="row row--no-gutters " style={{paddingTop: "10px"}}>
                        <div className="col col--2"/>
                        <div className="col col--2">
                            <div className="field">
                                <label> 📞 téléphone </label>
                                <label style={{fontSize: "0.8rem", color: "red"}}>٭</label>
                            </div>
                        </div>
                        <div className="col col--3">
                            <input name="phone" type="tel" className="button--block" required={true}/>
                        </div>
                    </div>
                    <div className="row row--no-gutters " style={{paddingTop: "10px"}}>
                        <div className="col col--4">
                        </div>
                        {!send && !error && !loading && <div  className={classnames("col col--3",styles.paddingButton)}>
                            <button className="button button--block button--outline button--primary">Envoyer</button>
                        </div>}
                        {send && !error && !loading && <div className={classnames("col col--3",styles.paddingButton)}>
                            <div className="alert alert--success" role="alert">
                                <button aria-label="Close" className="clean-btn close" type="button">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                                Message <strong> envoyé</strong> !
                            </div>
                            <br/>
                            <Link to={"/"}>
                                <button className="button button--block  button--outline button--primary">Revenir à
                                    l'accueil
                                </button>
                            </Link>
                        </div>
                        }
                        {error && !send && !loading && <div  className={classnames("col col--3",styles.paddingButton)}>
                            <div className="alert alert--danger" role="alert">
                                <button aria-label="Close" className="clean-btn close" type="button">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                                <strong>Erreur</strong> le message n'est pas envoyé !
                            </div>
                            <br/>
                            <Link to={"/#"}>
                                <button className="button button--block  button--outline button--primary">Revenir à
                                    l'accueil
                                </button>
                            </Link>
                        </div>
                        }
                    </div>
                </form>
            </div>
        </div>
    );
};
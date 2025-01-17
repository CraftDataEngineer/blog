import React, {useRef, useState} from 'react';
import emailjs from '@emailjs/browser';
import classnames from "classnames";
import styles from "./styles.module.css"
import Link from "@docusaurus/core/lib/client/exports/Link";
import {Chip, InputAdornment, LinearProgress, TextField} from "@mui/material";
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';


const SERVICE_ID = 'service_b9av8k6'
const TEMPLATE_ID = 'template_mjy84uk'
const USER_ID = '2exdNLWP56ycM0-6J'

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
                        <div className="col col--3"/>
                        <div className="col col--5">
                            <TextField id="standard-basic"
                                       InputProps={{
                                           startAdornment: (
                                               <InputAdornment position="start">
                                                   <AlternateEmailIcon/>
                                               </InputAdornment>
                                           ),
                                       }}
                                       name="email"
                                       fullWidth label="Email" variant="standard" type="email" required={true}/>
                        </div>
                    </div>
                    <div className="row row--no-gutters " style={{paddingTop: "10px"}}>
                        <div className="col col--3"/>
                        <div className="col col--5">
                            <TextField
                                id="outlined-multiline-static"
                                label="Questions"
                                name="message"
                                multiline
                                fullWidth
                                rows={10}
                                required={true}
                            />
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
                        {send && !error && !loading && <div className="col col--5">
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
                        {error && !send && !loading && <div className="col col--5">
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
                        {!send && !error && loading &&
                            <div className="col col--5">
                                <LinearProgress/>
                            </div>
                        }
                    </div>
                </form>
            </div>
        </div>
    );
};
import React, {useRef, useState} from 'react';
import classnames from "classnames";
import styles from "./styles.module.css"
import HeaderSVG from '../../../static/img/form/header.svg'
import { saveAs } from "file-saver";


export default function SyllabusForm() {
    const [loading, setLoading] = useState(false);

    const form = useRef();

    const saveFile = () => {
        saveAs(
            "/files/see.csv",
            "example.csv"
        );
    };

    return (
        <div>
            <div className={classnames("container", styles.titleContainer)}>
                <div className="row row--no-gutters ">
                    <div className="col col--7 ">
                        <h6 className={classnames(styles.formTitle)}><span>Craft Data Engineer</span></h6>
                        <h3 className={classnames(styles.formTeaser)}>
                            <span>Télécharger le programme complet de la formation !</span>
                        </h3>
                        <p className={classnames(styles.formDescription)}>
                            <span>Découverez en detail le contenu de la formation. </span>
                        </p>
                    </div>
                    <div className="col ">
                         <HeaderSVG alt={"inscription"} className={styles.inscription} />
                    </div>
                </div>
            </div>
            <div className={classnames("container")} style={{paddingBottom: "200px"}}>
                <form className={classnames(styles.formContainer)} ref={form} onSubmit={saveFile}>
                    <div className="row row--no-gutters " style={{paddingTop: "10px"}}>
                        <div className="col col--2"/>
                        <div className="col col--2">
                            <div className="field">
                                <label>Prénom </label>
                                <label style={{fontSize: "0.8rem", color: "red"}}>٭</label>
                                <label> : </label>
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
                                <label> : </label>
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
                                <label> : </label>
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
                                <label>📞 &nbsp; téléphone </label>
                                <label style={{fontSize: "0.8rem"}}></label>
                                <label> : </label>
                            </div>
                        </div>
                        <div className="col col--3">
                            <input name="phone" type="tel" className="button--block" required={true}/>
                        </div>
                    </div>
                    <div className="row row--no-gutters " style={{paddingTop: "10px"}}>
                        <div className="col col--4">
                        </div>
                        <div className="col col--3"  style={{paddingTop: "1%"}}>
                                <button className="button button--block  button--primary" >Télécharger le programme</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};
import React, {useRef, useState} from 'react';
import classnames from "classnames";
import styles from "./styles.module.css"
import HeaderSVG from '../../../static/img/form/header.svg'
import {saveAs} from "file-saver";
import PropTypes from "prop-types";
import Dialog from "@mui/material/Dialog";
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import PersonIcon from '@mui/icons-material/Person';
import {Divider} from "@mui/material";


SyllabusForm.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
};

export default function SyllabusForm(props) {
    const form = useRef();
    const {onClose, open} = props;

    const handleClose = () => {
        onClose("");
    };


    const saveFile = () => {
        saveAs(
            "/files/programme.pdf",
            "programme.pdf"
        );
    };

    return (
        <Dialog onClose={handleClose} open={open} fullWidth={true} maxWidth={"lg"}
                className={classnames("container", styles.dialogContainer)}>
            <div className={classnames("container", styles.titleContainer)}>
                <div className="row row--no-gutters ">
                    <div className="col col--7 ">
                        <h6 className={classnames(styles.formTitle)}><span> Data Guru</span></h6>
                        <h3 className={classnames(styles.formTeaser)}>
                            <span>Télécharger le programme complet de la formation<span style={{color:"#f1bb00"}}>.</span></span>
                        </h3>
                        <p className={classnames(styles.formDescription)}>
                            <span>Découvrez en detail le contenu de la formation. </span>
                        </p>
                    </div>
                    <div className="col ">
                        <HeaderSVG alt={"inscription"} className={styles.inscription}/>
                    </div>
                </div>
            </div>
            <div className={classnames("container")}>
                <form className={classnames(styles.formContainer)} ref={form} onSubmit={saveFile}>
                    <div className="row row--no-gutters " style={{padding: "3%"}}>
                        <div className="col col--1"/>
                        <div className="col col--10">
                            <Divider variant={"middle"}/>
                        </div>
                    </div>
                    <div className="row row--no-gutters " style={{paddingTop: "10px"}}>
                        <div className="col col--3"/>
                        <div className="col col--2">
                            <div className="field">
                                <label><PersonOutlineIcon fontSize={"small"}/> Prénom </label>
                                <label style={{fontSize: "0.8rem", color: "red"}}>٭</label>
                            </div>
                        </div>
                        <div className="col col--3">
                            <input type="text" name="name" className="button--block"
                                   style={{fontSize: "0.9rem"}} required={true}/>
                        </div>
                    </div>
                    <div className="row row--no-gutters " style={{paddingTop: "10px"}}>
                        <div className="col col--3"/>
                        <div className="col col--2">
                            <div className="field">
                                <PersonIcon fontSize={"small"} style={{marginBottom: "0"}}/>
                                <label> Nom </label>
                                <label style={{fontSize: "0.8rem", color: "red"}}>٭</label>
                            </div>
                        </div>
                        <div className="col col--3">
                            <input type="text" name="fullname" className="button--block"
                                   style={{fontSize: "0.9rem"}} required={true}/>
                        </div>
                    </div>
                    <div className="row row--no-gutters " style={{paddingTop: "10px"}}>
                        <div className="col col--3"/>
                        <div className="col col--2">
                            <div className="field">
                                <label><AlternateEmailIcon fontSize={"small"}/> Email </label>
                                <label style={{fontSize: "0.8rem", color: "red"}}>٭</label>
                            </div>
                        </div>
                        <div className="col col--3">
                            <input type="email" name="email" className="button--block"
                                   style={{fontSize: "0.9rem"}} required={true}/>
                        </div>
                    </div>
                    <div className="row row--no-gutters " style={{paddingTop: "10px"}}>
                        <div className="col col--3"/>
                        <div className="col col--2">
                            <div className="field">
                                <label><AddIcCallIcon fontSize={"small"}/> Téléphone </label>
                                <label style={{fontSize: "0.8rem", color: "red"}}>٭</label>
                            </div>
                        </div>
                        <div className="col col--3">
                            <input name="phone" type="tel" className="button--block" required={true}/>
                        </div>
                    </div>
                    <div className="row row--no-gutters " style={{paddingTop: "10px"}}>
                        <div className="col col--5">
                        </div>
                        <div className={classnames("col col--3")}>
                            <button className={classnames("button button--block  button--primary",styles.buttonContainer)}>Télécharger le programme</button>
                        </div>
                    </div>
                </form>
            </div>
        </Dialog>
    );
};
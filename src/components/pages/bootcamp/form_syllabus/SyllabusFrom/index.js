import React, {useRef, useState} from 'react';
import classnames from "classnames";
import styles from "./styles.module.css"
import HeaderSVG from '../../../../../../static/img/form/header.svg'
import {saveAs} from "file-saver";
import PropTypes from "prop-types";
import Dialog from "@mui/material/Dialog";
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import PersonIcon from '@mui/icons-material/Person';
import {Button, Divider, InputAdornment, LinearProgress, TextField} from "@mui/material";
import emailjs from "@emailjs/browser";

const SERVICE_ID = 'service_kmjngyo'
const TEMPLATE_ID = 'template_v6b7dip'
const USER_ID = 'XelOog_ZvkGiZ60Ty'

SyllabusForm.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
};

export default function SyllabusForm(props) {
    const [loading, setLoading] = useState(false)
    const [send, setSend] = useState(false);
    const [error, setError] = useState(false);
    const form = useRef();
    const {onClose, open} = props;

    const handleClose = () => {
        onClose("");
    };


    const saveFile = () => {
        saveAs(
            "/files/syllabus.pdf",
            "dataguru_syllabus.pdf"
        );
    };

    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true)
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, USER_ID)
            .then((result) => {
                setSend(true)
                setLoading(false)
                saveFile()
            }, (error) => {
                setError(true)
                setLoading(false)
                console.log("ERROR SENDING EMAIL : ", error)
            });
    };


    return (
        <Dialog onClose={handleClose} open={open} fullWidth={true} maxWidth={"lg"}
                className={classnames("container", styles.dialogContainer)}>
            <div className={classnames("container", styles.titleContainer)}>
                <div className="row row--no-gutters ">
                    <div className="col col--7 ">
                        <h6 className={classnames(styles.formTitle)}><span> Data Guru</span></h6>
                        <h3 className={classnames(styles.formTeaser)}>
                            <span>Télécharger le programme complet de la formation<span
                                style={{color: "#f1bb00"}}>.</span></span>
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
                <form className={classnames(styles.formContainer)} ref={form} onSubmit={sendEmail}>
                    <div className="row row--no-gutters " style={{padding: "3%"}}>
                        <div className="col col--1"/>
                        <div className="col col--10">
                            <Divider variant={"middle"}/>
                        </div>
                    </div>
                    <div className="row row--no-gutters " style={{paddingTop: "10px"}}>
                        <div className="col col--5"/>
                        <div className="col col--3">
                            <TextField id="standard-basic"
                                       InputProps={{
                                           startAdornment: (
                                               <InputAdornment position="start">
                                                   <PersonOutlineIcon/>
                                               </InputAdornment>
                                           ),
                                       }}
                                       name="name"
                                       fullWidth label="Prénom" variant="standard" type="text" required={true}/>
                        </div>
                    </div>
                    <div className="row row--no-gutters " style={{paddingTop: "10px"}}>
                        <div className="col col--5"/>
                        <div className="col col--3">
                            <TextField id="standard-basic"
                                       InputProps={{
                                           startAdornment: (
                                               <InputAdornment position="start">
                                                   <PersonIcon/>
                                               </InputAdornment>
                                           ),
                                       }}
                                       name="fullname"
                                       fullWidth label="Nom" variant="standard" type="text" required={true}/>
                        </div>
                    </div>
                    <div className="row row--no-gutters " style={{paddingTop: "10px"}}>
                        <div className="col col--5"/>
                        <div className="col col--3">
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
                        <div className="col col--5"/>
                        <div className="col col--3">
                            <TextField id="standard-basic"
                                       InputProps={{
                                           startAdornment: (
                                               <InputAdornment position="start">
                                                   <AddIcCallIcon/>
                                               </InputAdornment>
                                           ),
                                       }}
                                       name="phone"
                                       fullWidth label="Téléphone" variant="standard" type="number" />
                        </div>
                    </div>
                    <div className="row row--no-gutters " style={{paddingTop: "3%"}}>
                        <div className="col col--5">
                        </div>
                        {loading &&
                        <div className="col col--3">
                            <LinearProgress/>
                        </div>
                        }
                        {!loading &&
                        <div className={classnames("col col--3")}>
                            <button
                                className={classnames("button button--block  button--primary", styles.buttonContainer)}>Télécharger
                                le programme
                            </button>
                        </div>
                        }

                    </div>
                </form>
            </div>
        </Dialog>
    );
};
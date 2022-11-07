import React from "react";
import styles from "./styles.module.css"
import classnames from "classnames";
import Link from "@docusaurus/core/lib/client/exports/Link";
import {Button, Stack} from "@mui/material";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";


export default function LandingPageContact() {


    return (
        <div className={classnames("container", styles.container)}>
            <div className="row row--no-gutters">
                <div className="col col--1"/>
                <div className="col col--12">
                    <h3 className={classnames(styles.titleStyle)}>
                        <span>vous avez des questions</span>
                        <span className={classnames(styles.point)}> ?</span>
                    </h3>
                    <Link to="/contact/" className={classnames(styles.contactButton)}>
                        <Button variant="contained" startIcon={<PhoneInTalkIcon/>} size="large"
                                style={{backgroundColor: "#a6a2f7", borderColor: "transparent"}}>
                            Nous Contacter
                        </Button>
                    </Link>
                </div>
                <div className="col col--1"/>
            </div>
        </div>
    );
}
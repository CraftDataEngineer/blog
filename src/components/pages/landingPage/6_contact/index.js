import React from "react";
import styles from "./styles.module.css"
import classnames from "classnames";
import Link from "@docusaurus/core/lib/client/exports/Link";
import {Button, Stack} from "@mui/material";
import PhoneIcon from '@mui/icons-material/Phone';

export default function LandingPageContact() {


    return (
        <div className={classnames("container", styles.container)}>
            <div className="row row--no-gutters">
                <div className="col col--1 "/>
                <div className="col ">
                    <Stack
                        direction="column"
                        spacing={5}
                        justifyContent="center"
                        alignItems="center"
                    >
                        <div>
                            <h3 className={classnames(styles.titleStyle)}>
                                <span>Vous avez des questions</span>
                                <span className={classnames(styles.point)}> ?</span>
                            </h3>
                        </div>
                        <div>
                            <Link to="/contact/" className={classnames(styles.contactButton)}>
                                <Button variant="contained" startIcon={<PhoneIcon/>} size="large"
                                        style={{backgroundColor: "#a6a2f7", borderColor: "transparent"}}>
                                    Nous Contacter
                                </Button>
                            </Link>
                        </div>
                    </Stack>
                </div>
                <div className="col col--1"/>
            </div>
        </div>
    );
}
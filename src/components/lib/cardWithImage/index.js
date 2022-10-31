import React from "react";
import styles from "./lib.styles.module.css";
import classnames from "classnames";
import BuildIcon from '@mui/icons-material/Build';
import {Button} from "@mui/material";

export default function cardWithImage({titleIcon, titleText, title, images, text, cardUrl,badge ,badgeColor = "#A6A2F7", active = true}) {


    return (
            <div className={classnames(styles.leftPart,active ? styles.styleLeftPartActive: styles.styleLeftPartNotActive)}>
                    <ul>
                        <li>
                            <div>
                                <div>{titleIcon}</div>
                                <h6>{titleText}</h6>
                                <h2>{images.map(image => <img key="2" alt="" src={image.src}
                                                              className={image.large ? styles.largeIcon : styles.smallIcon}/>)} </h2>
                            </div>
                            <div>
                                <h3> {title}</h3>
                                <p className={classnames(styles.textContainer)}> {text}</p>
                            </div>
                        </li>
                    </ul>
                <div style={{ paddingTop:"10%"}}>
                    <h1>
                        {active && <a className="button button--warning button--outline" href={cardUrl}>DÉCOUVRIR</a>}
                        {!active && <Button variant="contained" size="small" color="error" startIcon={<BuildIcon />} disabled>
                            COMING SOON
                        </Button>}
                    </h1>
                    <h4>
                        {badge !== undefined &&
                        <span className="badge " style={{backgroundColor:badgeColor}}>{badge}</span>
                        }
                    </h4>

                </div>
            </div>
    );
}


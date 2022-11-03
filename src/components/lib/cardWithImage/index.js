import React from "react";
import styles from "./lib.styles.module.css";
import classnames from "classnames";
import BuildIcon from '@mui/icons-material/Build';
import {Button} from "@mui/material";
import Badge from "@mui/material/Badge";

export default function cardWithImage({
                                          titleIcon,
                                          titleText,
                                          title,
                                          images,
                                          text,
                                          cardUrl,
                                          tag,
                                          tagColor = "#A6A2F7",
                                          active = true,
                                          badge
                                      }) {


    return (
        <Badge
            badgeContent={badge}
            color="success"
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
        >
            <div
                className={classnames(styles.leftPart, active ? styles.styleLeftPartActive : styles.styleLeftPartNotActive)}>
                <ul>
                    <li>
                        <div>
                            <div>{titleIcon}</div>
                            <h6>{titleText}</h6>
                            <h2>{images.map(image => <img key="2" alt="" src={image.src}
                                                          style={{
                                                              width: image.width !== undefined ? image.width : undefined,
                                                              height: image.height !== undefined ? image.height : undefined
                                                          }}
                                                          className={image.large ? styles.largeIcon : styles.smallIcon}/>)} </h2>
                        </div>
                        <div>
                            <h3> {title}</h3>
                            <p className={classnames(styles.textContainer)}> {text}</p>
                        </div>
                    </li>
                </ul>
                <div style={{paddingTop: "10%"}}>
                    <h1>
                        {active && <a className="button button--warning button--outline button--sm" href={cardUrl}>DÉCOUVRIR</a>}
                        {!active &&
                        <Button variant="contained" size="small" color="error" startIcon={<BuildIcon/>} disabled>
                            COMING SOON
                        </Button>}
                    </h1>
                    <h4>
                        {tag !== undefined &&
                        <span className="badge " style={{backgroundColor: tagColor}}>{tag}</span>
                        }
                    </h4>
                </div>
            </div>
        </Badge>

    );
}


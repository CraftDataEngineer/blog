import React from "react";
import styles from "./lib.styles.module.css";


export default function ComplexMessageWithMultipleIcons({titleIcon, title, images,text}) {
    return (
            <div className={styles.leftPart}>
                <ul>
                    <li>
                        <div>
                            <div>{titleIcon}</div>
                            <h6>{title}</h6>
                            <h2>{images.map(image => <img alt="" src={image.src} className={image.large ? styles.largeIcon : styles.smallIcon}/>)} </h2>
                        </div>
                        <p> {text}</p>
                    </li>
                </ul>
            </div>
    );
}


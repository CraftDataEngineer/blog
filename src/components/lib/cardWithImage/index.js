import React from "react";
import styles from "./lib.styles.module.css";


export default function cardWithImage({titleIcon ,titleText, title, images,text,cardUrl}) {



    return (
        <div className={styles.leftPart}>
            <ul>
                <li>
                    <div>
                        <div>{titleIcon}</div>
                        <h6>{titleText}</h6>
                        <h2>{images.map(image => <img key="2" alt="" src={image.src} className={image.large ? styles.largeIcon : styles.smallIcon}/>)} </h2>
                    </div>
                    <h3> {title}</h3>
                    <p> {text}</p>
                    <a className="button button--warning button--outline" href={cardUrl}>DÉCOUVRIR </a>
                </li>
            </ul>
        </div>
    );
}


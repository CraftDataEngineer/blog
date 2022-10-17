import React from "react";
import stylesModule from './lib.styles.module.css';
import classnames from "classnames";

export default function MutltilineMessageWithTitle({title, items,minHeight = "35rem"}) {


    return (
        <div className={stylesModule.leftPart}>
            <h3 className={classnames(stylesModule.title)}> {title} </h3>
            <ul style={{minHeight :minHeight}}>
                {items.map(item =>
                    <li key={item.title}>
                        <h6>{item.icon} {item.title}</h6>
                        <p>{item.text}</p>
                    </li>
                )}
            </ul>
        </div>
    );
}
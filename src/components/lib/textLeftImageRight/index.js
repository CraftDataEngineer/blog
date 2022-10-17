import React from "react";
import stylesModule from './lib.styles.module.css';
import classnames from "classnames";


export default function TextLeftImageRight({title,ponctuation = ".", description, imageSrc,imageStyle = stylesModule.image,containerStyle= {}}) {
    return (
        <div className={classnames("container",containerStyle)}>
            <div className="row">
                <div className="col col--6">
                    <h3 className={classnames(stylesModule.title)}>
                        <span>{title}</span>
                        <span className={classnames(stylesModule.point)}>{ponctuation}</span>
                    </h3>
                    <div className={classnames(stylesModule.description)}>
                        {description}
                    </div>
                </div>
                <div className="col"/>
                <div className="col col--5">
                    <div className="row">
                        <img src={imageSrc} className={imageStyle} alt={""}/>
                    </div>
                </div>
            </div>
        </div>
    );
}


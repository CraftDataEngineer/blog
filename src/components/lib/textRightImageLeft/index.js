import React from "react";
import stylesModule from './lib.styles.module.css';
import classnames from "classnames";


export default function TextRightImageLeft({
                                               title,
                                               titleStyle = stylesModule.title,
                                               ponctuation = ".",
                                               description,
                                               descriptionStyle = stylesModule.description,
                                               imageSrc,
                                               imageStyle = stylesModule.image,
                                               containerStyle = {}
                                           }) {
    return (
        <div className={classnames("container", containerStyle)}>
            <div className="row">
                <div className="col col--5">
                    <img src={imageSrc} className={imageStyle} alt={""}/>
                </div>
                <div className="col"/>
                <div className="col col--6">
                    <h3 className={classnames(titleStyle)}>
                        <span>{title}</span>
                        <span className={classnames(stylesModule.point)}>{ponctuation}</span>
                    </h3>
                    <div className={classnames(descriptionStyle)}>
                        {description}
                    </div>
                </div>
            </div>
        </div>
    );
}


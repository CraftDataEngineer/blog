import React from "react";
import stylesModule from './lib.styles.module.css';
import classnames from "classnames";

export default function ThreeItemsInLine({firstItem, secondItem, thirdItem}) {
    return (
        <div className="container">
            <div className={classnames("row ", stylesModule.container)}>
                <div className={classnames("col ", stylesModule.firstverticleLine)}>
                    {firstItem}
                </div>
                <div className={classnames("col ", stylesModule.verticleLine)}>
                    {secondItem}
                </div>
                <div className={classnames("col ", stylesModule.verticleLine)}>
                    { thirdItem }
                </div>
            </div>
        </div>
    );
}


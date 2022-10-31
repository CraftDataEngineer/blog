import React from "react";
import stylesModule from './styles.module.css';
import classnames from "classnames";


export default function LandingPageCitation() {


    return (
            <div className={classnames("container" ,stylesModule.container)} >
                    <div className={stylesModule.citation}>
                        La fonction d'un bon logiciel est de faire en sorte que le complexe paraisse simple
                    </div>
                    <div className={stylesModule.cite}  >
                        <cite >Grady Booch</cite>
                    </div>
            </div>
    );
}
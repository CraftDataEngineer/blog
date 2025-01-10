import React from "react";
import stylesModule from './styles.module.css';
import classnames from "classnames";


export default function CatalogueCitation() {


    return (
            <div className={classnames("container" ,stylesModule.container)} >
                <div className={stylesModule.explain}>
                    La compréhension est la clé pour surmonter les défis et les incertitudes.
                </div>
                <div className={stylesModule.citation}>
Rien dans la vie n’est à craindre, tout doit être compris. C’est maintenant le moment de comprendre davantage, afin de craindre moins.                </div>
                <div className={stylesModule.cite}  >
                    <cite >Marie Curie</cite>
                </div>
                    <div className={stylesModule.explain}>
                C’est en développant nos compétences et en adoptant les bonnes pratiques que nous transformons les défis technologiques en opportunités                     </div>
            </div>
    );
}
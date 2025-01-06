import React from "react";
import stylesModule from './styles.module.css';
import classnames from "classnames";


export default function CatalogueCitation() {


    return (
            <div className={classnames("container" ,stylesModule.container)} >
                <div className={stylesModule.explain}>
                    Pour vous distinguer, il ne suffit pas de savoir développer ...
                </div>
                <div className={stylesModule.citation}>
                    N'importe quel fou peut écrire du code qu'un ordinateur peut comprendre. Les bons programmeurs écrivent du code que les humains peuvent comprendre.
                </div>
                <div className={stylesModule.cite}  >
                    <cite >Martin Fowler</cite>
                </div>
                    <div className={stylesModule.explain}>
                        Qualité et  bonnes pratiques, voilà ce qui va vous différencier !
                    </div>
            </div>
    );
}
import styles from "./styles.module.css";
import React from "react";
import classnames from "classnames";

import Terraform from "../../../../../static/img/contenu/terraform.png";
import GitlabCI from "../../../../../static/img/contenu/gitlabci.png";
import DevOps from "../../../../../static/img/contenu/devops.png";
import ImgMediaCard from "../../../lib/cardWithImage";
import Devops from '@mui/icons-material/AllInclusive';


export default function CatalogueCards() {

    return (
        <div className={classnames(styles.backGroundContainer)}>
            <div className={classnames("container", styles.gridContainer)}>
                <div className={classnames("row", styles.rowContainer)}>
                    <div className={classnames("col", styles.colContainer)}>
                        <ImgMediaCard
                            title="Formation Terraform"
                            titleText="DevOps"
                            titleIcon={<Devops viewBox="0 -5 25 25"/>}
                            images={[{src: Terraform, large: true}]}
                            text="Apprendre l'utilisation de Terraform pour la conception et la mise en place d'une infrastructure pour le cloud computing."
                            cardUrl="/catalogue/content/terraform"
                        />
                    </div>
                    <div className={classnames("col", styles.colContainer)}>
                        <ImgMediaCard
                            title="Formation Gitlab CI ⚡ CD"
                            titleText="DevOps"
                            titleIcon={<Devops viewBox="0 -5 25 25"/>}
                            images={[{src: GitlabCI, large: false}]}
                            text="Savoir mettre en oeuvre l'intégration, le déploiement et la livraison continue"
                            cardUrl="/catalogue/content/gitlabci"
                            badge={"CPF"}
                        />
                    </div>
                    <div className={classnames("col", styles.colContainer)}>
                        <ImgMediaCard
                            title="Formation Kubernetes"
                            titleText="DevOps"
                            titleIcon={<Devops viewBox="0 -5 25 25"/>}
                            images={[{src: GitlabCI, large: false}]}
                            text="Savoir mettre en oeuvre l'intégration, le déploiement et la livraison continue"
                            cardUrl="/catalogue/content/gitlabci"
                            active={false}
                            badge={"toto"}
                            badgeColor={"blue"}
                        />
                    </div>
                    <div className={classnames("col", styles.colContainer)}>
                        <ImgMediaCard
                            title="Formation Devops Basics"
                            titleText="DevOps"
                            titleIcon={<Devops viewBox="0 -5 25 25"/>}
                            images={[{src: DevOps, large: true}]}
                            text="Connaître les concepts et les bénéfices de la démarche DevOps"
                            cardUrl="/catalogue/content/devops_basics"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}


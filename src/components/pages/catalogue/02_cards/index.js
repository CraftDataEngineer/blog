import styles from "./styles.module.css";
import React from "react";
import classnames from "classnames";

import Terraform from "../../../../../static/img/contenu/terraform.png";
import GitlabCI from "../../../../../static/img/contenu/gitlabci.png";
import DevOps from "../../../../../static/img/contenu/devops.png";
import Kubernetes from "../../../../../static/img/contenu/kubernetes.png";
import Spark from "../../../../../static/img/contenu/spark.png";
import CleanCode from "../../../../../static/img/contenu/clean_code.png";
import ImgMediaCard from "../../../lib/cardWithImage";
import Cloud from '@mui/icons-material/FilterDrama';
import BigData from '@mui/icons-material/Storage';
import Devops from '@mui/icons-material/AllInclusive';
import Code from '@mui/icons-material/Code';

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
                            images={[{src: Terraform, large: true,width:"90px"}]}
                            text="Apprendre l'utilisation de Terraform pour la conception et la mise en place d'une infrastructure pour le cloud computing."
                            cardUrl="/catalogue/content/terraform"
                        />
                    </div>
                    <div className={classnames("col", styles.colContainer)}>
                        <ImgMediaCard
                            title="Formation Gitlab CI ⚡ CD"
                            titleText="DEVOPS"
                            titleIcon={<Devops viewBox="0 -5 25 25"/>}
                            images={[{src: GitlabCI, large: false}]}
                            text="Savoir mettre en oeuvre l'intégration, le déploiement et la livraison continue"
                            cardUrl="/catalogue/content/gitlabci"
                        />
                    </div>
                    <div className={classnames("col", styles.colContainer)}>
                        <ImgMediaCard
                            title="Formation Devops Basics"
                            titleText="DEVOPS"
                            titleIcon={<Devops viewBox="0 -5 25 25"/>}
                            images={[{src: DevOps, large: true,height:"35px",width:"70px"}]}
                            text="Connaître les concepts et les bénéfices de la démarche DevOps"
                            cardUrl="/catalogue/content/devops_basics"
                            badge={"Meilleure vente"}
                            badgeColor={"#77cc11"}
                        />
                    </div>
                </div>
                <div className={classnames("row", styles.rowContainer)}>
                    <div className={classnames("col", styles.colContainer)}>
                        <ImgMediaCard
                            title="Développer avec Apache Spark"
                            titleText="BIGDATA"
                            titleIcon={<BigData viewBox="0 -5 25 25"/>}
                            images={[{src: Spark, large: true,height:"30px",width:"auto"}]}
                            text="Implémenter, configurer et déployer des applications Apache Spark."
                            active={false}
                        />
                    </div>
                    <div className={classnames("col", styles.colContainer)}>
                        <ImgMediaCard
                            title="Formation complète Kubernetes"
                            titleText="DEVOPS"
                            titleIcon={<Devops viewBox="0 -5 25 25"/>}
                            images={[{src: Kubernetes, large: true,height:"20px",width:"70px"}]}
                            text="Automatisez le déploiement d’applications conteneurisées grâce à notre formation Kubernetes."
                            active={false}
                        />
                    </div>
                    <div className={classnames("col", styles.colContainer)}>
                        <ImgMediaCard
                            title="Clean Code"
                            titleText="CODE"
                            titleIcon={<Code viewBox="0 -5 25 25"/>}
                            images={[{src: CleanCode, large: false ,height:"30px",width:"30px"}]}
                            text="Définir le lien entre la qualité du code et la facilité d'évolution des applications"
                            active={false}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}


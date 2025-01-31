import styles from "./styles.module.css";
import React from "react";
import classnames from "classnames";

import Terraform from "../../../../../static/img/contenu/terraform.png";
import GitlabCI from "../../../../../static/img/contenu/gitlabci.png";
import DevOps from "../../../../../static/img/contenu/devops.png";
import Kubernetes from "../../../../../static/img/contenu/kubernetes.png";
import Spark from "../../../../../static/img/contenu/spark.png";
import Python from "../../../../../static/img/contenu/python.png";
import CleanCode from "../../../../../static/img/contenu/clean_code.png";
import ImgMediaCard from "../../../lib/cardWithImage";
import Cloud from '@mui/icons-material/FilterDrama';
import BigData from '@mui/icons-material/Storage';
import Devops from '@mui/icons-material/AllInclusive';
import Code from '@mui/icons-material/Code';
import FilterDramaIcon from '@mui/icons-material/FilterDrama';


export default function CatalogueCards() {

    return (
        <div className={classnames(styles.backGroundContainer)}>
            <div className={classnames("container", styles.gridContainer)}>
                <div className={classnames("row", styles.rowContainer)}>
                    <div className={classnames("col", styles.colContainer)}>
                        <ImgMediaCard
                            title="Terraform"
                            titleText="DEVOPS"
                            titleIcon={<Devops viewBox="0 -5 25 25"/>}
                            images={[]}
                            text="Apprendre l'utilisation de Terraform pour la conception et la mise en place d'une infrastructure pour le cloud computing."
                            cardUrl="/catalogue/content/terraform"
                            tagColor={"black"}
                            tag={"Meilleure vente"}
                            badge={null}
                        />
                    </div>
                    <div className={classnames("col", styles.colContainer)}>
                        <ImgMediaCard
                            title="Gitlab CI ⚡ CD"
                            titleText="DEVOPS"
                            titleIcon={<Devops viewBox="0 -5 25 25"/>}
                            images={[{src: GitlabCI, large: false}]}
                            text="Savoir mettre en œuvre l'intégration, le déploiement et la livraison continue."
                            cardUrl="/catalogue/content/gitlabci"
                            badge={null}

                        />
                    </div>
                    <div className={classnames("col", styles.colContainer)}>
                        <ImgMediaCard
                            title="Devops Piliers et Mise en œuvre"
                            titleText="DEVOPS"
                            titleIcon={<Devops viewBox="0 -5 25 25"/>}
                            images={[{src: DevOps, large: true, height: "35px", width: "70px"}]}
                            text="Connaître les concepts et les bénéfices de la démarche DevOps."
                            cardUrl="/catalogue/content/devops"
                            badge={null}
                        />
                    </div>
                </div>
                <div className={classnames("row", styles.rowContainer)}>
                    <div className={classnames("col", styles.colContainer)}>
                        <ImgMediaCard
                            title="Les Bases du Data Engineering"
                            titleText="BIGDATA"
                            titleIcon={<BigData viewBox="0 -5 25 25"/>}
                            images={[{src: Python, large: true,height:"30px",width:"auto"}]}
                            text="Apprendre à manipuler de la donnée avec du code python et SQL."
                            cardUrl="/catalogue/content/dataengineer_basics"
                            active={true}
                        />
                    </div>
                    <div className={classnames("col", styles.colContainer)}>
                        <ImgMediaCard
                            title="Kubernetes "
                            titleText="DEVOPS"
                            titleIcon={<Devops viewBox="0 -5 25 25"/>}
                            images={[{src: Kubernetes, large: true, height: "20px", width: "80px"}]}
                            text="Automatiser le déploiement d’applications conteneurisées grâce à notre formation Kubernetes."
                            cardUrl="/catalogue/content/kubernetes"
                            tag={"Meilleure vente"}
                            tagColor={"black"}
                            active={true}
                        />
                    </div>
                    <div className={classnames("col", styles.colContainer)}>
                        <ImgMediaCard
                            title="Cloud Native et Microservices"
                            titleText="CLOUD"
                            titleIcon={<FilterDramaIcon viewBox="0 -5 25 25"/>}
                            images={[{src: CleanCode, large: false, height: "30px", width: "30px"}]}
                            text="Comprendre les concepts clés de l’architecture microservices et des applications cloud natives."
                            active={true}
                            cardUrl="/catalogue/content/cloud_natives_microservices"
                        />
                    </div>
                </div>
                <div className={classnames("row", styles.rowContainer)}>
                    <div className={classnames("col", styles.colContainer)}>
                        <ImgMediaCard
                            title="Architecture Distribuée et Big Data"
                            titleText="BIGDATA"
                            titleIcon={<BigData viewBox="0 -5 25 25"/>}
                            images={[{src: Spark, large: true, height: "30px", width: "auto"}]}
                            text="Apprendre les concepts du stockage Big Data, ainsi que les principes des systèmes distribués."
                            active={true}
                            cardUrl="/catalogue/content/architecture_distribuee"
                        />
                    </div>
                    <div className={classnames("col", styles.colContainer)}>
                     <ImgMediaCard
                                                title="Créer une API en Python"
                                                titleText="CODE"
                                                titleIcon={<Code viewBox="0 -5 25 25"/>}
                                                images={[{src: Code, large: true, height: "30px", width: "auto"}]}
                                                text="Développer efficacement des apis et des microservices en utilisant Python."
                                                active={true}
                                                cardUrl="/catalogue/content/api_python"
                                            />
                    </div>
                    <div className={classnames("col", styles.colContainer)}>
                     <ImgMediaCard
                                                title="Stockage NoSql et Relationnelle"
                                                titleText="BIGDATA"
                                                titleIcon={<BigData viewBox="0 -5 25 25"/>}
                                                images={[{src: Spark, large: true, height: "30px", width: "auto"}]}
                                                text="Acquérir une compréhension des avantages et des inconvénients des bases de données relationnelles et NoSQL."
                                                active={true}
                                                cardUrl="/catalogue/content/nosql"
                                            />
                    </div>
                </div>
            </div>
        </div>
    );
}


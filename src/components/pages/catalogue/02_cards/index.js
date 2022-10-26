import styles from "./styles.module.css";
import React from "react";
import classnames from "classnames";


import Kafka from "../../../../../static/img/contenu/kafka.png";
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
                            title="Ingesting data from Apache Kafka"
                            titleText="DevOps"
                            titleIcon={<Devops viewBox="0 -5 25 25"/>}
                            images={[{src: Kafka, large: true}]}
                            text="Développer du code Python de qualité et travailler en équipe avec du Git !"
                            cardUrl="/catalogue/content/example"
                        />
                    </div>
                    <div className={classnames("col", styles.colContainer)}>
                        <ImgMediaCard
                            title="Ingesting data from Apache Kafka"
                            titleText="Cloud"
                            titleIcon={<Cloud viewBox="0 -5 25 25"/>}
                            images={[{src: Kafka, large: true}]}
                            text="Développer du code Python de qualité et travailler en équipe avec du Git !"
                        />
                    </div>
                    <div className={classnames("col", styles.colContainer)}>
                        <ImgMediaCard
                            title="Ingesting data from Apache Kafka"
                            titleText="Code"
                            titleIcon={<Code viewBox="0 -5 25 25"/>}
                            images={[{src: Kafka, large: true}]}
                            text="Développer du code Python de qualité et travailler en équipe avec du Git !"
                        />
                    </div>
                </div>
                <div className={classnames("row", styles.rowContainer)}>
                    <div className={classnames("col", styles.colContainer)}>
                        <ImgMediaCard
                            title="Ingesting data from Apache Kafka"
                            titleText="BigData"
                            titleIcon={<BigData viewBox="0 -5 25 25"/>}
                            images={[{src: Kafka, large: true}]}
                            text="Développer du code Python de qualité et travailler en équipe avec du Git !"
                        />
                    </div>
                    <div className={classnames("col", styles.colContainer)}>
                        <ImgMediaCard
                            title="Ingesting data from Apache Kafka"
                            titleText="BigData"
                            titleIcon={<BigData viewBox="0 -5 25 25"/>}
                            images={[{src: Kafka, large: true}]}
                            text="Développer du code Python de qualité et travailler en équipe avec du Git !"
                        />
                    </div>
                    <div className={classnames("col", styles.colContainer)}>
                    </div>
                </div>
            </div>
        </div>
    );
}


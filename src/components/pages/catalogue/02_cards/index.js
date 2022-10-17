import styles from "./styles.module.css";
import React from "react";
import classnames from "classnames";


import Kafka from "../../../../../static/img/contenu/kafka.png";
import ImgMediaCard from "../../../lib/cardWithImage";


export default function CatalogueCards() {

    return (
        <div className={classnames(styles.backGroundContainer)}>
            <div className={classnames("container", styles.gridContainer)}>
                <div className={classnames("row", styles.rowContainer)}>
                    <div className={classnames("col", styles.colContainer)}>
                        <ImgMediaCard imgSrc={Kafka}
                                      title="Ingesting data from Apache Kafka"
                                      text="A short tutorial describing how to set up Quickwit to ingest data from Kafka in a few minutes"
                                      imageHeight={40}/>
                    </div>
                    <div className={classnames("col", styles.colContainer)}>
                        <ImgMediaCard imgSrc={Kafka}
                                      title="Ingesting data from Apache Kafka"
                                      text="A short tutorial describing how to set up Quickwit to ingest data from Kafka in a few minutes"
                                      imageHeight={40}/>
                    </div>

                    <div className={classnames("col", styles.colContainer)}>
                        <ImgMediaCard imgSrc={Kafka}
                                      title="Ingesting data from Apache Kafka"
                                      text="A short tutorial describing how to set up Quickwit to ingest data from Kafka in a few minutes"
                                      imageHeight={40}/>
                    </div>
                </div>
                <div className={classnames("row", styles.rowContainer)}>
                    <div className={classnames("col", styles.colContainer)}>
                        <ImgMediaCard imgSrc={Kafka}
                                      title="Ingesting data from Apache Kafka"
                                      text="A short tutorial describing how to set up Quickwit to ingest data from Kafka in a few minutes"
                                      imageHeight={40}/>
                    </div>
                    <div className={classnames("col", styles.colContainer)}>
                        <ImgMediaCard imgSrc={Kafka}
                                      title="Ingesting data from Apache Kafka"
                                      text="A short tutorial describing how to set up Quickwit to ingest data from Kafka in a few minutes"
                                      imageHeight={40}/>
                    </div>

                    <div className={classnames("col", styles.colContainer)}>
                        <ImgMediaCard imgSrc={Kafka}
                                      title="Ingesting data from Apache Kafka"
                                      text="A short tutorial describing how to set up Quickwit to ingest data from Kafka in a few minutes"
                                      imageHeight={40}/>
                    </div>
                </div>
            </div>
        </div>
    );
}


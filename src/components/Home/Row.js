import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import { HOME_CARD_IMG } from "../../constant/properties";
import "./Home.css";
import { useTranslation } from "react-i18next";

function CategoryType({ category, type }) {
  const [t] = useTranslation("common");
  const { tagline, image } = category;
  return (
    <>
      <Card className="card">
        <CardActionArea>
          <CardMedia
            component="img"
            alt={tagline}
            image={image}
            title={t(`header.categorytype.${type}.${tagline}`)}
          />
          <div className="row__category__tag">
            <span className="row__category__tag__span">
              {t(`header.categorytype.${type}.${tagline}`)}
            </span>
          </div>
        </CardActionArea>
      </Card>
    </>
  );
}

function Row({ type }) {
  const [t] = useTranslation("common");

  return (
    <>
      <h1 className="row__type">{t(`header.categorytype.${type}.title`)}</h1>
      <div className="row">
        {HOME_CARD_IMG[0][type].map((category) => (
          <CategoryType category={category} type={type} />
        ))}
      </div>
    </>
  );
}

export default Row;

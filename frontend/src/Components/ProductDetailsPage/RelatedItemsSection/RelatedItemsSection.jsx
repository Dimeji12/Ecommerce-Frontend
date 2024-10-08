import { useTranslation } from "react-i18next";
import { productsData } from "src/Data/productsData";
import ProductsSlider from "../../Shared/MidComponents/ProductsSlider/ProductsSlider";
import SectionTitle from "../../Shared/MiniComponents/SectionTitle/SectionTitle";
import s from "./RelatedItemsSection.module.scss";
import {useEffect, useState} from "react";
import api from "js-cookie";
import {apiUrl} from "../../../Data/BaseApi.js";

const RelatedItemsSection = ({ products, productType, currentProduct }) => {
  const hasRelatedProducts = getProductsByRelatedType().length > 0;
  const { t } = useTranslation();

  function getProductsByRelatedType() {
    return products.filter((product) => {
      const isSameType = product.category === productType;
      const isCurrentProduct = product === currentProduct;
      return isSameType && !isCurrentProduct;
    });
  }

  return (
    <section className={s.section}>
      <SectionTitle type={2} eventName={t("detailsPage.relatedItems")} />

      {!hasRelatedProducts && <p>No related items were found.</p>}

      <ProductsSlider filterFun={getProductsByRelatedType} />
    </section>
  );
};
export default RelatedItemsSection;

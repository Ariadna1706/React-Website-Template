import React from "react";
import { createRoot } from "react-dom/client";
import Header from "./components/Header";
import SliderPlaceHolder from "./components/MainContent/SliderPalceHolder";
import OfferContainer from "./components/MainContent/OfferContainer";
import TextandImgSectionLeft from "./components/MainContent/TextImgSectionLeft";
import TextandImgSectionRight from "./components/MainContent/TextImgSectionRight";
import Footer from "./components/Footer";

const root = createRoot(document.querySelector("#root"));

root.render(
  <>
    <Header />
    <SliderPlaceHolder />
    <OfferContainer />
    <TextandImgSectionLeft />
    <TextandImgSectionRight />
    <Footer />
  </>
);

import modelY from "../../assets/home/image/Desktop-ModelY.webp";
import model3 from "../../assets/home/image/M3-Homepage.webp";
import modelS from "../../assets/home/image/Homepage-Model-S.webp";
import modelX from "../../assets/home/image/Homepage-Model-X.webp";
import panel from "../../assets/home/image/HP-SolarPanels.webp";
import roof from "../../assets/home/image/Homepage-SolarRoof.webp";
import accessory from "../../assets/home/image/Accessories.webp";

const products = [
  {
    id: 1,
    coverImg: `${modelY}`,
    title: "model y",
    text: "Schedule a Demo Drive",
    order: "custom order",
    view: "view inventory",
    textVisible: "hidden",
    linkVisible: "",
    buttonVisible: "",
  },

  {
    id: 2,
    coverImg: `${model3}`,
    title: "model 3",
    text: "Schedule a Demo Drive",
    order: "custom order",
    view: "view inventory",
    textVisible: "hidden",
    linkVisible: "",
    buttonVisible: "",
  },

  {
    id: 3,
    coverImg: `${modelS}`,
    title: "model s",
    text: "Schedule a Demo Drive",
    order: "custom order",
    view: "view inventory",
    textVisible: "hidden",
    linkVisible: "",
    buttonVisible: "",
  },

  {
    id: 4,
    coverImg: `${modelX}`,
    title: "model X",
    text: "Schedule a Demo Drive",
    order: "custom order",
    view: "view inventory",
    textVisible: "hidden",
    linkVisible: "",
    buttonVisible: "",
  },

  {
    id: 5,
    coverImg: `${panel}`,
    title: "solar panel",
    text: "Lowest Cost Solar Panel in America",
    order: "order now",
    view: "learn more",
    textVisible: "",
    linkVisible: "hidden",
    buttonVisible: "",
  },

  {
    id: 6,
    coverImg: `${roof}`,
    title: "model y",
    text: "Produce Clean Energy From your Roof",
    order: "custom order",
    view: "view inventory",
    textVisible: "",
    linkVisible: "hidden",
    buttonVisible: "",
  },

  {
    id: 7,
    coverImg: `${accessory}`,
    title: "accessories",
    text: "",
    order: "shop now",
    view: "",
    textVisible: "",
    linkVisible: "",
    buttonVisible: "hidden",
  },
];
export default products;

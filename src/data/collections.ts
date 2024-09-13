import Compartimientos from "../assets/Azul_Prusia/Compartimientos.jpg";
import ArreandoElGanado2023 from "../assets/Campo_Uruguayo/Arreando_el_ganado_2023.jpg";
import Armonia from "../assets/Oleo_Pasteles/Armonia_y_sencillez_2016.jpg";
import ComposicionConCopa2018 from "../assets/Colorful_Expressions/composicion_con_copa_2018.jpg";
import Identidad from "../assets/Colecciones_Privadas/buscando_su_identidad_uruguay.jpg";
import { type CollectionThumbnail } from "../../types/index";

const collections: CollectionThumbnail[] = [
  {
    name: "Prussian blue",
    url: "/collections/prussian_blue",
    thumbnail: Compartimientos,
  },
  {
    name: "Uruguayan countryside",
    url: "/collections/uruguayan_countryside",
    thumbnail: ArreandoElGanado2023,
  },
  {
    name: "Oil Pastel",
    url: "/collections/oil_pastel",
    thumbnail: Armonia,
  },

  {
    name: "Private collection",
    url: "/collections/private_collection",
    thumbnail: Identidad,
  },
  {
    name: "Colorful Expressions",
    url: "/collections/colorful_expressions",
    thumbnail: ComposicionConCopa2018,
  },

  // {
  //   name: "Geometricos",
  //   url: "/collections/geometricos",
  //   thumbnail: Geometricos,
  // },
];

export default collections;

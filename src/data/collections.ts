import Compartimientos from "../assets/Azul_Prusia/Compartimientos.jpg";
import ArreandoElGanado2023 from "../assets/Campo_Uruguayo/Arreando_el_ganado_2023.jpg";
import Armonia from "../assets/Oleo_Pasteles/Armonia_y_sencillez_2016.jpg";
import Geometricos from "../assets/Geometricos/Collage_6_2021.jpg";
import { type CollectionThumbnail } from "../../types/index";

const collections: CollectionThumbnail[] = [
  {
    name: "Azul Prusia",
    url: "/collections/azul_prusia",
    thumbnail: Compartimientos,
  },
  {
    name: "Campo Uruguayo",
    url: "/collections/campo_uruguayo",
    thumbnail: ArreandoElGanado2023,
  },
  {
    name: "Oleo Pastel",
    url: "/collections/oleo_pastel",
    thumbnail: Armonia,
  },
  {
    name: "Geometricos",
    url: "/collections/geometricos",
    thumbnail: Geometricos,
  },
];

export default collections;

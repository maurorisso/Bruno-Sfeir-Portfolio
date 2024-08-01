import Compartimientos from "../assets/Azul_Prusia/Compartimientos.jpg";
import ArreandoElGanado2023 from "../assets/Campo_Uruguayo/Arreando_el_ganado_2023.jpg";
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
];

export default collections;

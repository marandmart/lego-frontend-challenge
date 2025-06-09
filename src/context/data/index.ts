import giftingOne from "../../assets/images/gifting/1.png";
import giftingTwo from "../../assets/images/gifting/2.png";
import travelOne from "../../assets/images/travel/1.png";
import travelTwo from "../../assets/images/travel/2.png";
import adultsOne from "../../assets/images/adults_welcome/1.png";
import artHomeOne from "../../assets/images/art_home/1.png";
import spaceOne from "../../assets/images/space/1.png";
import popCultureOne from "../../assets/images/pop_culture/1.png";
import toddlersOne from "../../assets/images/toddlers/1.png";
import toddlersTwo from "../../assets/images/toddlers/2.png";
import realWorldOne from "../../assets/images/real_world/1.png";
import realWorldTwo from "../../assets/images/real_world/2.png";

interface IArticle {
  id: string;
  titleText: string;
  titleBody: string;
  articleLink: string;
  imgSrc: string;
  imgAltText: string;
}

export interface ISectionContent {
  gifting: IArticle[];
  travel: IArticle[];
  adults_welcome: IArticle[];
  art_home: IArticle[];
  space: IArticle[];
  pop_culture: IArticle[];
  toddlers: IArticle[];
  real_world_role_playing: IArticle[];
}

const sectionContent: ISectionContent = {
  gifting: [
    {
      id: "shdaljfhaklfdjksfjk",
      titleText: "Toys perfect for birthday gift-giving season in Spring",
      titleBody:
        "Spring into birthday celebrations with our vibrant collection of Lego sets, designed to inspire creativity and make every gift unforgettable this season.",
      articleLink: "#",
      imgSrc: giftingOne,
      imgAltText:
        "Image of a woman and a little boy both looking at phone held by the woman",
    },
    {
      id: "fanklsnuwbnruvf",
      titleText: "Gifts for Mom",
      titleBody:
        "Show Mom how much she means to you with a thoughtful Lego set that offers a relaxing build and a beautiful display piece she'll cherish.",
      articleLink: "#",
      imgSrc: giftingTwo,
      imgAltText: "Image of a woman holding tools and behind a lego spaceship",
    },
  ],
  travel: [
    {
      id: "iofgdshadfshj",
      titleText:
        "Travel the world no matter where you are. No Passport needed.",
      titleBody:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque nulla vitae mi scelerisque vulputate. Aenean ultrices leo eget lacus maximus, vitae feugiat.",
      articleLink: "#",
      imgSrc: travelOne,
      imgAltText: "Imagem do coliseu feito de lego em cima de uma mesa",
    },
    {
      id: "fisuadfbijasijfg",
      titleText:
        "Fun accessories to take with you on your travels or keep kids entertained",
      titleBody:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque nulla vitae mi scelerisque vulputate. Aenean ultrices leo eget lacus maximus, vitae feugiat.",
      articleLink: "#",
      imgSrc: travelTwo,
      imgAltText:
        "Imagem de um menino branco loiro sorrindo segurando um brinquedo lego do Mandalorian",
    },
  ],
  adults_welcome: [
    {
      id: "bfjsadafbhosdfadsij",
      titleText: "For the Kids at Heart who love to unplug, unbox and unwind",
      titleBody:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque nulla vitae mi scelerisque vulputate. Aenean ultrices leo eget lacus maximus, vitae feugiat.",
      articleLink: "#",
      imgSrc: adultsOne,
      imgAltText: "Uma mulher brincando com um brinquedo lego do sonic",
    },
  ],
  art_home: [
    {
      id: "fbjisdfbjisafaijs",
      titleText:
        "Playful ideas for refreshing your space while tapping into your more creative side",
      titleBody:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque nulla vitae mi scelerisque vulputate. Aenean ultrices leo eget lacus maximus, vitae feugiat.",
      articleLink: "#",
      imgSrc: artHomeOne,
      imgAltText: "Um buque de flores com as petalas feitas de lego",
    },
  ],
  space: [
    {
      id: "fjhkbdsfhjsdghjksdfg",
      titleText: "Capture the wonders of space and exploration",
      titleBody:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque nulla vitae mi scelerisque vulputate. Aenean ultrices leo eget lacus maximus, vitae feugiat.",
      articleLink: "#",
      imgSrc: spaceOne,
      imgAltText:
        "Brinquedo de uma nave espacial feita de lego com uma cadeira no fundo",
    },
  ],
  pop_culture: [
    {
      id: "fkjdlsgjsbjgoihuweg",
      titleText: "Recreate scenes from your favorite movies and TV series",
      titleBody:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque nulla vitae mi scelerisque vulputate. Aenean ultrices leo eget lacus maximus, vitae feugiat.",
      articleLink: "#",
      imgSrc: popCultureOne,
      imgAltText:
        "Imagem de uma mulher segurando dois modelos de casas feitas com lego",
    },
  ],
  toddlers: [
    {
      id: "dfgskjafsklbagb",
      titleText: "Waterproof toys for toddlers and beyond",
      titleBody:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque nulla vitae mi scelerisque vulputate. Aenean ultrices leo eget lacus maximus, vitae feugiat.",
      articleLink: "#",
      imgSrc: toddlersOne,
      imgAltText: "Um pai brincando com seu filho no banho.",
    },
    {
      id: "fdjdafgjbabokqffboj",
      titleText: "xx TBD",
      titleBody:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque nulla vitae mi scelerisque vulputate. Aenean ultrices leo eget lacus maximus, vitae feugiat.",
      articleLink: "#",
      imgSrc: toddlersTwo,
      imgAltText: "Duas crianças lendo uma revista lego.",
    },
  ],
  real_world_role_playing: [
    {
      id: "afgbegoqgefioqbioqfe",
      titleText: "Celebrating the everyday heroes",
      titleBody:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque nulla vitae mi scelerisque vulputate. Aenean ultrices leo eget lacus maximus, vitae feugiat.",
      articleLink: "#",
      imgSrc: realWorldOne,
      imgAltText: "Um menino brincando com legos no chão",
    },
    {
      id: "geboboqqegbougeqbuobgqeou",
      titleText: "xxxxx TBD",
      titleBody:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque nulla vitae mi scelerisque vulputate. Aenean ultrices leo eget lacus maximus, vitae feugiat.",
      articleLink: "#",
      imgSrc: realWorldTwo,
      imgAltText:
        "Várias figuras de brinquedos lego numa cena olhando para frente.",
    },
  ],
};

export interface ISectionArticles {
  sectionId: string;
  borderColor: string;
  sectionTitle: string;
  sectionHeaderText: string;
  content: IArticle[];
  index: number;
}

export const sectionArticles = [
  {
    sectionId: "gifting",
    sectionTitle: "GIFTING",
    sectionHeaderText:
      "Discover the perfect Lego set to spark joy and creativity for builders of all ages, making every occasion a memorable one.",
    borderColor: "orange",
    content: sectionContent["gifting"],
  },
  {
    sectionId: "travel",
    sectionTitle: "TRAVEL",
    sectionHeaderText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    borderColor: "green",
    content: sectionContent["travel"],
  },
  {
    sectionId: "adults_welcome",
    sectionTitle: "ADULTS WELCOME",
    sectionHeaderText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    borderColor: "blue",
    content: sectionContent["adults_welcome"],
  },
  {
    sectionId: "art_home",
    sectionTitle: "ART & HOME DÉCOR",
    sectionHeaderText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    borderColor: "grey",
    content: sectionContent["art_home"],
  },
  {
    sectionId: "space",
    sectionTitle: "SPACE",
    sectionHeaderText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    borderColor: "black",
    content: sectionContent["space"],
  },
  {
    sectionId: "pop_culture",
    sectionTitle: "POP CULTURE",
    sectionHeaderText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    borderColor: "pink",
    content: sectionContent["pop_culture"],
  },
  {
    sectionId: "toddlers",
    sectionTitle: "TODDLERS",
    sectionHeaderText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    borderColor: "yellow",
    content: sectionContent["toddlers"],
  },
  {
    sectionId: "real_world_role_playing",
    sectionTitle: "REAL WORLD ROLE PLAYING",
    sectionHeaderText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    borderColor: "red",
    content: sectionContent["real_world_role_playing"],
  },
];

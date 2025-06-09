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
        "Imagine standing amidst ancient wonders or towering cityscapes, all from your living room. Our LEGO Architecture series brings the world's most iconic landmarks, like the majestic Coliseum, right to your fingertips, no plane ticket required.",
      articleLink: "#",
      imgSrc: travelOne,
      imgAltText: "Imagem do coliseu feito de lego em cima de uma mesa",
    },
    {
      id: "fisuadfbijasijfg",
      titleText:
        "Fun accessories to take with you on your travels or keep kids entertained",
      titleBody:
        "Keep boredom at bay on long journeys with our awesome range of LEGO accessories. From Boba Fett keychains to mini-builds that fit in your pocket, these fun companions are perfect for keeping little hands (and big ones!) busy, no matter where your adventures take you.",
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
        "Unleash your inner child and find a relaxing escape from the digital world with intricate LEGO sets designed for adult builders. Immerse yourself in the satisfying click of the bricks as you bring beloved characters like Sonic the Hedgehog to life.",
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
        "Infuse your home with a touch of whimsical charm by building unique LEGO décor pieces, like a beautiful botanical bouquet that will never wilt. Embrace the mindful process of creation and showcase your personality with these delightful, buildable accents.",
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
        "Embark on an astronomical journey from the comfort of your home with LEGO sets inspired by real-world space missions, like the iconic Apollo program. Recreate historic moments and explore the vastness of the cosmos, brick by fascinating brick.",
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
        "Step into the worlds you love and bring iconic moments to life with LEGO sets inspired by beloved pop culture phenomena. From the familiar comforts of Central Perk to thrilling scenes from your favorite blockbusters, you can build and relive cinematic magic.",
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
        "Spark joyful moments and imaginative play with LEGO DUPLO, perfect for little hands exploring new environments. These versatile bricks encourage connection and creativity, making playtime special no matter where the fun unfolds.",
      articleLink: "#",
      imgSrc: toddlersOne,
      imgAltText: "Um pai brincando com seu filho no banho.",
    },
    {
      id: "fdjdafgjbabokqffboj",
      titleText: "Inspire young minds and foster early learning",
      titleBody:
        "Encourage a love for stories and imaginative worlds with LEGO Magazine, perfect for shared moments of discovery and growth. Watching your little ones engage with vibrant characters and explore new ideas together nurtures their budding creativity and sets the stage for a lifetime of learning.",
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
        "Inspire dreams of making a difference with LEGO City sets that celebrate a diverse range of real-world professions and community helpers. From brave firefighters to dedicated doctors, children can explore exciting careers and imagine themselves as the heroes of their own stories.",
      articleLink: "#",
      imgSrc: realWorldOne,
      imgAltText: "Um menino brincando com legos no chão",
    },
    {
      id: "geboboqqegbougeqbuobgqeou",
      titleText: "Build a diverse world of characters and careers",
      titleBody:
        "Populate your LEGO city with an array of diverse minifigures, each representing vital professions that keep our communities thriving. From the caring doctor to the busy construction worker and the steadfast police chief, these figures encourage inclusive storytelling and endless imaginative scenarios.",
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
      "Journey through the world's wonders with LEGO sets designed for the ultimate explorer.",
    borderColor: "green",
    content: sectionContent["travel"],
  },
  {
    sectionId: "adults_welcome",
    sectionTitle: "ADULTS WELCOME",
    sectionHeaderText:
      "Rediscover the joy of building with LEGO sets designed for the grown-up in you.",
    borderColor: "blue",
    content: sectionContent["adults_welcome"],
  },
  {
    sectionId: "art_home",
    sectionTitle: "ART & HOME DÉCOR",
    sectionHeaderText:
      "Unleash your inner artist and transform your space with stunning LEGO creations designed to be displayed.",
    borderColor: "grey",
    content: sectionContent["art_home"],
  },
  {
    sectionId: "space",
    sectionTitle: "SPACE",
    sectionHeaderText:
      "Blast off into an intergalactic adventure with LEGO sets that take you to the stars and beyond.",
    borderColor: "black",
    content: sectionContent["space"],
  },
  {
    sectionId: "pop_culture",
    sectionTitle: "POP CULTURE",
    sectionHeaderText:
      "Dive into your favorite movies, TV shows, and games with LEGO sets that bring iconic characters and scenes to life.",
    borderColor: "pink",
    content: sectionContent["pop_culture"],
  },
  {
    sectionId: "toddlers",
    sectionTitle: "TODDLERS",
    sectionHeaderText:
      "Spark early creativity and learning with LEGO DUPLO sets, perfectly sized for little hands and big imaginations.",
    borderColor: "yellow",
    content: sectionContent["toddlers"],
  },
  {
    sectionId: "real_world_role_playing",
    sectionTitle: "REAL WORLD ROLE PLAYING",
    sectionHeaderText:
      "Inspire imaginative play and build essential life skills with LEGO sets that bring everyday adventures to life.",
    borderColor: "red",
    content: sectionContent["real_world_role_playing"],
  },
];

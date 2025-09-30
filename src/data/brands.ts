import brandDior from "@/../image/dior.png";
import brandChanel from "@/../image/chanel.png";
import brandMontale from "@/../image/Montale.png";
import brandVersace from "@/../image/versace.png";
import brandTomFord from "@/../image/tomford.png";

export const brands = [
  {
    name: "Dior",
    image: brandDior,
    perfumes: [
      { name: "Dior Sauvage", price: "" },
      { name: "Miss Dior", price: "" },
      { name: "J'adore", price: "" },
      { name: "Fahrenheit", price: "" },
      { name: "Dior Homme", price: "" },
      { name: "Poison", price: "" },
    ],
  },
  {
    name: "Chanel",
    image: brandChanel,
    perfumes: [
      { name: "Chanel №5", price: "" },
      { name: "Coco Mademoiselle", price: "" },
      { name: "Bleu de Chanel", price: "" },
      { name: "Chance", price: "" },
      { name: "Allure", price: "" },
      { name: "Gabrielle", price: "" },
    ],
  },
  {
    name: "Montale",
    image: brandMontale,
    perfumes: [
      { name: "Wood & Spices", price: "" },
      { name: "Black Aoud", price: "" },
      { name: "Intense Cafe", price: "" },
      { name: "Red Aoud", price: "" },
      { name: "Chocolate Greedy", price: "" },
      { name: "Vanilla Cake", price: "" },
    ],
  },
  {
    name: "Versace",
    image: brandVersace,
    perfumes: [
      { name: "Eros", price: "" },
      { name: "Bright Crystal", price: "" },
      { name: "Dylan Blue", price: "" },
      { name: "Pour Homme", price: "" },
      { name: "Crystal Noir", price: "" },
      { name: "Eros Flame", price: "" },
    ],
  },
  {
    name: "Tom Ford",
    image: brandTomFord,
    perfumes: [
      { name: "Black Orchid", price: "" },
      { name: "Oud Wood", price: "" },
      { name: "Tobacco Vanille", price: "" },
      { name: "Noir", price: "" },
      { name: "Lost Cherry", price: "" },
      { name: "Velvet Orchid", price: "" },
    ],
  },
];

export type Brand = typeof brands[number];

export const extraBrands: Brand[] = [
  { name: "Amouage", image: "/image/amouage.png", perfumes: [
    { name: "Interlude Man", price: "" },
    { name: "Reflection Man", price: "" },
    { name: "Memoir Woman", price: "" },
    { name: "Portrayal Woman", price: "" },
    { name: "Jubilation XXV", price: "" },
    { name: "Sunshine Man", price: "" },
  ]},
  { name: "Parfums de Marly", image: "/image/Parfums de Marly.png", perfumes: [
    { name: "Layton", price: "" },
    { name: "Herod", price: "" },
    { name: "Pegasus", price: "" },
    { name: "Carlisle", price: "" },
    { name: "Delina", price: "" },
    { name: "Percival", price: "" },
  ]},
  { name: "Creed", image: "/image/creed.png", perfumes: [
    { name: "Aventus", price: "" },
    { name: "Green Irish Tweed", price: "" },
    { name: "Silver Mountain Water", price: "" },
    { name: "Royal Oud", price: "" },
    { name: "Himalaya", price: "" },
    { name: "Viking", price: "" },
  ]},
  { name: "Ex Nihilo", image: "/image/ExNihilo.png", perfumes: [
    { name: "Fleur Narcotique", price: "" },
    { name: "Oud Vendome", price: "" },
    { name: "Citizen X", price: "" },
    { name: "Devil Tender", price: "" },
    { name: "Venenum Kiss", price: "" },
    { name: "Honoré Delights", price: "" },
  ]},
  { name: "Byredo", image: "/image/byredo.png", perfumes: [
    { name: "Gypsy Water", price: "" },
    { name: "Bal d'Afrique", price: "" },
    { name: "Mojave Ghost", price: "" },
    { name: "Rose of No Man's Land", price: "" },
    { name: "Black Saffron", price: "" },
    { name: "Pulp", price: "" },
  ]},
];



import { Game, Theme, Platform, Store, GameplayType, Pricing } from "./types";

export const gamesH: Game[] = [
  {
    title: "Hardware Tycoon",
    description:
      "Hardware Tycoon is a free simulation/management game where you run your own hardware company, influence the market, and compete with other companies - either only to stay afloat or revolutionize the industry.",
    year: 2021,
    themes: [Theme.Hardware],
    platforms: [Platform.PC],
    stores: [Store.Itchio],
    links: [
      {
        url: "https://haxor1337.itch.io/hardware-tycoon",
        name: Store.Itchio,
      },
    ],
    gameplayType: [GameplayType.Isometric],
    pricing: [Pricing.Free],
  },
  {
    title: "Hospital Tycoon",
    description:
      "Develop your own hospital drama and manipulate the results to your best advantage! In charge of a rapidly expanding hospital, your job is to cure the patients with your army of doctors and nurses while successfully managing the facilities and taking care of everyone's needs.",
    year: 2007,
    themes: [Theme.Hospital],
    platforms: [Platform.PC],
    stores: [Store.Steam],
    links: [
      {
        url: "https://store.steampowered.com/app/11590/Hospital_Tycoon/",
        name: Store.Steam,
      },
    ],
    gameplayType: [GameplayType.TopDown3D],
    pricing: [Pricing.LessThan10],
  },
  {
    title: "Hotel Magnate",
    description:
      "Have you ever wanted to design and manage your own hotel, rundown motel, or elegant resort? With a ridiculous amount of customization tools to wield, a host of facilities to build, and a wide variety of guests to impress, Hotel Magnate has it all. Let your inner hotel manager shine!",
    year: 2021,
    themes: [Theme.Hotel],
    platforms: [Platform.PC],
    stores: [Store.Steam],
    links: [
      {
        url: "https://store.steampowered.com/app/832360/Hotel_Magnate/",
        name: Store.Steam,
      },
    ],
    gameplayType: [GameplayType.TopDown3D],
    pricing: [Pricing.MoreThan10LessThan30],
  },
  {
    title: "Hundred Days - Winemaking Simulator",
    description:
      "Winemaking could be your best adventure. Make the best wine interacting with soil and nature and take your winery to the top. Your beautiful journey into the winemaking tradition starts now.",
    year: 2021,
    themes: [Theme.Winemaking],
    platforms: [Platform.PC],
    stores: [Store.Steam],
    links: [
      {
        url: "https://store.steampowered.com/app/1042380/Hundred_Days__Winemaking_Simulator/",
        name: Store.Steam,
      },
    ],
    gameplayType: [GameplayType.Isometric],
    pricing: [Pricing.MoreThan10LessThan30],
  },
];

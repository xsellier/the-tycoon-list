import { Game, Theme, Platform, Store, GameplayType, Pricing } from "./types";

export const gamesS: Game[] = [
  {
    title: "Startopia",
    description:
      "A once thriving network of space stations and planets have been left lifeless, redundant scars of the apocalypse. Into this age of darkness comes light. You will lead the way in rebuilding the network of space stations to a standard accepted by the individual alien races, attracting them to harness their expertise and research new...",
    year: 2001,
    themes: [Theme.Spaceship, Theme.Space],
    platforms: [Platform.PC],
    stores: [Store.Steam],
    links: [
      {
        url: "https://store.steampowered.com/app/243040/Startopia/",
        name: Store.Steam,
      },
    ],
    gameplayType: [GameplayType.TopDown3D],
    pricing: [Pricing.LessThan10],
  },
  {
    title: "Surviving Mars",
    description:
      "There will be challenges to overcome. Execute your strategy and improve your colony’s chances of survival while unlocking the mysteries of this alien world. Are you ready? Mars is waiting for you.",
    year: 2018,
    themes: [Theme.Space, Theme.CityBuilder, Theme.Colonization],
    platforms: [Platform.PC],
    stores: [Store.Steam],
    links: [
      {
        url: "https://store.steampowered.com/app/464920/Surviving_Mars/",
        name: Store.Steam,
      },
    ],
    gameplayType: [GameplayType.TopDown3D],
    pricing: [Pricing.LessThan10],
  },
  {
    title: "Software Inc.",
    description:
      "Construct and design buildings for optimal working conditions. Hire people to design and release software, so you can defeat the simulated competition and take over their businesses. Manage and educate your employees to make sure they are skilled and satisfied with their job.",
    year: 2015,
    themes: [Theme.Office, Theme.ProductDevelopment, Theme.Software],
    platforms: [Platform.PC],
    stores: [Store.Steam, Store.OwnWebsite],
    links: [
      {
        url: "https://store.steampowered.com/app/362620/Software_Inc/",
        name: Store.Steam,
      },
      {
        url: "https://swinc.net/#DRMFree",
        name: Store.OwnWebsite,
      },
    ],
    gameplayType: [GameplayType.TopDown3D],
    pricing: [Pricing.MoreThan10LessThan30],
    hasMultiplayer: true,
  },
  {
    title: "Startup Freak",
    description:
      "In Startup Freak you take the role of a budding entrepreneur, and grow your very own software startup from humble beginnings to a multi-million dollar company. Along the way you will have to overcome countless challenges. But the ultimate question you must answer: are you a Startup Freak?",
    year: 2019,
    themes: [Theme.Startup, Theme.ProductDevelopment, Theme.Software],
    platforms: [Platform.PC],
    stores: [Store.Steam],
    links: [
      {
        url: "https://store.steampowered.com/app/722660/Startup_Freak/",
        name: Store.Steam,
      },
    ],
    gameplayType: [GameplayType.BuildingBlocks],
    pricing: [Pricing.MoreThan10LessThan30],
  },
  {
    title: "Startup Company",
    description:
      "Startup Company is a business simulation sandbox game where you’re the CEO of a new company. Your job is to build your very own website and compete against the largest tech giants on the planet!",
    year: 2020,
    themes: [Theme.Startup, Theme.ProductDevelopment, Theme.Software],
    platforms: [Platform.PC],
    stores: [Store.Steam],
    links: [
      {
        url: "https://store.steampowered.com/app/606800/Startup_Company/",
        name: Store.Steam,
      },
    ],
    gameplayType: [GameplayType.Isometric],
    pricing: [Pricing.MoreThan10LessThan30],
  },
  {
    title: "SimCasino",
    description:
      "Modern Casino Tycoon Simulation in full 3D glory. Build the casino. Set the odds. Expand into a luxury hotel/casino or go cheap & extract max profits. Keep the vault secure at all times, and beware of criminals & cheaters!!",
    year: 2021,
    themes: [Theme.Casino],
    platforms: [Platform.PC],
    stores: [Store.Steam],
    links: [
      {
        url: "https://store.steampowered.com/app/1158420/SimCasino",
        name: Store.Steam,
      },
    ],
    gameplayType: [GameplayType.TopDown3D],
    pricing: [Pricing.MoreThan10LessThan30],
  },
  {
    title: "Showrunner",
    description:
      "Create and run your own TV show! An isometric management game where you craft scripts, populate your world with characters and cast actors to play them. Hire and manage staff, develop your studio and gain a dedicated following.",
    year: 2023,
    themes: [Theme.TV],
    platforms: [Platform.PC],
    stores: [Store.Steam],
    links: [
      {
        url: "https://store.steampowered.com/app/2058200/Showrunner/",
        name: Store.Steam,
      },
    ],
    gameplayType: [GameplayType.Isometric],
    pricing: [Pricing.LessThan10],
  },
  {
    title: "Snowtopia: Ski Resort Builder",
    description:
      "Build your ideal ski resort. Keep skiers smiling with fresh pistes and fine facilities. Ski, build and chill in the wintry world of Snowtopia where everyone is welcome!",
    year: 2022,
    themes: [Theme.SnowSki],
    platforms: [Platform.PC],
    stores: [Store.Steam],
    links: [
      {
        url: "https://store.steampowered.com/app/1124260/Snowtopia_Ski_Resort_Builder/",
        name: Store.Steam,
      },
    ],
    gameplayType: [GameplayType.TopDown3D],
    pricing: [Pricing.MoreThan10LessThan30],
  },
];

import logoShop from "../assets/img/logoShop.svg";
import playmarket from "../assets/img/icons/playMarketLogo.svg";
import appstore from "../assets/img/icons/AppleLogo.svg"

import acoustic from "../assets/img/categories/Acoustic.png";
import electric from "../assets/img/categories/Electric.png";
import basses from "../assets/img/categories/Basses.png";
import collection from "../assets/img/categories/Collections.png";

import fender from "../assets/img/brands/fender.svg";
import ibanez from "../assets/img/brands/ibanez.svg";
import gibson from "../assets/img/brands/gibson.svg";
import gretch from "../assets/img/brands/gretch.svg";
import martin from "../assets/img/brands/martinIco.svg";
import seagull from "../assets/img/brands/seagull.svg";
import tacamine from "../assets/img/brands/tacamine.svg";
import taylor from "../assets/img/brands/taylor.svg";

import sms from "../assets/img/icons/sms.svg";
import location from "../assets/img/icons/location.svg";
import facebook from "../assets/img/icons/Facebook.svg";
import instagram from "../assets/img/icons/Instagram.svg";
import twitter from "../assets/img/icons/Twitter.svg";


const data = {
  header: {
    navigation: {
      logoShop: {
        link: "/shop-online",
        logo: logoShop,
        alt: "logo"
      },
      nav: [
        {"id": 1, "link": "/shop-online/storecatalog", "item": "Store"},
        {"id": 2, "link": "#", "item": "Collections"},
        {"id": 3, "link": "#", "item": "Support"}
      ]
    },
    infoOnline: {
      h1: "Browse top quality\n",
      span: "Guitar",
      h1afterSpan: "online",
      p: "Explore 50k+ latest collections of branded guitars\n" +
        "online with Rhythm.",
      button: "Get the App",
      playmarket: {
        link: "#",
        icon: playmarket,
        alt: "playmarket"
      },
      applestore: {
        link: "#",
        icon: appstore,
        alt: "appstore"
      }
    }
  },

  main: {
    chekStore: {
      h2: "Check out the",
      span: "Store",
      onBoard: {
        h3: "NEW ON THE BOARD",
        link: {
          item: "view all",
          link: "#"
        },
        button: "More about guitar"
      },
      bestSale: {
        h3: "TOP SELLING",
        link: {
          item: "view all",
          link: "#"
        },
        button: "More about guitar"
      },
      modal: {
        button: "Buy Now!",
      }
    },

    categories: {
      h2: "Choose based on",
      span: "Categories",
      acoustic: {
        picture: acoustic,
        alt: "acoustic",
        text: "Acoustic",
        link: "#"
      },

      categoryCards: [
        {"id": 1, "picture": acoustic, "alt": "acoustic", "text": "Acoustic", "link": "#" },
        {"id": 2, "picture": electric, "alt": "electric", "text": "Electric", "link": "#" },
        {"id": 3, "picture": basses, "alt": "basses", "text": "Basses", "link": "#" },
        {"id": 4, "picture": collection, "alt": "collection", "text": "Collection", "link": "#" },
      ]
    },

    bestBrands: {
      h2: "Featuring the",
      span: " Best Brands",
      brands: [
        {"id": 1, "brandLogo": ibanez, "alt": "ibanez", "link": "#" },
        {"id": 2, "brandLogo": martin, "alt": "martin", "link": "#" },
        {"id": 3, "brandLogo": fender, "alt": "fender", "link": "#" },
        {"id": 4, "brandLogo": gibson, "alt": "gibson", "link": "#" },
        {"id": 5, "brandLogo": taylor, "alt": "taylor", "link": "#" },
        {"id": 6, "brandLogo": gretch, "alt": "gretch", "link": "#" },
        {"id": 7, "brandLogo": tacamine, "alt": "tacamine", "link": "#" },
        {"id": 8, "brandLogo": seagull, "alt": "seagull", "link": "#" },
        ]
    }
  },

  footer: {
    contacts: {
      logo: {
        link: "/shop-online",
        picture: logoShop,
        alt: "logo"
      },
      email: {
        icon: sms,
        alt: "sms",
        link: "#",
        mail: "Enquiry@Rhythm.com"
      },
      location: {
        icon: location,
        alt: "location",
        link: "#",
        city: "San Francisco"
      }
    },
    pages: {
      header: "PAGES",
      link1: {
        link: "#",
        item: "Store"
      },
      link2: {
        link: "#",
        item: "Collections"
      },
      link3: {
        link: "#",
        item: "Support"
      }
    },
    product: {
      header: "PRODUCT",
      link1: {
        link: "#",
        item: "Terms"
      },
      link2: {
        link: "#",
        item: "Privacy Policy"
      },
      link3: {
        link: "#",
        item: "Copyright"
      }
    },
    followUs: {
      header: "FOLLOW US",
      facebook: {
        link: "#",
        icon: facebook,
        alt: "facebook"
      },
      twitter: {
        link: "#",
        icon: twitter,
        alt: "twitter"
      },
      instagram: {
        link: "#",
        icon: instagram,
        alt: "instagram"
      }
    },
    copyright: "© 2022 Copyright.Rhythm"
  },
}

export default data;

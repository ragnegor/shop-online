import lesPaul from "../assets/img/products/productOnBoard/TheEssentialLesPaul.svg";
import J45 from "../assets/img/products/productOnBoard/J-45Standard.svg";
import Hummingbird from "../assets/img/products/productOnBoard/HummingbirdStandard.svg";
import ActivePrecisionBassPHV from "../assets/img/products/productBestSalle/ActivePrecision Bass®PHV.svg";
import RedondoSpecial from "../assets/img/products/productBestSalle/RedondoSpecial.svg";
import ProfessionalIIStratocaster from "../assets/img/products/productBestSalle/ProfessionalIIStratocaster®.svg";


const dataAllGuitars = {
  allGuitars: [
    {
      header: "onBoard",
      guitars: [
        {"id": 1, "title": "The Essential Les Paul", "price": 1299, "image": lesPaul, "alt": "lesPaul"},
        {"id": 2, "title": "J-45 Standard", "price": 1699, "image": J45, "alt": "J-45 Standard"},
        {"id": 3, "title": "Hummingbird Standard", "price": 2099, "image": Hummingbird, "alt": "Hummingbird Standard"},
      ]
    },

    {
      header: "bestSale",
      guitars: [
        {"id":1, "title":"Active Precision Bass® PH V", "price":4199, "image": ActivePrecisionBassPHV},
        {"id":2, "title":"Redondo Special", "price":2800, "image": RedondoSpecial},
        {"id":3, "title":"Professional II Stratocaster®", "price":3199, "image": ProfessionalIIStratocaster},
      ]
    },
  ]
}


export default dataAllGuitars;
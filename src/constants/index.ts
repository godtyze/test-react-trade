import {IParticipant} from "../types";
export enum tableHeaders {
  complexEvents = 'Наличие комплекса мероприятий, повышающих стандарты качества изготовления',
  productionTime = 'Срок изготовления лота, дней',
  warranty = 'Гарантийные обязательства, мес',
  termsOfPayment = 'Условия оплаты',
  productionPrice = 'Стоимость изготовления лота, руб. (без НДС)'
}

export const participants: IParticipant[] = [
  {
    key: 1,
    isYourTurn: true,
    isContainsComplexEvents: false,
    productionTimeInDays: 80,
    warrantyObligationsInMonths: 24,
    termsOfPaymentInPercents: 30,
    productionPriceInRubles: {
      initialPrice: 3700000,
      subtractionInRubles: 25000,
      finalPrice: 3675000
    }
  },
  {
    key: 2,
    isYourTurn: false,
    isContainsComplexEvents: false,
    productionTimeInDays: 90,
    warrantyObligationsInMonths: 24,
    termsOfPaymentInPercents: 100,
    productionPriceInRubles: {
      initialPrice: 3200000,
      subtractionInRubles: 25000,
      finalPrice: 3175000
    }
  },
  {
    key: 3,
    isYourTurn: false,
    isContainsComplexEvents: false,
    productionTimeInDays: 75,
    warrantyObligationsInMonths: 22,
    termsOfPaymentInPercents: 60,
    productionPriceInRubles: {
      initialPrice: 2800000,
      subtractionInRubles: 25000,
      finalPrice: 2775000
    }
  },
  {
    key: 4,
    isYourTurn: false,
    isContainsComplexEvents: false,
    productionTimeInDays: 120,
    warrantyObligationsInMonths: 36,
    termsOfPaymentInPercents: 50,
    productionPriceInRubles: {
      initialPrice: 2500000,
      subtractionInRubles: 25000,
      finalPrice: 2475000
    }
  }
]
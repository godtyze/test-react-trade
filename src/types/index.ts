export interface IParticipant {
  key: number;
  isContainsComplexEvents: boolean;
  productionTimeInDays: number;
  warrantyObligationsInMonths: number;
  termsOfPaymentInPercents: number;
  productionPriceInRubles: productionPrice;
}

export type productionPrice = Record<'initialPrice' | 'subtractionInRubles' | 'finalPrice', number>;

export type TableData = {
  name: string;
  participantsData: Array<ParticipantData>;
};

type ParticipantData = {
  key: number;
  value: IParticipant[keyof IParticipant];
};
import {IParticipant, TableData} from "../types";

export const getPaddedTime = (time: number) => time.toString().padStart(2, '0');

export const createTableData = (rowName: string, key: keyof IParticipant, participants: IParticipant[]): TableData => {
  return {name: rowName, participantsData: participants.map((participant, idx) => ({key: idx,  value: participant[key]}))};
};
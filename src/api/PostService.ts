import {IParticipant} from "../types";
import {serverUrl} from "../constants";
import axios, {AxiosResponse} from "axios";

export class PostService {
  static async getParticipants(): Promise<AxiosResponse<IParticipant[]>> {
    return axios.get<IParticipant[]>(serverUrl);
  }
}
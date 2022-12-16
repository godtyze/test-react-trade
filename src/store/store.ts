import {participants} from "../constants";
import {makeAutoObservable} from "mobx";

class Store {
  participants = participants;
  timeLeft = 120;
  currentTurnParticipant = this.participants[0];
  constructor() {
    makeAutoObservable(this);
  }
  decrementTime() {
    this.timeLeft = this.timeLeft - 1;
  }

  setTimeLeft(time: number) {
    this.timeLeft = time;
  }

  changeTurnStatus() {
    this.currentTurnParticipant.isYourTurn = false;
    const candidate = this.participants.find(participant => participant.key === this.currentTurnParticipant.key + 1);
    if (candidate) {
      candidate.isYourTurn = true;
      this.currentTurnParticipant = candidate;
    } else {
      this.currentTurnParticipant = this.participants[0];
      this.currentTurnParticipant.isYourTurn = true;
    }
  }
}

export default new Store();
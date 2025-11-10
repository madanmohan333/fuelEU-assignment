import type{ BanksPort } from "../ports/banksPort";
import type{ Bank } from "../domain/bank";

export class GetBanks {
  private banksPort: BanksPort;

  constructor(banksPort: BanksPort) {
    this.banksPort = banksPort;
  }

  async execute(): Promise<Bank[]> {
    return this.banksPort.getAllBanks();
  }
}

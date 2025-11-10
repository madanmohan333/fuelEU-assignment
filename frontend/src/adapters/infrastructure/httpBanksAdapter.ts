import type{ BanksPort } from "../../core/ports/banksPort";
import type{ Bank } from "../../core/domain/bank";

export class HttpBanksAdapter implements BanksPort {
  async getAllBanks(): Promise<Bank[]> {
    const res = await fetch("http://localhost:3000/api/banks");
    return res.json();
  }
}

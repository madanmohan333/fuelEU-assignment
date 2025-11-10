import type{ Bank } from "../domain/bank";

export interface BanksPort {
  getAllBanks(): Promise<Bank[]>;
}

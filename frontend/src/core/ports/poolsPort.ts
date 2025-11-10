import type{ Pool } from "../domain/pool";

export interface PoolsPort {
  getAllPools(): Promise<Pool[]>;
}

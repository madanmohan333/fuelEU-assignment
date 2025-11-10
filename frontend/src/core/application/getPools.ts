import type{ PoolsPort } from "../ports/poolsPort";
import type{ Pool } from "../domain/pool";

export class GetPools {
  private poolsPort: PoolsPort;

  constructor(poolsPort: PoolsPort) {
    this.poolsPort = poolsPort;
  }

  async execute(): Promise<Pool[]> {
    return this.poolsPort.getAllPools();
  }
}

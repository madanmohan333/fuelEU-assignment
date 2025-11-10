import type{ PoolsPort } from "../../core/ports/poolsPort";
import type{ Pool } from "../../core/domain/pool";

export class HttpPoolsAdapter implements PoolsPort {
  async getAllPools(): Promise<Pool[]> {
    const res = await fetch("http://localhost:3000/api/pools");
    return res.json();
  }
}

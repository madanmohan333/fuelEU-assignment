import type{ RoutesPort } from "../ports/routesPort";
import type{ Route } from "../domain/route";

export class GetRoutes {
  constructor(private routesPort: RoutesPort) {}

  async execute(): Promise<Route[]> {
    return await this.routesPort.getRoutes();
  }
}

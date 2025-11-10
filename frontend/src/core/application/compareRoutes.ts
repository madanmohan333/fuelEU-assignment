import type{ RoutesPort } from "../ports/routesPort";
import type{ Route } from "../domain/route";

export class CompareRoutes {
  private routesPort: RoutesPort;

  constructor(routesPort: RoutesPort) {
    this.routesPort = routesPort;
  }

  async execute(): Promise<Route[]> {
    return this.routesPort.getRoutesForComparison();
  }
}

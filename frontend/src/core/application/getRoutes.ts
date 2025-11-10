import { Route } from "../domain/route";
import { RoutesPort } from "../ports/routesPort";

export class GetRoutes {
  constructor(private routesPort: RoutesPort) {}

  async execute(filters?: { year?: number; fuelType?: string }): Promise<Route[]> {
    return this.routesPort.fetchRoutes(filters);
  }
}

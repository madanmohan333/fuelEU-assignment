import type{ Route } from "../domain/route";

export interface RoutesPort {
  fetchRoutes(filters?: { year?: number; fuelType?: string }): Promise<Route[]>;
  setBaseline(routeId: string): Promise<void>;
}

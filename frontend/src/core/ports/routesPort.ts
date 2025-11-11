import type{ Route } from "../domain/route";

export interface RoutesPort {
  getRoutes(): Promise<Route[]>;
  setBaseline(routeId: string): Promise<void>;
  getComparisonRoutes(): Promise<Route[]>;
}

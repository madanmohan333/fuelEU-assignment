import axios from "axios";
import type{ Route } from "../../core/domain/route";
import type{ RoutesPort } from "../../core/ports/routesPort";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

export class HttpRoutesAdapter implements RoutesPort {
  async fetchRoutes(): Promise<Route[]> {
    const res = await axios.get(`${API_URL}/routes`);
    return res.data;
  }

  async setBaseline(routeId: string): Promise<void> {
    await axios.post(`${API_URL}/routes/${routeId}/baseline`);
  }
}

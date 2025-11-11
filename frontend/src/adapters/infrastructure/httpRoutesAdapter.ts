// import axios from "axios";
// import type{ Route } from "../../core/domain/route";
// import type{ RoutesPort } from "../../core/ports/routesPort";

// const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

// export class HttpRoutesAdapter implements RoutesPort {
//   getRoutes(): Promise<Route[]> {
//       throw new Error("Method not implemented.");
//   }
//   getComparisonRoutes(): Promise<Route[]> {
//       throw new Error("Method not implemented.");
//   }
//   async fetchRoutes(): Promise<Route[]> {
//     const res = await axios.get(`${API_URL}/routes`);
//     return res.data;
//   }

//   async setBaseline(routeId: string): Promise<void> {
//     await axios.post(`${API_URL}/routes/${routeId}/baseline`);
//   }
// }
import type{ Route } from "../../core/domain/route";

export class HttpRoutesAdapter {
  async getRoutes(): Promise<Route[]> {
    // Mocked route data for now
    return [
      {
        routeId: "R001",
        vesselType: "Container",
        fuelType: "HFO",
        year: 2024,
        ghgIntensity: 91.0,
        fuelConsumption: 5000,
        distance: 12000,
        totalEmissions: 4500,
        isBaseline: true,
      },
      {
        routeId: "R002",
        vesselType: "BulkCarrier",
        fuelType: "LNG",
        year: 2024,
        ghgIntensity: 88.0,
        fuelConsumption: 4800,
        distance: 11500,
        totalEmissions: 4200,
      },
      {
        routeId: "R003",
        vesselType: "Tanker",
        fuelType: "MGO",
        year: 2024,
        ghgIntensity: 93.5,
        fuelConsumption: 5100,
        distance: 12500,
        totalEmissions: 4700,
      },
    ];
  }

  async setBaseline(routeId: string): Promise<void> {
    console.log(`Baseline set for route ${routeId}`);
  }

  async getComparisonRoutes(): Promise<Route[]> {
    return this.getRoutes();
  }
}

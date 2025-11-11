import type{ RoutesPort } from '../ports/routesPort';

export class SetBaseline {
  constructor(private routesPort: RoutesPort) {}

  async execute(routeId: string): Promise<void> {
    await this.routesPort.setBaseline(routeId);
  }
}

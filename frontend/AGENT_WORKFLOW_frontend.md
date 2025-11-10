# AI Agent Workflow Log

### log1: basic frontend folder structure setup
## Agents Used
chatGpt

## Prompts & Outputs
# prompts
 "give me basic folder structure and files inside them for this frontend project using hexagonal architecture"
# output
 src/
  core/
    domain/
      route.ts
      bank.ts
      pool.ts
    application/
      getRoutes.ts
      setBaseline.ts
      getBanks.ts
      compareRoutes.ts
      getPools.ts
    ports/
      routesPort.ts
      banksPort.ts
      poolsPort.ts
  adapters/
    ui/
      components/
        RoutesTable.tsx
        BanksTable.tsx
        CompareTable.tsx
        PoolsTable.tsx
      pages/
        Dashboard.tsx
    infrastructure/
      httpRoutesAdapter.ts
      httpBanksAdapter.ts
      httpPoolsAdapter.ts
  shared/
    types.ts
  App.tsx
  main.tsx


# AI Agent Workflow — Backend

### 🔹 Log #1 — Prisma/typescript/express setup

## Agents Used
- ChatGPT (for Prisma/typescript setup,)

## Prompts & Outputs
**Prompt:** "give me command to setup typescript backend with express server+node.js and using prisma"
**Output:** "npm install express prisma @prisma/client typescript ts-node-dev @types/express --save"

## validation/corrections
-checked whether server is running or not at port 3000,


### 🔹 Log #2 — doubt in req/res object

## Agents Used
- ChatGPT 

## Prompts & Outputs
**Prompt:** "while being a req/res inside a typescript file why there is no error for req and res even though there is not any type mentioned for them"
**Output:** "Even though you didn’t explicitly type req and res, TypeScript is inferring their types automatically from Express’s type definitions."

-it give me idea that @type/express handles express objects automatically,
-but for When using custom request properties, e.g. req.user or req.token.
it will be required to mention them explicitly as:
app.get('/users/:id', (req: Request<{ id: string }>, res: Response) => {
    res.send(req.params.id);
});

## validation/corrections:
Confirmed this behavior by removing @types/express → saw type errors appear.


### 🔹 Log #3 — getting error in importing req/res object from express

## Agents Used
- ChatGPT 

## Prompts & Outputs
**Prompt:** "Request' is a type and must be imported using a type-only import when 'verbatimModuleSyntax' is enabled.ts(1484), why this error?"
**Output:** "this happens because your tsconfig.json has the option

"verbatimModuleSyntax": true;

which is stricter about how TypeScript handles imports."

Change your import line like this:

import express from "express";
import type { Request, Response } from "express";



### 🔹 Log #4 — what this website will be doing ,that is what purpose it will be serving to user

## Agents Used
- ChatGPT 

## Prompts & Outputs
**Prompt:** "tell me about what this website is doing i am not able to understand what it is doing at the end ,what is its purpose?"
**Output:** 
=>The Real-World Problem

In the shipping industry (cargo ships, tankers, etc.), every vessel emits greenhouse gases (GHG) when burning fuels like HFO (Heavy Fuel Oil), LNG (Liquefied Natural Gas), or MGO (Marine Gas Oil).

The European Union (EU) has a rule called FuelEU Maritime Regulation (EU 2023/1805) that forces shipping companies to:

Gradually reduce their greenhouse gas intensity (gCO₂e per megajoule of energy used).

So — just like companies track carbon emissions, ships must prove they are “compliant” with the GHG reduction target each year.

## Observations
-AI agent saved time of reading whole documentation
-It gave me exact idea that why i am making this website now i can make API's with proper logic.
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
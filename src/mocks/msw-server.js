import { setupServer } from "msw/node";
import { handlers, defaultHandlers } from "./handlers";

export const mswServer = setupServer(...handlers, ...defaultHandlers);

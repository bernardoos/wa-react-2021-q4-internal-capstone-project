import { rest } from "msw";

export const handlers = [
  rest.get(
    "https://wizeline-academy.cdn.prismic.io/api/v2",
    (req, res, ctx) => {
      console.log("spiderman", req);
      return res(
        ctx.status(200),
        ctx.json([
          { superheroName: "Batman" },
          { superheroName: "Superman" },
          { superheroName: "Flash" },
        ])
      );
    }
  ),
];

export const defaultHandlers = [
  rest.get("*", (req, res, ctx) => res(ctx.status(200), ctx.json({}))),
  rest.post("*", (req, res, ctx) => res(ctx.status(200), ctx.json({}))),
  rest.patch("*", (req, res, ctx) => res(ctx.status(200), ctx.json({}))),
  rest.put("*", (req, res, ctx) => res(ctx.status(200), ctx.json({}))),
  rest.delete("*", (req, res, ctx) => res(ctx.status(200), ctx.json({}))),
];

export const networkErrorHandlers = [
  rest.get("*", (req, res, ctx) => res.networkError("Boom there was error")),
  rest.post("*", (req, res, ctx) => res.networkError("Boom there was error")),
  rest.patch("*", (req, res, ctx) => res.networkError("Boom there was error")),
  rest.put("*", (req, res, ctx) => res.networkError("Boom there was error")),
  rest.delete("*", (req, res, ctx) => res.networkError("Boom there was error")),
];

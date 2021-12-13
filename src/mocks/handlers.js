import { rest } from "msw";
import mockFeaturedBanners from "./en-us/featured-banners.json";
import mockProductCategories from "./en-us/product-categories.json";

export const handlers = [
  rest.get("*banner*", (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json(mockFeaturedBanners));
  }),
  rest.get("*category*", (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json(mockProductCategories));
  }),
];

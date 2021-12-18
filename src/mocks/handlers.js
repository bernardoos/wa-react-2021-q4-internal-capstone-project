import { rest } from "msw";
import mockFeaturedProducts from "./en-us/featured-products.json";
import mockProductCategories from "./en-us/product-categories.json";
import mockFeaturedBanners from "./en-us/featured-banners.json";
import mockProducts from "./en-us/products.json";

const queryIncludes = (q, match) =>
  q.some((query) => query.toLowerCase().includes(match));

export const handlers = [
  rest.get(
    "https://wizeline-academy.cdn.prismic.io/api/v2/*",
    (req, res, ctx) => {
      const q = req.url.searchParams.getAll("q");

      if (queryIncludes(q, "featured")) {
        return res(ctx.status(200), ctx.json(mockFeaturedProducts));
      }

      if (queryIncludes(q, "category")) {
        return res(ctx.status(200), ctx.json(mockProductCategories));
      }

      if (queryIncludes(q, "banner")) {
        return res(ctx.status(200), ctx.json(mockFeaturedBanners));
      }

      if (queryIncludes(q, "fulltext")) {
        if (queryIncludes(q, "furniture")) {
          return res(ctx.status(200), ctx.json(mockProducts));
        }

        return {
          page: 1,
          results_per_page: 50,
          results_size: 0,
          total_results_size: 0,
          total_pages: 1,
          next_page: null,
          prev_page: null,
          results: [],
        };
      }

      if (queryIncludes(q, "product") || queryIncludes(q, "document.id")) {
        return res(ctx.status(200), ctx.json(mockProducts));
      }
    }
  ),
];

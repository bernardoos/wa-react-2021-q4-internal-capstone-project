import { render, screen, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Homepage from "./Homepage";

beforeEach(() =>
  render(
    <BrowserRouter>
      <Homepage />
    </BrowserRouter>
  )
);

describe("When Homepage is mounted", () => {
  it("must render the Featured Banners Slider with data from the API", async () => {
    expect(
      screen.getByRole("heading", { name: /loading banner/i })
    ).toBeInTheDocument();

    await waitFor(() =>
      expect(
        screen.getByRole("img", { title: "slider-img" })
      ).toBeInTheDocument()
    );
  });

  it("must render the Product Categories Carousel with data from the API", async () => {
    expect(
      screen.getByRole("heading", { name: /loading categories/i })
    ).toBeInTheDocument();

    await waitFor(() =>
      expect(
        screen.getByRole("img", { title: "carousel-img" })
      ).toBeInTheDocument()
    );
  });

  it("must render the Featured Products Grid with data from the API", async () => {
    expect(
      screen.getByRole("heading", { name: /loading products/i })
    ).toBeInTheDocument();

    await waitFor(() =>
      expect(screen.getByRole("row", { title: "grid-row" })).toBeInTheDocument()
    );
  });
});

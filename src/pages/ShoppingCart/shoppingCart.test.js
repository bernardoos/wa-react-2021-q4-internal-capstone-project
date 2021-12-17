import {
  act,
  fireEvent,
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import Header from "layout/Header/Header";
import Homepage from "pages/Homepage/Homepage";
import { BrowserRouter } from "react-router-dom";

import ShoppingCart from "./ShoppingCart";

beforeEach(() => {
  render(
    <>
      <BrowserRouter>
        <Header />
        <Homepage />
        <ShoppingCart />
      </BrowserRouter>
    </>
  );
});

describe("When the ShoppingCart Page is mounted", () => {
  it("must show an empty table when there are no items in the cart", async () => {
    const productInfoRows = screen.queryByTitle(/productInfoRow/i);

    expect(productInfoRows).not.toBeInTheDocument();
  });

  it("must a row per product when there are items in the cart", async () => {
    const addToCartButton = (
      await screen.findAllByTitle(/addToCartCardButton/i)
    )[0];

    act(() => {
      fireEvent.click(addToCartButton);
    });

    const productInfoRows = await screen.findAllByTitle(/productInfoRow/i);

    expect(productInfoRows.length).toBeGreaterThan(0);
  });
});

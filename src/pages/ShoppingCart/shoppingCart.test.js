import {
  cleanup,
  fireEvent,
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import { act } from "@testing-library/react-hooks";

import App from "App";

beforeEach(() => {
  render(<App />);
});

describe("When the ShoppingCart Page is mounted", () => {
  it("must show an empty table when there are no items in the cart", async () => {
    try {
      await waitForElementToBeRemoved(screen.queryByText(/loading products/i));
    } catch (error) {}

    const cartButton = await screen.findByTitle(/cartButton/i);

    act(() => {
      fireEvent.click(cartButton);
    });

    const productInfoRows = screen.queryByTitle(/productInfoRow/i);

    expect(productInfoRows).not.toBeInTheDocument();
  });

  it("must a row per product when there are items in the cart", async () => {
    const headerLink = await screen.findByTitle(/headerLink/i);

    act(() => {
      fireEvent.click(headerLink);
    });

    try {
      await waitForElementToBeRemoved(screen.queryByText(/loading products/i));
    } catch (error) {}

    const addToCartButton = (
      await screen.findAllByRole("button", { name: /addToCartCardButton/i })
    )[0];

    const cartButton = await screen.findByTitle(/cartButton/i);

    act(() => {
      fireEvent.click(addToCartButton);
      fireEvent.click(cartButton);
    });

    const productInfoRows = await screen.findAllByTitle(/productInfoRow/i);
    expect(productInfoRows.length).toBeGreaterThan(0);
  });

  it("must display the total price", async () => {
    const headerLink = await screen.findByTitle(/headerLink/i);

    act(() => {
      fireEvent.click(headerLink);
    });

    try {
      await waitForElementToBeRemoved(screen.queryByText(/loading products/i));
    } catch (error) {}

    const addToCartButton = (
      await screen.findAllByRole("button", { name: /addToCartCardButton/i })
    )[0];

    const cartButton = await screen.findByTitle(/cartButton/i);

    act(() => {
      fireEvent.click(addToCartButton);
      fireEvent.click(addToCartButton);
      fireEvent.click(addToCartButton);
      fireEvent.click(cartButton);
    });

    const productsSubtotals = await screen.findAllByTitle(/productSubtotal/i);

    const calculatedTotal = productsSubtotals.reduce(
      (accum, prod) => accum + Number(prod.textContent.split("$")[1]),
      0
    );

    const realTotal = Number(
      (await screen.findByTitle(/realTotal/i)).textContent.split("$")[1]
    );

    expect(realTotal).toEqual(calculatedTotal);
  });

  it("must update the amount of items in the cart", async () => {
    const headerLink = await screen.findByTitle(/headerLink/i);

    act(() => {
      fireEvent.click(headerLink);
    });

    try {
      await waitForElementToBeRemoved(screen.queryByText(/loading products/i));
    } catch (error) {}

    const addToCartButton = (
      await screen.findAllByRole("button", { name: /addToCartCardButton/i })
    )[0];

    const cartButton = await screen.findByTitle(/cartButton/i);

    act(() => {
      fireEvent.click(addToCartButton);
      fireEvent.click(cartButton);
    });

    const productQtyInput = (
      await screen.findAllByTitle(/productQtyInput/i)
    )[0];

    act(() => fireEvent.change(productQtyInput, { target: { value: 3 } }));

    expect(productQtyInput).toHaveValue(3);
  });

  it("must remove a product from the cart", async () => {
    const headerLink = await screen.findByTitle(/headerLink/i);

    act(() => {
      fireEvent.click(headerLink);
    });

    try {
      await waitForElementToBeRemoved(screen.queryByText(/loading products/i));
    } catch (error) {}

    const addToCartButton = (
      await screen.findAllByRole("button", { name: /addToCartCardButton/i })
    )[0];

    const cartButton = await screen.findByTitle(/cartButton/i);

    act(() => {
      fireEvent.click(addToCartButton);
      fireEvent.click(cartButton);
    });

    const removeFromCartButton = (
      await screen.findAllByTitle(/removeFromCartButton/i)
    )[0];

    act(() => fireEvent.click(removeFromCartButton));

    const productInfoRows = screen.queryByTitle(/productInfoRow/i);

    expect(productInfoRows).not.toBeInTheDocument();
  });
});

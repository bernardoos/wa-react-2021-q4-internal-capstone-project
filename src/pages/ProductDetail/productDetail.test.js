import {
  act,
  fireEvent,
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import Header from "layout/Header/Header";
import { BrowserRouter } from "react-router-dom";
import ProductDetail from "./ProductDetail";

beforeEach(() => {
  render(
    <>
      <BrowserRouter>
        <Header />
        <ProductDetail />
      </BrowserRouter>
    </>
  );
});

describe("When the Product Detail Page is mounted", () => {
  it("must render the Product Detail Page with data from the API", async () => {
    try {
      await waitForElementToBeRemoved(
        screen.queryByText(/loading product info/i)
      );
    } catch (error) {}

    expect(
      (await screen.findAllByTitle(/productGallerySlide/i)).length
    ).toBeGreaterThan(0);
  });

  it("must contain product info labels", async () => {
    try {
      await waitForElementToBeRemoved(
        screen.queryByText(/loading product info/i)
      );
    } catch (error) {}

    expect(await screen.findByTitle(/productName/i)).toBeInTheDocument();
    expect(await screen.findByTitle(/productPrice/i)).toBeInTheDocument();
    expect(await screen.findByTitle(/productSKU/i)).toBeInTheDocument();
    expect(await screen.findByTitle(/productCategory/i)).toBeInTheDocument();
    expect(await screen.findByTitle(/productDescription/i)).toBeInTheDocument();
    expect(
      (await screen.findAllByTitle(/productTags/i)).length
    ).toBeGreaterThan(0);
  });

  it("must contain 'add to cart' elements", async () => {
    try {
      await waitForElementToBeRemoved(
        screen.queryByText(/loading product info/i)
      );
    } catch (error) {}

    expect(await screen.findByRole("spinbutton")).toBeInTheDocument();
    expect(
      await screen.findByRole("button", { name: /add to cart/i })
    ).toBeInTheDocument();
  });
});

describe("When 'Add to cart' button is clicked", () => {
  it("must add the corresponding number of products to the cart", async () => {
    try {
      await waitForElementToBeRemoved(
        screen.queryByText(/loading product info/i)
      );
    } catch (error) {}

    const addToCartButton = await screen.findByRole("button", {
      name: /add to cart/i,
    });

    act(() => {
      fireEvent.click(addToCartButton);
      fireEvent.click(addToCartButton);
    });

    const cartBadge = await screen.findByTestId(/cartBadge/i);

    expect(cartBadge).toHaveTextContent("0");
  });

  it("must disable the button if the number of products is greater than the stock", async () => {
    try {
      await waitForElementToBeRemoved(
        screen.queryByText(/loading product info/i)
      );
    } catch (error) {}

    const productAmountInput = await screen.findByRole("spinbutton");

    act(() => fireEvent.change(productAmountInput, { target: { value: 555 } }));

    const addToCartButton = await screen.findByRole("button", {
      name: /add to cart/i,
    });

    expect(addToCartButton).toBeDisabled();
  });
});

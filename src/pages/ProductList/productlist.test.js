import {
  fireEvent,
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import ProductList from "./ProductList";
import mockProducts from "mocks/en-us/products.json";
import { BrowserRouter } from "react-router-dom";

beforeEach(() => {
  render(
    <BrowserRouter>
      <ProductList />
    </BrowserRouter>
  );
});

describe("When the Product List Page is mounted", () => {
  it("must render the Product Category Sidebar with data from the API", async () => {
    try {
      await waitForElementToBeRemoved(
        screen.queryByText(/loading categories/i)
      );
    } catch (error) {}

    expect(await screen.findAllByTitle(/sidebarCategory/i)).toHaveLength(5);
  });
});

describe("When interacting with the Product Category Sidebar", () => {
  it("must display products from one selected category", async () => {
    try {
      await waitForElementToBeRemoved(
        screen.queryByText(/loading categories/i)
      );
    } catch (error) {}
    fireEvent.click(await screen.findByTestId(/sidebarDecorate/i));
    expect((await screen.findAllByTestId(/Decorate/i)).length).toBeGreaterThan(
      0
    );
  });

  it("must display all products if no category is selected", async () => {
    try {
      await waitForElementToBeRemoved(
        screen.queryByText(/loading categories/i)
      );
    } catch (error) {}

    const products = await screen.findAllByTestId(/productCategoryFurniture/i);
    expect(products.length).toBeGreaterThan(0);
  });
});

describe("When interacting with the Pagination Controls", () => {
  it("must display the right number of pages", async () => {
    const { total_pages: totalPages } = mockProducts;
    const lastPageButton = (await screen.findAllByTitle(/pageButton/i)).pop();
    expect(lastPageButton).toHaveTextContent(totalPages);
  });

  it("must disable Prev button when the user is on the first page", async () => {
    await waitForElementToBeRemoved(screen.queryByText(/loading products/i));
    const button = (await screen.findAllByTitle(/pageButton/i))[0];
    fireEvent.click(button);
    expect(await screen.findByTestId(/prevPageArrow/i)).toBeDisabled();
  });

  it("must fetch the previous page when clicking the Prev button", async () => {
    const prevPageArrow = await screen.findByTestId(/prevPageArrow/i);
    fireEvent.click(prevPageArrow);

    const products = await screen.findAllByTestId(/productCategoryFurniture/i);
    expect(products.length).toBeGreaterThan(0);
  });

  it("must fetch the next page when clicking the Next button", async () => {
    const nextPageArrow = await screen.findByTestId(/nextPageArrow/i);
    fireEvent.click(nextPageArrow);

    const products = await screen.findAllByTestId(/productCategoryFurniture/i);
    expect(products.length).toBeGreaterThan(0);
  });

  it("must disable Next button when the user is on the last page", async () => {
    await waitForElementToBeRemoved(screen.queryByText(/loading products/i));
    const nextPageArrow = await screen.findByTestId(/nextPageArrow/i);
    fireEvent.click(nextPageArrow);
    expect(await screen.findByTestId(/nextPageArrow/i)).toBeDisabled();
  });
});

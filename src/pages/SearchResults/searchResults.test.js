import {
  act,
  fireEvent,
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import Header from "layout/Header/Header";
import { BrowserRouter } from "react-router-dom";

import SearchResults from "./SearchResults";

beforeEach(() => {
  render(
    <>
      <BrowserRouter>
        <Header />
        <SearchResults />
      </BrowserRouter>
    </>
  );
});

describe("When a search term is introduced", () => {
  it("must render a list of products matching the search", async () => {
    try {
      await waitForElementToBeRemoved(screen.queryByText(/loading products/i));
    } catch (error) {}

    const searchInput = await screen.findByTitle(/searchInput/i);
    const searchButton = await screen.findByTitle(/searchButton/i);

    act(() => {
      fireEvent.change(searchInput, { target: { value: "furniture" } });
      fireEvent.click(searchButton);
    });

    expect(searchInput.value).toBe("furniture");

    try {
      await waitForElementToBeRemoved(screen.queryByText(/loading products/i));
    } catch (error) {}

    expect(
      (await screen.findAllByTestId(/productCategoryFurniture/i)).length
    ).toBeGreaterThan(0);
  });

  it("must not return results when there are no results for the 'searchTerm' provided", async () => {
    try {
      await waitForElementToBeRemoved(screen.queryByText(/loading products/i));
    } catch (error) {}

    const searchInput = await screen.findByTitle(/searchInput/i);
    const searchButton = await screen.findByTitle(/searchButton/i);

    act(() => {
      fireEvent.change(searchInput, { target: { value: "videogames" } });
      fireEvent.click(searchButton);
    });

    expect(screen.queryByTitle(/grid-img/i)).not.toBeInTheDocument();
  });
});

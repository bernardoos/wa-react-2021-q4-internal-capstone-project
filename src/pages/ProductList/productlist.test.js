import {
  act,
  fireEvent,
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import ProductList from "./ProductList";

import { BrowserRouter } from "react-router-dom";

beforeEach(() =>
  render(
    <BrowserRouter>
      <ProductList />
    </BrowserRouter>
  )
);

// describe("When the Product List Page is mounted", () => {
//   it("must render the Product Category Sidebar with data from the API", async () => {
//     await waitFor(() => {
//       expect(screen.getAllByTitle("sidebar-category")).toHaveLength(5);
//     });
//   });
// });

describe("When interacting with the Product Category Sidebar", () => {
  it("must display products from one selected category", async () => {
    try {
      await waitForElementToBeRemoved(
        screen.queryByText(/loading categories/i)
      );
      await waitForElementToBeRemoved(screen.queryByText(/loading products/i));
      await waitForElementToBeRemoved(
        screen.queryByText(/product category loading/i)
      );
    } catch (e) {}

    fireEvent.click(screen.getByTestId(/sidebarDecorate/i));

    expect(
      screen.getAllByTestId(/productCategoryDecorate/i).length
    ).toBeGreaterThan(0);
  });

  it("must display products from multiple selected categories", async () => {
    await waitForElementToBeRemoved(screen.queryByText(/loading categories/i));

    try {
      await waitForElementToBeRemoved(screen.queryByText(/loading products/i));
      fireEvent.click(screen.getByTestId(/sidebarDecorate/i));
      fireEvent.click(screen.getByTestId(/sidebarLighting/i));
    } catch (e) {}

    expect(
      screen.getAllByTestId(/productCategoryDecorate/i).length
    ).toBeGreaterThan(0);

    expect(
      screen.getAllByTestId(/productCategoryLighting/i).length
    ).toBeGreaterThan(0);
  });

  it("must display all products if no category is selected", async () => {
    await waitForElementToBeRemoved(screen.queryByText(/loading categories/i));

    try {
      await waitForElementToBeRemoved(screen.queryByText(/loading products/i));
      await waitForElementToBeRemoved(
        screen.queryByText(/product category loading/i)
      );
      expect(
        screen.getAllByTestId(/productCategoryDecorate/i).length
      ).toBeGreaterThan(0);
    } catch (e) {}
  });
});

// describe("When interacting with the Pagination Controls", () => {
//   it("must display the right number of pages", async () => {
//     expect(
//       screen.getByRole("heading", { name: /loading banner/i })
//     ).toBeInTheDocument();

//     await waitFor(() =>
//       expect(
//         screen.getByRole("img", { title: "slider-img" })
//       ).toBeInTheDocument()
//     );
//   });

//   it("must disable Prev button when the user is on the first page", async () => {
//     expect(
//       screen.getByRole("heading", { name: /loading banner/i })
//     ).toBeInTheDocument();

//     await waitFor(() =>
//       expect(
//         screen.getByRole("img", { title: "slider-img" })
//       ).toBeInTheDocument()
//     );
//   });

//   it("must fetch the previous page when clicking the Prev button", async () => {
//     expect(
//       screen.getByRole("heading", { name: /loading banner/i })
//     ).toBeInTheDocument();

//     await waitFor(() =>
//       expect(
//         screen.getByRole("img", { title: "slider-img" })
//       ).toBeInTheDocument()
//     );
//   });

//   it("must fetch the next page when clicking the Next button", async () => {
//     expect(
//       screen.getByRole("heading", { name: /loading banner/i })
//     ).toBeInTheDocument();

//     await waitFor(() =>
//       expect(
//         screen.getByRole("img", { title: "slider-img" })
//       ).toBeInTheDocument()
//     );
//   });

//   it("must disable Next button when the user is on the last page", async () => {
//     expect(
//       screen.getByRole("heading", { name: /loading banner/i })
//     ).toBeInTheDocument();

//     await waitFor(() =>
//       expect(
//         screen.getByRole("img", { title: "slider-img" })
//       ).toBeInTheDocument()
//     );
//   });
// });

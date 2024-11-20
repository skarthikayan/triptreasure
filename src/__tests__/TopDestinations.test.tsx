import { render, screen } from "@testing-library/react";
import TopDestinations from "../pages/Discover/TopDestinations";

describe("Discover Page", () => {
  it("renders the TopDestinations component", () => {
    render(<TopDestinations />);
    expect(
      screen.getByRole("heading", { name: "TOP DESTINATIONS" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("img", {
        name: "Ocean with full of Colors",
      })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("img", {
        name: "Paradise Beach, Bantayan Island",
      })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("img", {
        name: "Mountain View, Above the cloud",
      })
    ).toBeInTheDocument();
    // screen.debug();
  });
});

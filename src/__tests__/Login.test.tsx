import { render, screen } from "@testing-library/react";
import Login from "../pages/Login/index";

import { BrowserRouter } from "react-router-dom";

describe("Login", () => {
  it("renders the Login  component", async () => {
    render(<Login />, { wrapper: BrowserRouter });
    expect(
      screen.getByRole("img", {
        name: "Login image",
      })
    ).toBeInTheDocument();
    const loginButton = screen.getByRole("button", { name: "login" });
    expect(loginButton).toBeInTheDocument();
  });
});

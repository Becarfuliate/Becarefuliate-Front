import { render, screen } from "@testing-library/react";
import Partida from "../Partida.js";

describe("Partida", () => {
  it("renders appropriately", () => {
    render(<Partida />);
    expect(screen.getByText(/Nombre/i)).toBeInTheDocument();
  });
});

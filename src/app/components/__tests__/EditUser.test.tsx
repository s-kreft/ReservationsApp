import { User } from "@/app/types";
import EditUser from "../EditUser";
import { render, screen, fireEvent } from "@testing-library/react";

test("EditUser component renders correctly", () => {
  const mockUser = {
    name: "John Doe",
    role: "customer",
    id: "1",
    password: "password",
  } as User;
  const newName = "Jane Doe";
  const newRole = "admin";
  const mockOnSubmit = jest.fn();

  render(<EditUser user={mockUser} onSubmit={mockOnSubmit} />);

  // Check if the component renders the username and email fields
  expect(screen.getByLabelText(/username/i));
  expect(screen.getByLabelText(/email/i));

  // Simulate user input
  fireEvent.change(screen.getByLabelText(/username/i), {
    target: { value: newName },
  });
  fireEvent.change(screen.getByLabelText(/email/i), {
    target: { value: newRole },
  });

  // Simulate form submission
  fireEvent.click(screen.getByRole("button", { name: /save changes/i }));

  // Check if onSubmit was called with the updated user data
  expect(mockOnSubmit).toHaveBeenCalledWith({
    ...mockUser,
    name: newName,
    role: newRole,
  });
});

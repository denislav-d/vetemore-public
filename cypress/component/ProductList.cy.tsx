import { mount } from "cypress/react18";
import NavBar from "@/components/NavBar";

describe("NavBar Component", () => {
  it("renders the Navbar with navItems and navEssentials", () => {
    // Mount the NavBar component
    mount(<NavBar />);

    // Check if the navbar is visible
    cy.get(".navbar").should("exist");

    // Define data for navItems and navEssentials
    const navItems = ["Brands", "Designers", "Wishlist", "About"];
    const navEssentials = ["Login", "Search", "Cart"];

    // Check if each navItem is rendered
    checkNavItemSection(".navbar__section:eq(0)", navItems); // Use :eq(0) to select the first section

    // Check if each navEssential is rendered
    checkNavItemSection(".navbar__section:eq(1)", navEssentials); // Use :eq(1) to select the second section
  });
});

// Helper function to check if each navItem is rendered
function checkNavItemSection(selector: string, items: string[]) {
  cy.get(selector)
    .should("exist")
    .find(".navbar__item")
    .each(($item, index) => {
      cy.wrap($item).should("have.text", items[index]);
    });
}

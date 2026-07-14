describe("favorite tests", () => {
  it("Add book to favorite successful", () => {
    cy.visit("/");
    cy.login("test@test.com", "test");
    cy.favorites("Laguna");
    cy.contains("Delete from favorite").should(
      "have.text",
      "Delete from favorite",
    );
  });

  it("Delete book from favorites successful", () => {
    cy.visit("/");
    cy.login("test@test.com", "test");
    cy.contains("Favorites").click();
    cy.contains("Delete from favorite").click();
    cy.contains("Please add some book to favorit on home page!").should(
      "be.visible",
    );
  });

  it("Add book to favorites from Book list", () => {
    cy.visit("/");
    cy.login("test@test.com", "test");
    cy.contains("Add to favorite").click();
    cy.contains("Favorites").click();
    cy.contains("Delete from favorite").should(
      "have.text",
      "Delete from favorite",
    );
  });
});

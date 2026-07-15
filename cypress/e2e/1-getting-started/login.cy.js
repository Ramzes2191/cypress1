describe("login tests", () => {
  it("Should successfully login", () => {
    cy.visit("/");
    cy.login("test@test.com", "test");
    cy.contains("Добро пожаловать test@test.com").should("be.visible");
  });

  it("Should not login with incorrect login", () => {
    cy.visit("/");
    cy.contains("Log in").click();
    cy.get("#mail").type("dfdfd@dfdfdf.ru");
    cy.get("#pass").type("test");
    cy.contains("Submit").click();
    cy.contains("Неправильая почта или пароль").should("be.visible");
  });

  it("Should not login with incorrect password", () => {
    cy.visit("/");
    cy.contains("Log in").click();
    cy.get("#mail").type("test@test.com");
    cy.get("#pass").type("1234");
    cy.contains("Submit").click();
    cy.contains("Неправильая почта или пароль").should("be.visible");
  });
});

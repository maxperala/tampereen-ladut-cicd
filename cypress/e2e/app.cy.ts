describe("Main app", () => {
  it("Should render trails", () => {
    cy.visit("http://localhost:3000/");
    cy.contains(".trail-title", "Atala-Leinola latu").should("exist");
  });
});

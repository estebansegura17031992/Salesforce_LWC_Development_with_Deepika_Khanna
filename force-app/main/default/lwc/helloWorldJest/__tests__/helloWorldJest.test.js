import { createElement } from "lwc";
import HelloWorldJest from "c/helloWorldJest";

describe("c-hello-world-jest", () => {
  afterEach(() => {
    // The jsdom instance is shared across test cases in a single file so reset the DOM
    while (document.body.firstChild) {
      document.body.removeChild(document.body.firstChild);
    }
  });

  it("display greeting", () => {
    // Arrange
    const element = createElement("c-hello-world-jest", {
      is: HelloWorldJest
    });

    // Act
    document.body.appendChild(element);

    // Assert
    const pTag = element.shadowRoot.querySelector("p");
    expect(pTag.textContent).toBe("Hello World");
  });

  it("Renders with Hello Matt", () => {
    const element = createElement("c-hello-world-jest", {
      is: HelloWorldJest
    });
    element.person = "Matt";
    document.body.appendChild(element);

    //Assert
    const pTag = element.shadowRoot.querySelector("p");
    expect(pTag.textContent).toEqual("Hello Matt");
  });
});

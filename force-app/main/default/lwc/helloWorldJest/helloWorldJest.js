import { LightningElement, api } from "lwc";

export default class HelloWorldJest extends LightningElement {
  @api person = "World";
}

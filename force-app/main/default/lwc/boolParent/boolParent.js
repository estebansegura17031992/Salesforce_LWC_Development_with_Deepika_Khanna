import { LightningElement } from 'lwc';

export default class BoolParent extends LightningElement {
    constructor(){
        super();
        console.log('Constructor on the parent is called');
    }

    connectedCallback(){
        console.log('Connected callback on the parent is called');
    }

    renderedCallback(){
        console.log('rendered callback on the parent is called');
    }
    disconnectedCallback(){
        console.log('disconnected callback on the parent is called');
    }
}
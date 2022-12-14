import { LightningElement,api } from 'lwc';

export default class Bool extends LightningElement {
    @api show = false;
    constructor(){
        super();
        console.log('Constructor on the child is called');
    }

    connectedCallback(){
        console.log('Connected callback on the child is called');
    }

    renderedCallback(){
        console.log('rendered callback on the child is called');
    }
    disconnectedCallback(){
        console.log('disconnected callback on the child is called');
    }
}
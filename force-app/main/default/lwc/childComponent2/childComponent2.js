import { LightningElement } from 'lwc';

export default class ChildComponent2 extends LightningElement {
    handlerChange(event){
        const name = event.target.value;
        const selectEvent = new CustomEvent('mycustomevent',{detail:name,bubbles:true});
        this.dispatchEvent(selectEvent);
    }
}
import { LightningElement,wire } from 'lwc';
import getAllContacts from '@salesforce/apex/ContactManager.getContact'

export default class FetchContactviaApex extends LightningElement {
    @wire(getAllContacts) contacts;

    get responseRecieved(){
        if(this.contacts){
            return true
        } 
        return false;
    }
}
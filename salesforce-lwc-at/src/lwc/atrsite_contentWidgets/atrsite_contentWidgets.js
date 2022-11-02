import { LightningElement,wire,api } from 'lwc';
import { subscribe, MessageContext } from 'lightning/messageService';
import FILTER_UPDATED_CHANNEL from '@salesforce/messageChannel/Filter_Updated__c';


export default class atrsite_contentWidgets extends LightningElement {

    @api accountName;

    @api smallCardTitle;
    @api smallCardValue;
    @api arrowDirection;
    @api percentValue;

    subscription = null;
    @wire(MessageContext)
    messageContext;
    iconColor ='success';

    

    subscribeToMessageChannel() {
        this.subscription = subscribe(
            this.messageContext,
            FILTER_UPDATED_CHANNEL,
            (message) => this.handleMessage(message)
        );
    }

    handleMessage(message) {
        console.log('heyla '+message);
        this.smallCardValue = message.filterBy;
    }
    connectedCallback(){
        // this.subscribeToMessageChannel();
        if(this.arrowDirection==='utility:arrowup'){
            this.iconColor = "success";
        }else if(this.arrowDirection==='utility:arrowdown'){
            this.iconColor = "error";
        }
    }
    renderedCallback(){
        if(this.arrowDirection==='utility:arrowup'){
            this.iconColor = "success";
        }else if(this.arrowDirection==='utility:arrowdown'){
            this.iconColor = "error";
        }
    }
}
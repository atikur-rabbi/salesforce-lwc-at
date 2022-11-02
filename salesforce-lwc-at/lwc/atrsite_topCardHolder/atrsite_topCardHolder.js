import { LightningElement,wire } from 'lwc';
import { subscribe, MessageContext } from 'lightning/messageService';
import FILTER_UPDATED_CHANNEL from '@salesforce/messageChannel/Filter_Updated__c';


export default class atrsite_topCardHolder extends LightningElement {
    @wire(MessageContext)
    messageContext;
    subscription = null;
    selectedPlan = 'allPlans';

    lstAccounts = this.getSelectedPlanData(this.selectedPlan);


    getSelectedPlanData(sp) {
        if(sp==='plan1'){
            return [
                {
                    smallCardTitle : 'Plan1 Assets',
                    smallCardValue : '$30,121,000',
                    arrowDirection: 'utility:arrowup',
                    percentValue:  '+4%' ,
                },
                {
                    smallCardTitle : 'Total Plan',
                    smallCardValue : '1',
                    arrowDirection: 'utility:arrowup',
                    percentValue:  '+4.7%' ,
                },
                
                {
                    smallCardTitle : 'Net Contributions',
                    smallCardValue : '$192,401',
                    arrowDirection: 'utility:arrowdown',
                    percentValue:  '-11%' ,
                },
                {
                    smallCardTitle : 'Total Participants',
                    smallCardValue : '125',
                    arrowDirection: 'utility:arrowdown',
                    percentValue:  '-12.3%' ,
                },{
                    smallCardTitle : 'Participation',
                    smallCardValue : '58.4%',
                    arrowDirection: 'utility:arrowup',
                    percentValue:  '+11.8%' ,
                },
                {
                    smallCardTitle : 'Retirement Success',
                    smallCardValue : '45.02%',
                    arrowDirection: 'utility:arrowup',
                    percentValue:  '+1.6%' ,
                }
            ];
        } else if (sp==='plan2') {
            return [
                {
                    smallCardTitle : 'Plan2 Assets',
                    smallCardValue : '$20,100,000',
                    arrowDirection: 'utility:arrowup',
                    percentValue:  '+4%' ,
                },
                {
                    smallCardTitle : 'Total Plan',
                    smallCardValue : '1',
                    arrowDirection: 'utility:arrowup',
                    percentValue:  '+4.7%' ,
                },
                {
                    smallCardTitle : 'Net Contributions',
                    smallCardValue : '$192,401',
                    arrowDirection: 'utility:arrowdown',
                    percentValue:  '-11%' ,
                },
                {
                    smallCardTitle : 'Total Participants',
                    smallCardValue : '1,000',
                    arrowDirection: 'utility:arrowdown',
                    percentValue:  '-12.3%' ,
                },{
                    smallCardTitle : 'Participation',
                    smallCardValue : '58.4%',
                    arrowDirection: 'utility:arrowup',
                    percentValue:  '+11.8%' ,
                },
                {
                    smallCardTitle : 'Retirement Success',
                    smallCardValue : '45.02%',
                    arrowDirection: 'utility:arrowup',
                    percentValue:  '+1.6%' ,
                }
            ];
        } else if(sp==='plan3'){
            return [
                {
                    smallCardTitle : 'Plan3 Assets',
                    smallCardValue : '$30,121,000',
                    arrowDirection: 'utility:arrowup',
                    percentValue:  '+4%' ,
                },
                
                {
                    smallCardTitle : 'Total Plan',
                    smallCardValue : '1',
                    arrowDirection: 'utility:arrowup',
                    percentValue:  '+4.7%' ,
                },
                {
                    smallCardTitle : 'Net Contributions',
                    smallCardValue : '$192,401',
                    arrowDirection: 'utility:arrowdown',
                    percentValue:  '-11%' ,
                },
                {
                    smallCardTitle : 'Total Participants',
                    smallCardValue : '1,125',
                    arrowDirection: 'utility:arrowdown',
                    percentValue:  '-12.3%' ,
                },{
                    smallCardTitle : 'Participation',
                    smallCardValue : '58.4%',
                    arrowDirection: 'utility:arrowup',
                    percentValue:  '+11.8%' ,
                },
                {
                    smallCardTitle : 'Retirement Success',
                    smallCardValue : '45.02%',
                    arrowDirection: 'utility:arrowup',
                    percentValue:  '+1.6%' ,
                }
            ];
        } else if(sp==='allPlans'){
            return [
                {
                    smallCardTitle : 'Total Assets',
                    smallCardValue : '$30,121,000',
                    arrowDirection: 'utility:arrowup',
                    percentValue:  '+4%' ,
                },
                {
                    smallCardTitle : 'Total Plans',
                    smallCardValue : '73',
                    arrowDirection: 'utility:arrowup',
                    percentValue:  '+4.7%' ,
                },
                {
                    smallCardTitle : 'Net Contributions',
                    smallCardValue : '$192,401',
                    arrowDirection: 'utility:arrowdown',
                    percentValue:  '-11%' ,
                },
                {
                    smallCardTitle : 'Total Participants',
                    smallCardValue : '1,125',
                    arrowDirection: 'utility:arrowdown',
                    percentValue:  '-12.3%' ,
                },{
                    smallCardTitle : 'Participation',
                    smallCardValue : '58.4%',
                    arrowDirection: 'utility:arrowup',
                    percentValue:  '+11.8%' ,
                },
                {
                    smallCardTitle : 'Retirement Success',
                    smallCardValue : '45.02%',
                    arrowDirection: 'utility:arrowup',
                    percentValue:  '+1.6%' ,
                }
            ];
        }
    }
    
    
    
    
    

    myName = 'SalesforceKid';
    
    

    subscribeToMessageChannel() {
        this.subscription = subscribe(
            this.messageContext,
            FILTER_UPDATED_CHANNEL,
            (message) => this.handleMessage(message)
        );
    }

    handleMessage(message) {
        console.log('heyla '+message);
        this.selectedPlan = message.filterBy;
        this.lstAccounts = this.getSelectedPlanData(this.selectedPlan);
    }
    connectedCallback(){
        this.subscribeToMessageChannel();
    }
}
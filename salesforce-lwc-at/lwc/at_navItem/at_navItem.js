import { LightningElement, api } from 'lwc';
import { CurrentPageReference, NavigationMixin } from 'lightning/navigation';
export default class At_navItem extends NavigationMixin(LightningElement) {
    @api label = "Nav Text";
    @api apiname = 'demo2__c';

    // Navigation to contant object home page
    navigateToDemo() {
        this[NavigationMixin.Navigate]({
            "type": "comm__namedPage",
            attributes: {
                name: this.apiname
            },
        });
    }
}
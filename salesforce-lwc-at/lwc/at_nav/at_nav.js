import { LightningElement, api, track, wire } from 'lwc';
import { CurrentPageReference, NavigationMixin } from 'lightning/navigation';
export default class At_nav extends NavigationMixin(LightningElement) {
    @api label = "Nav Text";
    @api apiname = 'demo2__c';


    // // Every time clecked
    // @wire(CurrentPageReference)
    // getpageRef(pageRef) {
    //     console.log('data => ', JSON.stringify(pageRef));
    //     console.log( 'Name => ',JSON.stringify(pageRef.attributes.name));
    //     console.log( 'ID => ',JSON.stringify(pageRef.state));
    // }


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
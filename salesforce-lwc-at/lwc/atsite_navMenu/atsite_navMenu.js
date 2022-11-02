import { LightningElement, wire, api, track } from 'lwc';
import { CurrentPageReference, NavigationMixin } from 'lightning/navigation';
export default class Atsite_navMenu extends NavigationMixin(LightningElement) {
    
    // // Every time clecked
    // @wire(CurrentPageReference)
    // getpageRef(pageRef) {
    //     console.log('data => ', JSON.stringify(pageRef));
    //     console.log( 'Name => ',JSON.stringify(pageRef.attributes.name));
    //     console.log( 'ID => ',JSON.stringify(pageRef.state));
    // }

    renderedCallback(event) {

        let currentlink =  this.template.querySelectorAll(`apiname`);


        // /*=====  ACTIVE Link  =====*/ 
        let linkColor = this.template.querySelectorAll('.nav-link');

        function activateLink(){
            if(linkColor){
                linkColor.forEach(l=> l.classList.remove('active'))
                this.classList.add('active')
            }
        }
        linkColor.forEach(l=> l.addEventListener('click', activateLink))
        
    }

    // connectedCallback() {
    //     // console.log('child inserted');
    // }
}
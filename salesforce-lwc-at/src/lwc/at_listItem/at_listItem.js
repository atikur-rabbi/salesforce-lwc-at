import { LightningElement, api } from 'lwc';

export default class At_listItem extends LightningElement {
    
    @api color='red';
    @api liststyle='dot';

    // TODO: Create a list type validation

    get backgroundColor() {
        return `background-color: ${this.color}`;
      }    
}
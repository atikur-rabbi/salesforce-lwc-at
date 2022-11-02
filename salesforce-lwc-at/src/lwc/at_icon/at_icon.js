import { LightningElement, api } from 'lwc';
import iconUpArrow from './templates/iconUpArrow.html';
import iconDownArrow from './templates/iconDownArrow.html';
import iconRightArrow from './templates/iconRightArrow.html';


export default class At_icon extends LightningElement {
    @api name='iconRightArrow';

    render() {
        if (this.name === 'iconUpArrow')
        {
            return iconUpArrow;
        }
        else if(this.name === 'iconDownArrow')
        {
            return iconDownArrow;
        }
        else if(this.name === 'iconRightArrow')
        {
            return iconRightArrow;
        }           
    }
}
import { LightningElement,api } from 'lwc';

/**
 * @slot sidebar
 * @slot sidebar2
 */
export default class At_layout extends LightningElement {
// @api title;
    @api apexTitle = 'Apex Chart';
    @api apexOptions;
    @api backgroundColor;
    @api imgOption;

}
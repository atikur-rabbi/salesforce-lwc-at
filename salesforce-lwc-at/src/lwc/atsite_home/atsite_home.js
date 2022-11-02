import { LightningElement } from 'lwc';
export default class Atsite_home extends LightningElement {
    value = 'allPlans';

    get options() {
        return [
            
            { label: 'All Plans', value: 'allPlans'},
            { label: 'Plan 1', value: 'plan1'},
            { label: 'Plan 2', value: 'plan2'},
            { label: 'Plan 3', value: 'plan3'},

        ];
    }

    handleChange(event) {
        this.value = event.detail.value;
        // let us publish
        const payLoad = {
            filterBy: event.detail.value
        }
        // publish(this.messageContext, FILTER_UPDATED_CHANNEL, payLoad );
    }
}
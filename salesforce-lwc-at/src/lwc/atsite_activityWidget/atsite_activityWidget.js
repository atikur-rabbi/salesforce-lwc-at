import { LightningElement,wire,api } from 'lwc';

export default class atrsite_insightsWidget extends LightningElement {

    data =  [
        {
            iconLeft        : 'messages',
            previewText     : 'Distribution request of $47,912',
            name            : 'Pioneer',
            dateTime        : 'Today 11:15 am' ,
        },
        {
            iconLeft        : 'notes',
            previewText     : 'Submit your Year End Compliance Test',
            name            : 'Vanguard',
            dateTime        : 'Today 9:29 am' ,
        },
        {
            iconLeft        : 'message',
            previewText     : 'Distribution request of $121,086',
            name            : 'Acme',
            dateTime        : 'Yesterday 2:30 pm' ,
        },
        {
            iconLeft        : 'message',
            previewText     : '45500 Government Filing is processing',
            name            : 'Pioneer',
            dateTime        : '3 days ago' ,
        },
    ];
    
}
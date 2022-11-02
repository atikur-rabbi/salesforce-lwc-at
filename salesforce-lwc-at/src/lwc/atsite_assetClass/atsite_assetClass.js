import { LightningElement } from 'lwc';

export default class Atsite_assetClass extends LightningElement {
    assetClassData = [
        {
            color : '#5288AD',
            assetType : 'Stocks',
            percentage : 45.2,
            change_of_percentage : 0,
            change_text : '',
            amount : '13,614,692'  
        },
        {
            color : '#7A9A02',
            assetType : 'Bonds',
            percentage : 12.8,
            change_of_percentage : 4,
            change_text : '+4% This Month',
            amount : '3,855,488'  
        }, 
        {
            color : '#A12B2A',
            assetType : 'Balanced',
            percentage : 13.1,
            change_of_percentage :0,
            change_text : '',
            amount : '4,015,289'  
        }, 
        {
            color : '#8B5AA3',
            assetType : 'Cash',
            percentage : 24.1,
            change_of_percentage : 0,
            change_text : '',
            amount : '7,790,896'  
        }, 
        {
            color : '#D9CC5D',
            assetType : 'Other',
            percentage : 4.8,
            change_of_percentage : 0,
            change_text : '',
            amount : '1,`253,904'  
        }
    ];    

}
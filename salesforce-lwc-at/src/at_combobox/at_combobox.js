import { LightningElement } from 'lwc';
export default class At_combobox extends LightningElement {
    title = "Welcome to Lightning Web Components!";

  showFeatures = true;

  /**
   * Getter for the features property
   */
  get options() {
        return [
            
            { label: 'All Plans', value: 'allPlans'},
            { label: 'Plan 1', value: 'plan1'},
            { label: 'Plan 2', value: 'plan2'},
            { label: 'Plan 3', value: 'plan3'},

        ];
    }

    myFunction() {
      let el = this.template.querySelector('.dropdown-content');
      el.classList.toggle("show");
    }

    filterFunction() {
        var input, filter, ul, li, a, i, txtValue;
        input = this.template.querySelector('.myInput');
        filter = input.value.toUpperCase();
        a = this.template.querySelectorAll('a');

        // a[0].style.display= "none";
        // console.log(JSON.stringify(a[0]));
        for (i = 0; i < a.length; i++) {
            txtValue = a[i].textContent || a[i].innerText || a[i].innerHTML;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
            a[i].style.display = "";
            } else {
            a[i].style.display = "none";
            }
        }
    }
}
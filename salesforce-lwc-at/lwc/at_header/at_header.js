import { LightningElement } from 'lwc';
export default class At_header extends LightningElement {

    myFunction() {
    let el = this.template.querySelector('.user-menu-active');
    el.classList.toggle("show");
  }
}
import { LightningElement, api, track } from 'lwc';

export default class AccountEditForm extends LightningElement {
    @api objectApiName = 'Account';
    @api recordId;
    @api fields = ['Name', 'Industry', 'Phone', 'Website'];

    @track showForm = true;

    handleSubmit(event) {
        // Handle form submission (if needed)
        console.log('Form submitted: ', event.detail.fields);
    }

    handleSuccess(event) {
        // Handle record update success
        console.log('Record updated: ', event.detail.id);
    }

    handleCancel() {
        // Handle form cancel
        this.showForm = false;
    }
}

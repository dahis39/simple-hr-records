import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
    selector: 'inline-edit',
    templateUrl: './inputField.component.html',
    styleUrls: ['./inputField.component.css']
})
export class InputFieldComponent implements OnInit {

    @Input() type: string;
    @Input() data: string;
    @Input() fieldName: string;
    @Input() selectList: string[];

    @Output() submitEvent = new EventEmitter();

    model = this.data;
    errors: String[];
    isEdit: Boolean;
    isChanged: Boolean;
    isValidated: Boolean;
    
    ngOnInit(): void {
        this.isEdit = false;
        this.isChanged = false;
        this.isValidated = true;
        this.model = this.data;
    }

    onSubmit(): void {
        this.validate();

        if (this.isValidated === true) {
            let returnDate: any = { fieldName: this.fieldName, data: this.model };
            this.submitEvent.emit(returnDate);
        }
    }

    onReset(): void {
        this.ngOnInit();
    }

    onEditSwitch(): void {
        if (this.isEdit === true) {
            this.isEdit = false;
        } else {
            this.isEdit = true;
        }
    }

    validate(): void {
        this.isValidated = true;
        let errors = new Array<String>();
        let str = this.model;

        if (this.fieldName === 'name') {
            let nameArray = str.split(' ');

            if (!str.replace(/\s/g, '').length) {
                errors.push('Your name only cotains spaces.')
            }
            if (nameArray.length > 3) {
                errors.push('More than 3 composive names is not supported.');
            }
            if (nameArray.length === 3) {
                if (nameArray[0].length + nameArray[1].length > 14) {
                    errors.push('Firstname can not be longer than 14 charaters.');
                }
                if (nameArray[2].length > 16) {
                    errors.push('Lastname can not be longer than 16 charaters.');
                }
            }
            if (nameArray.length === 2) {
                if (nameArray[0].length > 14) {
                    errors.push('Firstname can not be longer than 14 charaters.');
                }
                if (nameArray[1].length > 16) {
                    errors.push('Lastname can not be longer than 16 charaters.');
                }
            }
            if (nameArray.length <= 1) {
                errors.push('A valid name should contain a firstname and a lastname split by a space.');
            }
        }

        if (this.type === 'date') {
            let strArray = str.split("-");
            if (strArray[0].length !== 4) {
                errors.push('Please provide a valid year. Date format: yyyy-mm-dd.');
            }
            if (strArray[1].length !== 2 || parseInt(strArray[1]) > 12) {
                errors.push('Please provide a valid month. Date format: yyyy-mm-dd.');
            }
            if (strArray[2].length !== 2 || parseInt(strArray[2]) > 31) {
                errors.push('Please provide a valid day. Date format: yyyy-mm-dd.');
            }
        }

        if (this.type === 'number') {
            // Number validation?
        }

        if (this.fieldName === 'titleName') {
            if (this.data.length >= 15) {
                errors.push('A title should not be longer than 15 charaters.');
            }
        }

        if (errors.length === 0) {
            this.isValidated = true;
            this.onEditSwitch();
        } else {
            this.isValidated = false;
        }

        this.errors = errors;
    }
}
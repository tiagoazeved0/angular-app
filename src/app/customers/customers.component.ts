import { Component, OnInit } from '@angular/core';

import { ICustomer } from '../shared/interfaces';

@Component({
    selector: 'app-customers',
    templateUrl: './customers.component.html'
})
export class CustomersComponent implements OnInit {
    title: string;
    people: ICustomer[];
    
    constructor() {}
    
    ngOnInit() {
        this.title = 'Customers';
        this.people = [
            { id: 1, name: 'João Freixo', city: 'Porto', orderTotal: 9.99, customerSince: new Date(2019, 7, 10) },
            { id: 2, name: 'Zé Freixo', city: 'Porto', orderTotal: 19.99, customerSince: new Date(2020, 2, 22)},
            { id: 3, name: 'Laura Antunes', city: 'Lisboa', orderTotal: 99.99, customerSince: new Date(2012, 10, 31)},
            { id: 4, name: 'Eduarda Costa', city: 'Faro', orderTotal: 599.99, customerSince: new Date(2015, 10, 31)},
        ];
    }
}
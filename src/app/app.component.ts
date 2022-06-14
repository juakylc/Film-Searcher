import { Component } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dia4';

  value: string;

  items: MenuItem[];

    ngOnInit() {
        this.items = [
            {
                label: 'Navigate',
                items: [{
                        label: 'Page', 
                        icon: 'pi pi-fw pi-plus',
                        items: [
                            {label: 'Main', "routerLink": '/'},
                            {label: 'Search', "routerLink": 'search'},
                        ]
                    }
                ]
            }
        ];
    }

    imprime() {
        console.log(this.value);
    }


}

import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  items: MenuItem[];

  constructor() { }

  ngOnInit(): void {
    this.items = [
      {
        label: 'Contact',
        icon: 'pi pi-fw pi-envelope',
        routerLink: ['contact'],
      },
      {
        label: 'Blog',
        icon: 'pi pi-fw pi-pencil',
        routerLink: ['blog'],
      },
      {
        label: 'About Me',
        icon: 'pi pi-fw pi-user',
        routerLink: ['about-me'],
      },
      {
        label: 'Home',
        title: 'Home',
        icon: 'pi pi-fw pi-home',
        routerLink: ['']
      },
    ];
  }

}

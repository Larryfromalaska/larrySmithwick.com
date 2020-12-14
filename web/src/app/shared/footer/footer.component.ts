import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  items: MenuItem[];
  headshot = '../../../assets/headshot-caricature.png';

  constructor() { }

  ngOnInit(): void {
    this.items = [
      {
        label: 'LinkedIn',
        url: 'https://www.linkedin.com/in/larry-smithwick',
        icon: 'pi pi-user'
      },
      {
        label: 'GitHub',
        url: 'https://github.com/Larryfromalaska',
        icon: 'pi pi-github'
      },
      {
        label: 'VectorOne',
        url: 'https://www.vectorone.com/',
        icon: 'pi pi-briefcase'
      },
  ];
  }

}

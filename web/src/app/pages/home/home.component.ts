import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  bannerImage = '../../../assets/dashing-man.png';

  constructor() { }

  ngOnInit(): void {
  }

  toVectorOneContact() {
    window.location.href = 'https://www.vectorone.com/get-in-touch';
  }

}

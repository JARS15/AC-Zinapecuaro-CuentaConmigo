import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // Redireccion a facebook
  linkFacebook(): void {
    window.open('https://www.facebook.com/profile.php?id=100064876893047', '_blank');
  }

}

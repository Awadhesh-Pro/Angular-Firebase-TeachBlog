import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/auth.service';

@Component({
  selector: 'app-slider-navbar',
  templateUrl: './slider-navbar.component.html',
  styleUrls: ['./slider-navbar.component.css']
})
export class SliderNavbarComponent implements OnInit {

  constructor(public authFS: AuthService) { }

  ngOnInit() {
  }

}

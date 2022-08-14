import { Component, OnInit } from '@angular/core';
import { faSearch,faUser,  faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { faAngry} from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  faSearch = faSearch;
  faShoppingBag = faShoppingBag;
  faUser = faUser;
  ngOnInit(): void {
  }

}

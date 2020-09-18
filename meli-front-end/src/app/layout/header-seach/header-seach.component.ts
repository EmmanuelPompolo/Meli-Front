import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-seach',
  templateUrl: './header-seach.component.html',
  styleUrls: ['./header-seach.component.scss']
})
export class HeaderSeachComponent implements OnInit {

  searchText: ''

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  search(){
    console.log('buscando...')
    this.router.navigate(['/items'], { queryParams: { search: this.searchText } });
  }

}

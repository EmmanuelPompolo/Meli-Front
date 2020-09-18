import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

// this service will keep the breadcrumb in memory

export class BreadcrumbService {

  private categories: string[];
  constructor() { }

  getCategories(){
    return this.categories;
  }

  setCategories(categories: string[]){
    this.categories = [];
    this.categories = categories;
  }

}


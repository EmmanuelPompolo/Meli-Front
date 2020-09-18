import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/core/service/data.service';
import { ItemList } from 'src/app/shared/models/item-list.model';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit, OnDestroy {

  AllSubscriptions: Subscription = new Subscription();
  searchText = '';
  products: ItemList = new ItemList();
  categories = [];

  @ViewChild('breadcrumb') Breadcrumb;

  constructor(private route: ActivatedRoute,
              private dataService: DataService) { }

  ngOnInit(): void {
    this.route.queryParams
      .subscribe((params) => {
        this.searchText = params['search'];
      });

    this.getListProducts();
  }

  ngOnDestroy(): void {
    if (this.AllSubscriptions) {
      this.AllSubscriptions.unsubscribe();
    }
  }

  getListProducts() {
    this.AllSubscriptions.add(this.dataService.getItems(this.searchText).subscribe(
      (res: ItemList) => {
        this.products = res;
        this.Breadcrumb.categories = this.products.categories;
      },
      error => {
        console.log(error)
      })
    );
  }
}

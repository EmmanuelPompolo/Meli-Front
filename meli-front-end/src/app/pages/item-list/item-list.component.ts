import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { BreadcrumbService } from 'src/app/core/service/breadcrumb.service';
import { DataService } from 'src/app/core/service/data.service';
import { ProductList } from 'src/app/shared/models/product-list.model';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit, OnDestroy {

  AllSubscriptions: Subscription = new Subscription();
  searchText = '';
  products: ProductList = new ProductList();
  categories = [];

  @ViewChild('breadcrumb') Breadcrumb;

  constructor(private route: ActivatedRoute,
              private dataService: DataService,
              private breadcrumbService: BreadcrumbService) { }

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
      (res: ProductList) => {
        this.products = res;
        this.Breadcrumb.categories = this.products.categories;
        this.breadcrumbService.setCategories(this.products.categories);
      },
      error => {
        console.log(error)
      })
    );
  }
}

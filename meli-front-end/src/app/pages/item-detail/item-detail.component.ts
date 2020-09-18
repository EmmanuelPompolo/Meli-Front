import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { BreadcrumbService } from 'src/app/core/service/breadcrumb.service';
import { DataService } from 'src/app/core/service/data.service';
import { ProductDetail } from 'src/app/shared/models/product-detail.model';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss']
})
export class ItemDetailComponent implements OnInit {

  AllSubscriptions: Subscription = new Subscription();
  id: string = '';
  productDetail: ProductDetail = new ProductDetail();

  @ViewChild('breadcrumb') Breadcrumb;

  constructor(private route: ActivatedRoute,
              private dataService: DataService,
              private breadcrumbService: BreadcrumbService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')

    console.log('LLego con este Id: ' + this.id);

    if(this.id !== ''){
      this.getDetailProduct();
    }

  }

  getDetailProduct() {
    this.AllSubscriptions.add(this.dataService.getItemDetail(this.id).subscribe(
      (res: ProductDetail) => {
        this.productDetail = res;
        this.Breadcrumb.categories = this.breadcrumbService.getCategories();
        console.log(this.productDetail)
      },
      error => {
        console.log(error)
      })
    );
  }



}

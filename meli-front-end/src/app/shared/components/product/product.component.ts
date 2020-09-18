import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UtilsService } from 'src/app/core/service/utils.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {


  @Input() id: number;
  @Input() title: string;
  @Input() currency: string;
  @Input() price: string;
  @Input() decimals: string;
  @Input() picture: string;
  @Input() condition: string;
  @Input() free_shipping: boolean;
  @Input() address: string;

  constructor(private router: Router,
              private utils: UtilsService) { }

  ngOnInit(): void {
  }

  goToDetail(id) {
    this.router.navigate(["../items/" + id]);
  }

  getPrice(){
    return this.utils.setFormatNumber(parseInt(this.price));
  }

}

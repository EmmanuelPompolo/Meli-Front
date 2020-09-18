import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
  @Input() picture: string;
  @Input() condition: string;
  @Input() free_shipping: boolean;
  @Input() address: string;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToDetail(id) {
    this.router.navigate(["../items/id:" + id]);
  }

}

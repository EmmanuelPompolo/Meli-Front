import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/core/service/data.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit, OnDestroy {

  AllSubscriptions: Subscription = new Subscription();
  searchText = '';

  constructor(private route: ActivatedRoute,
    private dataService: DataService) { }

  ngOnInit(): void {
    this.route.queryParams
      .subscribe((params) => {
        this.searchText = params['search'];
      });
      debugger
    this.getListProducts();
  }

  ngOnDestroy(): void {
    if (this.AllSubscriptions) {
      this.AllSubscriptions.unsubscribe();
    }
  }

  getListProducts() {
    console.log('ingreso a getListProducts')
    this.AllSubscriptions.add(this.dataService.getItems(this.searchText).subscribe(
      (res) => {
      debugger
        console.log(res);
      },
      error => {
        console.log(error)
      })
    );
  }
}

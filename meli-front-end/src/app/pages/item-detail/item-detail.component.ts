import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/core/service/data.service';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss']
})
export class ItemDetailComponent implements OnInit {

  AllSubscriptions: Subscription = new Subscription();
  id: string = '';

  constructor(private route: ActivatedRoute,
              private dataService: DataService) { }

  ngOnInit(): void {
    
    this.id = this.route.snapshot.paramMap.get('id')

    console.log('LLego con este Id: ' + this.id);

    if(this.id !== ''){
      this.getDetailProduct();
    }

  }

  getDetailProduct() {
    this.AllSubscriptions.add(this.dataService.getItemDetail(this.id).subscribe(
      (res) => {
      
      },
      error => {
        console.log(error)
      })
    );
  }



}

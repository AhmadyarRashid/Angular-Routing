import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-articles-details',
  templateUrl: './articles-details.component.html',
  styleUrls: ['./articles-details.component.css']
})
export class ArticlesDetailsComponent implements OnInit {

  id;
  constructor(private activatedRoute: ActivatedRoute) {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(this.id);
  }

  ngOnInit() {
  }

}

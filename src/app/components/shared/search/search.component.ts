import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  model : any = {};
  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    let queryParams = this.route.snapshot.queryParams;
    this.model.search = queryParams.search;
  }

  searchTextChanged () {
    let queryParams = Object.assign({}, this.route.snapshot.queryParams);
    if (this.model.search) {
      queryParams.search = this.model.search;
    } else {
      delete queryParams.search;
    }
    this.router.navigate(['/shop'], { queryParams });
  }
}

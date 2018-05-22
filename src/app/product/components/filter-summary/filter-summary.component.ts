import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AppState } from './../../../interfaces';
import { Store } from '@ngrx/store';
import { SearchActions } from './../../../search/actions/search.actions';
import { getFilters } from './../../../search/reducers/selectors';

@Component({
  selector: 'filter-summary',
  templateUrl: './filter-summary.component.html',
  styleUrls: ['./filter-summary.component.scss']
})
export class FilterSummaryComponent implements OnInit {
  filters$: Observable<any>;
  constructor(private store: Store<AppState>,
    private search: SearchActions) {  
     
     
       
      }

  ngOnInit() {

    this.filters$ = this.store.select(getFilters);

   
  }

  removeFilter(removedFilter) {
    this.store.dispatch(this.search.removeFilter(removedFilter));
  }

  clearAllFilters(){

    this.store.dispatch(this.search.removeAllFilters());
  }

}

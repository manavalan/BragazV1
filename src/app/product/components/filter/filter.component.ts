import { Component, OnInit,Input} from '@angular/core';
import { AppState } from './../../../interfaces';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { SearchActions } from './../../../search/actions/search.actions';
import { getFilters } from './../../../search/reducers/selectors';

@Component({
  selector: 'filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
@Input() productFilter;
@Input() productFilterIds;
searchFilters$: Observable<any>;
selectedFilters = [];
public selected:any;
PriceRange:any;
  constructor(private store: Store<AppState>,
    private searchActions: SearchActions) {
      this.searchFilters$ = this.store.select(getFilters);
      this.searchFilters$.subscribe(data => {
        this.selectedFilters = data;
        console.log("selectedFilters");
        console.log(data);
      });
     }
  someRange2config: any = {
    behaviour: 'drag',
    connect: true,
    step:100,   
    range: {
      min: 0,
      max: 1200
    }
  };
  ngOnInit() {
    this.PriceRange =[0,1200];
 
  }

  isActive(item){
    return this.selected === item;
  }
  saverange(value){ console.log(value);}

  selectedFilter(filterData, checked) {
    if (checked) {
      this.store.dispatch(this.searchActions.addFilter(filterData));
    } else {
      this.store.dispatch(this.searchActions.removeFilter(filterData));
    }
  }

  isChecked(filterData) {
     let result = false;
    this.selectedFilters.forEach((filter) => {   
      if (filter.ProductTagValueId === filterData.ProductTagValueId) {
        result = true;
      }
    });
    return result;
  }
  

}

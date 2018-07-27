import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { ApiService } from '@app/home/services/api.service';
import { Joke } from '@app/home/models/joke';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-ff-test-page',
  templateUrl: './ff-test-page.component.html',
  styleUrls: ['./ff-test-page.component.scss']
})
export class FfTestPageComponent implements OnInit {

  jokes: Joke[];

  errorMessage: string;

  searchForm: FormGroup = new FormGroup({
    query: new FormControl(''),
  });

  constructor(private apiService: ApiService) { }

  ngOnInit() {

  }

  findJokes() {
    this.errorMessage = '';
    console.log(this.searchForm);
    this.apiService.findJokes(this.searchForm.value.query)
      .subscribe(res => {
      this.jokes = res['result'];
    }, error => {
        if (error.status === 404) {
          this.errorMessage = `Sorry, couldn't find jokes... Please `;
        } else {
          this.errorMessage = error.message;
        }
    });
  }

}

import { CountriesService } from './../../services/countries.service';
import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-capital-page',
  standalone: false,

  templateUrl: './by-capital-page.component.html',
  styles: ``
})
export class ByCapitalPageComponent {

  public countries: Country[] = [];

  constructor(private countriesService: CountriesService) {}

  searchByCapital(term: string):void {
    // console.log("by capital");
    // console.log({term});
    this.countriesService.searchCapital(term)
      .subscribe(countries => {
        this.countries = countries;
      });
    console.log({term});

  }
}

import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { StarWarsCallService } from 'src/app/services/star-wars-call.service';
import { environment } from 'src/environments/environment';

@Component({
	selector: 'app-header',
	changeDetection: ChangeDetectionStrategy.OnPush,
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
	searchText: string;
	numbers: number[];

	constructor(private starWarsService: StarWarsCallService, private cdr: ChangeDetectorRef) {
		// we create a list with the amount of items that we have put in the configuration
		this.numbers = Array(environment.maxSaved).fill(0).map((x, i) => i);

	}

	ngOnInit(): void {
	}

	/**
	 *  We save and register the change
	 */
	saveSearch() {
		this.starWarsService.unshiftSearch(this.searchText)
	}

	/**
	 * we send the selected search if it exists to the EventEmitter
	 * @param number 
	 */
	doSearch(number) {
		let search = this.starWarsService.getSearch()
		if (search[number]) {
			this.searchText = search[number];
			this.starWarsService.emitSearched(search[number])
		}

	}

	/**
	 * We force it to refresh when loading the content
	*/
	ngAfterContentChecked() {
		this.cdr.detectChanges();
	}
}

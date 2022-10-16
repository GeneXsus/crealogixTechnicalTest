import { Component, OnInit, ChangeDetectionStrategy, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';
import { StarWarsCallService } from 'src/app/services/star-wars-call.service';
@Component({
	selector: 'app-films-list',
	templateUrl: './films-list.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
	styleUrls: ['./films-list.component.css']
})
export class FilmsListComponent implements OnInit {
	private listSubscription$: Subscription;
	private searchSubscription$: Subscription;
	private subscriptions: Subscription[] = []
	public listItems;
	public nextItem;
	public beforeItem;
	public searched = ''


	constructor(private activatedRoute: ActivatedRoute, private router: Router, public starWarsService: StarWarsCallService, private cdr: ChangeDetectorRef) { }



	/**
	 * when we start we check if it has returned and if we were on another page, to reload that data
	 */
	ngOnInit(): void {

		let url = environment['films']
		if (localStorage.getItem('rollBack')) {
			url = localStorage.getItem('rollBackUrl')
			localStorage.removeItem('rollBack')
		} else {
			localStorage.removeItem('needRollBack')
			localStorage.removeItem('rollBackUrl')
			localStorage.removeItem('rollBack')
		}

		// we subscribe to the EventEmitter to be able to update the searched data
		this.searchSubscription$ = this.starWarsService.searched.subscribe((search) => {
			this.searched = search;
			this.cdr.detectChanges();
		})

		//we add the subscription to the array to be able to manage in mass
		this.subscriptions.push(this.searchSubscription$)

		// we load the list
		this.loadList(url)


	}

	/**
	 * function to load the list and modify its data
	 * @param url {string}
	 */
	loadList(url: string) {
		this.listSubscription$ = this.starWarsService.callUrl(url)
			.subscribe(
				resp => {
					// we map the result to the time we call to retrieve the homeworld
					resp.results.map(item => {
						item.url = this.getUrlItem(item.url);
						return item;
					})
					this.listItems = resp.results;
					this.nextItem = resp.next;
					this.beforeItem = resp.previous;

				})
		//we add the subscription to the array to be able to manage in mass
		this.subscriptions.push(this.listSubscription$)
	}

	/**
	 *  We save the page to which we change in case we can load it again
	 * @param url 
	 */
	changePage(url: string) {
		localStorage.removeItem('rollBack')
		localStorage.setItem('rollBackUrl', url)
		localStorage.setItem('needRollBack', 'true')

		this.loadList(url)
	}

	/**
	 * We modify the url of the item to be able to create the link
	 * @param url 
	 * @returns string
	 */
	getUrlItem(url: string): string {
		let urlSplit = url.split('/api');
		return urlSplit[1];

	}


	/**
	 * We force it to refresh when loading the content
	 */
	ngAfterContentChecked() {
		this.cdr.detectChanges();
	}

	/**
	 * When the component is destroyed we eliminate the subscriptions
	 */
	ngOnDestroy(): void {

		//unsubcribe all subscription
		this.subscriptions.forEach((subscription) => subscription.unsubscribe())
	}




}
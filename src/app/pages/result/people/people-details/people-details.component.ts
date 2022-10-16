import { Component, OnInit, ChangeDetectionStrategy, OnDestroy,ChangeDetectorRef } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';
import { StarWarsCallService } from 'src/app/services/star-wars-call.service';
@Component({
	selector: 'app-people-details',
	templateUrl: './people-details.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
	styleUrls: ['./people-details.component.css']
})
export class PeopleDetailsComponent implements OnInit, OnDestroy {
	private detailsSubscription$: Subscription;
	private planetSubscription$:Subscription
	private subscriptions: Subscription[] = []
	public detailsItems;


	constructor(private activatedRoute: ActivatedRoute, private router: Router, private starWarsService: StarWarsCallService, private cdr: ChangeDetectorRef,
		private location: Location) { }



	/**
	 * we collect the id and load the detail
	 */
	ngOnInit(): void {
	
		const {  id } = this.activatedRoute.snapshot.params;
		this.loadDetails(`${environment['people']}${id}`);


	}

	/**
	 * function to load the details and modify its data
	 * @param url {string}
	 */
	loadDetails(url){
		this.detailsSubscription$ = this.starWarsService.callUrl(url)
			.subscribe(
				resp => {
						// we collect and modify homeworld data
						this.planetSubscription$= this.starWarsService.callUrl(resp.homeworld).subscribe(
							response => {
								resp.homeworld= response['name'];
								
							}
							
						);
						resp.height= resp.height>200?'high':resp.height<100?'low':'normal';
						//we add the subscription to the array to be able to manage in mass	
					 	this.subscriptions.push(this.planetSubscription$)
						
					
					this.detailsItems= resp;
				
					

				})
		
		//we add the subscription to the array to be able to manage in mass	
		this.subscriptions.push(this.detailsSubscription$)
	}

	/**
	 * When we return we save that we are returning so that the data of the page we were on can be loaded
	 */
	rollBack(){
		if(localStorage.getItem('needRollBack')){
			localStorage.removeItem('needRollBack')
			localStorage.setItem('rollBack', 'true')
		}
		this.router.navigateByUrl('people');
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
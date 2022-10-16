import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
	providedIn: 'root'
})
export class StarWarsCallService {
	// private rollBackPagUrl: string|null= null
	// private rollBack: boolean= false

	searched:EventEmitter<string> = new EventEmitter();
	
	constructor(private http: HttpClient) {

	}

	/**
	 * http call to retrieve data
	 * @param url 
	 * @returns 
	 */
	callUrl(url): Observable<any> {
		return this.http.get(url);
	}

	/**
	 * we save the search at the beginning of the array, if it exists
	 * @param text 
	 */
	unshiftSearch(text:string){
		//check if the array exists or initialize it
		let searchArray:string[]=localStorage.getItem('searchArray')?JSON.parse(localStorage.getItem('searchArray')):[];
		// we propagate the search with the EventEmitter
		this.emitSearched(text);
		searchArray.unshift(text);
		//  we adjust the size of the array so that one larger than necessary is not created
		if(searchArray.length>environment.maxSaved){
			searchArray.length= environment.maxSaved;
		}
		// we save the array
		localStorage.setItem('searchArray',JSON.stringify(searchArray));
	}

	/**
	 * We propagate the search with the EventEmitter
	 * @param text 
	 */
	emitSearched(text:string){
		this.searched.emit(text);

	}

	/**
	 * we retrieve the search array
	 * @returns 
	 */
	getSearch():string[]{
		return localStorage.getItem('searchArray')?JSON.parse(localStorage.getItem('searchArray')):[];

	}
	

	



}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'appFilter' })
export class FilterPipe implements PipeTransform {
  /**
   * Pipe filters the list of elements based on the search text provided
   *
   * @param items list of elements to search in
   * @param searchText search string
   * @returns list of elements filtered by search text or []
   */
  transform(items: any[], searchText: string): any[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLocaleLowerCase();
    return items.filter(o =>{

        return Object.keys(o).some(k => {
			// Depending on the type of variable, one thing or another is done. Can be extended for more types if needed
			switch (typeof o[k]) {
				case 'string':
				
					return o[k].toLowerCase().includes(searchText.toLowerCase())
				break;
				case 'number':
				case 'boolean':
					return o[k].toString().toLowerCase().includes(searchText.toLowerCase())
				break;
			
				default:
					return false
				break;
			}
			})
	
	})
  }
}
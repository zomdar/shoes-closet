import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], searchText: string): any[] {
    if(!items) return [];
    if(!searchText) return items;

    searchText = searchText.toLowerCase();

    return items.filter( it => {
      return it.name.toLowerCase().includes(searchText);
    });
    // return items.filter(item => {
    //   return (item.name.toLowerCase().indexOf(searchObject.name.toLowerCase()) >= 0 && item.brand.toLowerCase().indexOf(searchObject.brand.toLowerCase()) >= 0);
    // });
  }

}

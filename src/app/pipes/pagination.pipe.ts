import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pagination'
})
export class PaginationPipe implements PipeTransform {
  transform(items: any[], currentPage: number, pageSize: number): any[] {
    if (!items || !items.length) return [];
    
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    
    return items.slice(startIndex, endIndex);
  }
}
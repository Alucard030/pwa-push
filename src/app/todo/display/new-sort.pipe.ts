import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'newSort'
})
export class NewSortPipe implements PipeTransform {

  transform(value: Array<any>, ...args: unknown[]): unknown {
    return value.sort();
  }

}

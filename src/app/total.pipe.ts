import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'total'
})
// export class TotalPipe implements PipeTransform {
//
//   transform(value: any, arg: string): any {
//     return value.reduce((prev,item)=>prev+item[arg],0);
//
//   }
//
// }
export class TotalPipe implements PipeTransform {
   transform(value: Array<object>, args?:string ): string {
       if(args === 'stock' || args === 'price'){
           return value.reduce( (prev,current) => prev+current[args], 0);
       }
   }
}

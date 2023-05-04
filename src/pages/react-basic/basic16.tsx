export function sum(a: number, b: number): number {
    return a + b;
}

export function minus(a: number, b: number): number|string {
    if(a>=b){
      return a - b;
    }else{
      return "aはbより大きい値を入れてください";
    }
}
  
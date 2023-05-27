
export function ArrayAddition(Arr: number[]) : number
{
  let iSum = 0;
  let iCnt = 0;
  for(iCnt=0; iCnt<Arr.length; iCnt++)
  {
    iSum = iSum + Arr[iCnt];
  }
  return iSum;
}

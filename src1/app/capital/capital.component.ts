export function CountCapital(str : string) 
{
  let i = 0;
  let iCap = 0;
  for(i = 0; i<str.length; i++)
  {
    if(str[i]>= "A" && str[i]<="Z")
    {
      iCap++;
    }
  }
  
  return iCap;
}

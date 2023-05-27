export function CheckPassword(pass : string) : boolean
{
  let i = 0;
  let iCap = 0;
  let iSmall=0;
  let iSpec=0;
  let iDigits=0;
  let regexSpec = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  let regexDig = /^\d+$/;

  for(i=0; i<pass.length; i++)
  {
    if(pass[i]>= "A" && pass[i]<="Z")
    {
      iCap++;
    }
    if(pass[i]>="a" && pass[i]<="z")
    {
      iSmall++;
    }
    if(regexSpec.test(pass[i]))
    {
      iSpec++;
    }
    if(regexDig.test(pass[i]))
    {
      iDigits++;
    }
  }

  if(iCap>=2 && iSmall>=3 && iSpec>=1 && iDigits>=2)
  {
    return true;
  }
  else
  {
    return false;
  }
}

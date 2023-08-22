export default function validarParéntesis(parentesis: string): boolean {
  const OPEN_PARENTHESIS = "(";
  let open: string[] = [];
  let close: string[] = [];
  const parenthesis: string [] = Array.from(parentesis);
  
  for(const symbol of parenthesis){
    if(symbol === OPEN_PARENTHESIS){
      open.push(symbol);
    } else {
      close.push(symbol);
    }
  }
  
  return open.length === close.length;
}


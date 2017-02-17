//Your code below
function buildPath(p,n){
  let path=[];
  for(let a=0;a<n;a++){
    let r=Math.random();
    if(r<=p){
      path.push(false);
    }
    else{
      path.push(true);
    }
  }
  path[n]=true;
  return path;
}

function stroll(path,index){
  if(index==path.length-1){
    return 1;
  }
  else if(path[index]==false){
    return 0;
  }
  else{
    return stroll(path,index+1);
  }
}

function rsj(path,index){
  if(index==path.length-1){
    return 1;
  }
  else if(path[index]==false){
    return 0;
  }
  else if(index>path.length-1){
    return 0;
  }
  else{
    return rsj(path,index+1)+rsj(path,index+2)+rsj(path,index+5);
  }
}



//Test code
let testpath1 = buildPath(0.10,15);
let testpath2 = buildPath(0.50,15);
console.log(testpath1);
console.log(testpath2);
console.log("---------------------");
console.log(stroll([true,false,true],0));
console.log(stroll([true,true,true],0));
console.log(rsj(testpath1,0));
console.log(rsj(testpath2,0));

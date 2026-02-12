function stringChop(str, size) {
  if (str==null) return [];
	size=Number(size);
	let result=[];
	for(let i=0;i<str.length;i+=size){
		let end=Math.min(i+size,str.length);
		result.push(str.slice(i,end));	
	}
	return result
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));

export const categoryReturn =(data, category, num, type)=>{
    if(data instanceof Array){
        return data.reduce((acc, post)=>{
            if(acc.length === num) return acc;
            if(post[type] === category) acc.push(post);
            return acc;
    },[])  
    }
    else{return []}
   
 }

 export const filterCat =(data,obj)=>{
     if(!(data instanceof Array)) return [];
     const {category,headings,abstract_cat} =obj
     return data.filter(value=>
        value['category'] === category && value['headings'] ===headings && value['abstract_cat']=== abstract_cat   
     )
 }

 export function spliter(arr,num){
  let newArr =[];
  let start=0;
  let end = num;
  let 	reminder =arr.length%num;
  let length;
	if(reminder >0){
	 length = (arr.length-reminder)/num+1;}else{
		length = (arr.length-reminder)/num;
	}
	for(let i=0;i<length; i++){
		if(i==length-1&& reminder >0){
			newArr[i]  =arr.slice(end);
		}
		newArr[i]= arr.slice(start,end);
		start+=num;
		end +=num;
	}
return newArr;
}







 //filterCat(data, category, 'headings', 'abstract_cat', query, 'not', '')
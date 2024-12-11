import Navigation from "./Navigation"
const Array=()=>{

let arr=[2,4,4,4,5,2]
let prefix=0
let result=[]


for(let i=0;i<arr.length;i++){
    prefix += arr[i]
    if(prefix%2===0){
        result.push(prefix)
    }else{
        result.push(arr[i])
    }
}


console.log(result.join(" "))


    return(
        <>
        <Navigation/>
        </>
    )
}
export default Array()
import Navigation from "./Navigation";

const Upper=()=>{
     let name="porfile"
     let convertion=2
     let position=3;
     let result=name.split("")
     if(convertion===1){
     result[position+1]=result[position+1].toLowerCase()
     }else if(convertion===2){
           
        result[position+1]=result[position+1].toUpperCase()
     }
     console.log(result.join(""))
    return(
        <>
        <Navigation/>
        </>
    )
}
export default Upper()
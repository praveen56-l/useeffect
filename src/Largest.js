import Navigation from './Navigation';

const Largest=()=>{
    let array = [1, 6, 4, 0, 3]; 
    let maxIndex = 0;
    let minIndex = 0;   
    
    for (let i = 0; i < array.length; i++) {
      if (array[i] > array[maxIndex]) {
        maxIndex = i;
      }
      if (array[i] < array[minIndex]) {
        minIndex = i;
      }
    }
    let calculate = Math.abs(maxIndex - minIndex);
    console.log(calculate);

return(
    <>
    <Navigation/>
    </>
)
}
export default Largest()

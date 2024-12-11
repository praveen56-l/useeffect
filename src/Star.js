import Navigation from "./Navigation"
const Star=()=> {
    let rows = 5;
    let cols = 3;

    for (let i = 1; i <= rows; i++) {
        let line = "";
        for (let j = 1; j <= cols; j++) {
            if (i === 1 || i === rows || j === 1 || j === cols) {
                line += "*";
            } else {
                line += " ";
            }
        }
        console.log(line); 
    }
    return(
        <>
        <Navigation/>
        
        </>
    )
}
export default Star()

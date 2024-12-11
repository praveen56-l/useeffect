import Navigation from "./Navigation"

const Oddevennumber = () => {

    let num = 1234
    let oddnumber = " "
    let evennumber = " "

    let result = num.toString()
    for (let i = 0; i < result.length; i++) {
        let value = parseInt(result[i]);
        if (value % 2 === 0) {
            evennumber += value +"";
        } else {
            oddnumber += value +"";
        }
    }
    console.log("evennumber",evennumber.trim())
    console.log("oddnumber",oddnumber.trim())
    return (
        <>
        </>
    )
}

export default Oddevennumber()

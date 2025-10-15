import {useRef} from "react";
function AddFruit({saveFruits}){
    const fruitRef = useRef();

    const handleFormSubmit = (e)=>{
        e.preventDefault();

        saveFruits(fruitRef.current.value);
        fruitRef.current.value = "";
    }
    return (
        <form onSubmit={handleFormSubmit}>
            <label htmlFor="fruit">Fruits Name</label>
            <input type="text" id="fruit" placeholder="Enter fruits" required ref={fruitRef}/>
            <button type="submit">Add</button>
        </form>
    )

}
export default AddFruit
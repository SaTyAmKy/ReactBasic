import {useState} from "react";
function Toggle({value}){

    const [visible,setVisible] = useState(false);
    return (
        <>
        <button onClick={() => setVisible(!visible)} disabled={!value}>{visible?"Hide":"Show"}</button>
        {visible && <p>{value}</p>}

        
        </>
    )
}
export default Toggle;
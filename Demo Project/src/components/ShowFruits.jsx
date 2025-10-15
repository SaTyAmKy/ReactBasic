import Fruit from "./Fruit";
function ShowFruits({fruits}){
     return (
        <ul>
        <Fruit fruits={fruits}/>
        </ul>
     )

}
export default ShowFruits
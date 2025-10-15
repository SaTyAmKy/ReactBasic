function Fruit({fruits}){
    return(
        <>
    {
        fruits.map((fruits,i) => 
        <li key={i}>{fruits}</li>
            
        )}
        </>
        ) 
}
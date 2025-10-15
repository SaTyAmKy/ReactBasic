function Welcome({isLogined}) {
    // if(isLogined){
    //     return <h1>Hello my dear friends</h1>
    // }
    // else{
    //     return <h1>Error</h1>

    // }
    return isLogined ? <h1>Hello my dear friends</h1> : <h1>Error</h1>
}
export default Welcome;
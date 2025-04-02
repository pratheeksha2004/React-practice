function Filter({numbers}){
    const even=numbers.filter((number)=>number%2===0);
    const odd=numbers.filter((number)=>number%2===1);
    return(
        <>
         {even} <br/>
         {odd}
        </>

    )
}
export default Filter;
function NumberLists({numbers}){
     
                  return(
                    <>
                    <ul>
                    {
                        numbers.map((number)=>
                        <li>{number}</li>)
                    }
                    </ul>
                  
                    </>
                  )  
}
export default NumberLists;
import { useState } from "react";

const withCounrter = (OriginalComponent)=>{
//return enhanced component
const NewComponent =(props)=>{
    const [count, setCount] = useState(0);
    const Increment = ()=>{
        setCount((count)=> count+1)
        
    }
    return (
        <div>
            {count}
          <OriginalComponent increment={Increment} {...props} />
        </div>
      )
    
}
NewComponent.add = OriginalComponent.add        //explicitly add static method to new cmp
return NewComponent
}

export default withCounrter
import { useEffect, useRef, useState } from "react"

const useLazyLoad = (threshold=0.2) => {

    const ref=useRef()
    const [isVisible,setVisible]=useState(false);

    useEffect(()=>{
        const observer=new IntersectionObserver(([entries])=>{

            if(entries.isIntersecting){
                setVisible(true);
                observer.disconnect();
            }

        },{threshold}); 
 
        if(ref.current) observer.observe(ref.current);


        return ()=>{
            if(ref.current) observer.unobserve(ref.current);
        }
    },[threshold])

  return [ref,isVisible];

};
export default useLazyLoad
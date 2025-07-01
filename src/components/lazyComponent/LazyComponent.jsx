import { Suspense } from "react";
import useLazyLoad from "../../hooks/useLazyLoad"

const LazyComponent = ({children,fallback=<div>loading...</div>}) => {

  const[ref,isVisible]=useLazyLoad();

  return (
    <div ref={ref}>
      {isVisible?<Suspense fallback={fallback}>{children}</Suspense>:fallback}
    </div>
  )
}
export default LazyComponent
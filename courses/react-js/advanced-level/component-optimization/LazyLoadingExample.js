import React, { Suspense } from "react";
const LazyComponent = React.lazy(() => import("./LazyComponent"));
const LazyLoadingExample = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </Suspense>
  );
};
export default LazyLoadingExample;

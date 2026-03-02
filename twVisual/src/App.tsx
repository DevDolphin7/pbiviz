// import * as React from "react";
import "../style/App";

export function App(items: powerbi.DataViewCategorical) {
  console.log("App items", items);
  return (
    <div>
      <p>Hello, world!</p>
      <p>{JSON.stringify(items.categories[1].values)}</p>
    </div>
  );
}

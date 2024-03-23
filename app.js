 //how to create nested react element

//   <div id="parent">
        // <div id="child">
        //     <h1>I am h1 Tag</h1>
        // </div>

// </div> 

const parent = React.createElement("div",{id:"parent"},
[
    React.createElement("div",{id:"child1"},
[React.createElement("h1",{},"I am h1 Tag"),React.createElement("h2",{},"I am h2 Tag")]),
React.createElement("div",{id:"child2"},
[React.createElement("h1",{},"I am h1 Tag"),React.createElement("h2",{},"I am h2 Tag")])
]
)
 //creating h1 tag in react
//  const heading = React.createElement("h1",{id:"heading"},"Welcome to React world!");

 //creating root from reactDOM

 const root = ReactDOM.createRoot(document.getElementById("root"));

 //rendering the heading inside root
 root.render(parent);
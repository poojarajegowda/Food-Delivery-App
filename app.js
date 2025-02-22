const parent=React.createElement("div",{id:"parent"},
             [React.createElement("div",{id:"child1"},
             [React.createElement("h1",{},"H1 tag is here"),
             React.createElement("h2",{},"H2 tag is here")]
             ),
             React.createElement("div",{id:"child2"},
             [React.createElement("h1",{},"H1 tag is here"),
             React.createElement("h2",{},"H2 tag is here")]
             )]
)
const root=ReactDOM.createRoot(document.getElementById("header"))
root.render(parent)

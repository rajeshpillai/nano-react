/** @jsx TinyReact.createElement */

const root = document.getElementById("root");

const Step1 = (
  <div>
    <h1 className="header">Hello Tiny React!</h1>
    <h2>(coding nirvana)</h2>
    <div>nested 1<div>nested 1.1</div></div>
    <h3>(OBSERVE: This will change)</h3>
    {2 == 1 && <div>Render this if 2==1</div>}
    {2 == 2 && <div>{2}</div>}
    <span>This is a text</span>
    <button onClick={() => alert("Hi!")}>Click me!</button>
    <h3>This will be deleted</h3>
    2,3
  </div>
);

TinyReact.render(Step1, root);

const Step2 = (
  <div>
    <h1 className="header">Hello Tiny React!</h1>
    <h2>(coding nirvana)</h2>
    <div>nested 1<div>nested 1.1</div></div>
    <h3>(OBSERVE: I said it!!)</h3>
    {2 == 1 && <div>Render this if 2==1</div>}
    {2 == 2 && <div>{2}</div>}
    <span>This is a text</span>
    <button onClick={() => alert("Hi!")}>Click me!</button>
  </div>
);

setTimeout(() => {
  alert("Re-rendering...");
  TinyReact.render(Step2, root);
}, 3000);

TinyReact.render(Step1, root);


// Render function
// Step 10: Rendering functional Components
var Greeting = function (props) {
  return (
    <div className="greeting">
      <h1 className="header">Functional Component</h1>
      <h2>NOT CHANGED</h2>
    </div>
  );
};

console.log(Greeting);


TinyReact.render(<Greeting />, root);







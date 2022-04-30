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

// setTimeout(() => {
//   alert("Re-rendering...");
//   TinyReact.render(Step2, root);
// }, 3000);

// TinyReact.render(Step1, root);


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


// TinyReact.render(<Greeting />, root);


var GreetingWithProps = function (props) {
  return (
    <div className="greeting">
      <h1 className="header">Functional Component with Props</h1>
      <h2>NOT CHANGED</h2>
      <h3>{props.message}</h3>
    </div>
  );
};

console.log(GreetingWithProps);


// TinyReact.render(<GreetingWithProps message="Good Day"/>, root);


var GreetingWithNested = function (props) {
  return (
    <div className="greeting">
      <h1 className="header">Functional Component</h1>
      <h2>{props.message}</h2>
      <div>{props.children}</div>
    </div>
  );
};
var Footer = function (props) {
  return (
    <h4>{props.children}</h4>
  );
}

// STEP: 13 -> Nested functional Component

// TinyReact.render(
//   <GreetingWithNested message="Good Day!!">
//     <Footer>&copy; free to use</Footer>
//   </GreetingWithNested>,
// root)


// setTimeout(function () {
//   alert("Re-rendering in 3 seconds!!");
//   TinyReact.render(
//     <GreetingWithNested message="Greeeting Voila! Changed!!" />,
//      root
//   );
// }, 3000);

TinyReact.render(
  <GreetingWithNested message="Greeeting Voila! Changed!!" />,
   root
);

setTimeout(function () {
  alert("Re-rendering in 5 seconds!!");
  TinyReact.render(
    <GreetingWithNested message="Greeeting, changed.  Does it work??" />,
     root
  );
}, 5000);







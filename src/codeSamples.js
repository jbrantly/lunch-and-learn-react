export const imperative = `let btn = document.createElement("button");
btn.className = "primary";
btn.innerHTML = "Click Me";`;

export const declarative = `<button class="primary">Click Me</button>`;

export const reactStage1 = `let App = ({name, age}) => 
  <div>
    <p>Hello {who}.</p>
    <p>{who}, you are {age} year(s) old.</p>
  </div>;
ReactDOM.render(<App who="Alice" age="30" />);



ReactDOM.render(<App who="Bob" age="45" />);`;
export const reactStage1Result = `let outerDiv = document.createElement("div");
let hello = document.createElement("p");
p.innerHTML = "Hello Alice.";
let age = document.createElement("p");
age.innerHTML = "Alice, you are 30 year(s) old.";
outerDiv.apendChild(hello);
outerDiv.appendChild(age);


p.innerHTML = "Hello Bob.";
age.innerHTML = "Bob, you are 45 year(s) old.";`;

export const reactStage2 = `ReactDOM.render(<Button text="Goodbye Cruel World" />);`;
export const reactStage2Result = `btn.innerHTML = "Goodbye Cruel World";`;

export const composable = `let a = (input) => a + 1
let b = (input) => b + a(input)`;

export const reactFunctional = `let Button = ({text}) => <button>{text}</button>`;

export const reactComposable = `let Button = ({text}) => <button>{text}</button>;
let QuitButton = () => <Button text="Quit" />;
let MyApp = () => <QuitButton />;`;

export const threejs = `<React3
  width={width}
  height={height}
  mainCamera="camera">
  <scene>
    <perspectiveCamera
      name="camera"
      aspect={width / height}
      far={1000}
      fov={50}
      near={0.1}
    />
    <mesh rotation={cubeRotation}>
	  <boxGeometry 
        width={2}
        height={2} 
        depth={2} />
      <meshNormalMaterial />
    </mesh>
  </scene>
</React3>
`;

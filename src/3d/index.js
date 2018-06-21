import React from "react";
import React3 from "react-three-renderer";
import { Vector3, Euler } from "three";

const width = 500;
const height = 500;
const cameraPosition = new Vector3(0, 0, 5);

class ThreeExample extends React.Component {
  state = {
    cubeRotation: new Euler()
  };

  onAnimate = () => {
    this.setState({
      cubeRotation: new Euler(
        this.state.cubeRotation.x + 0.01,
        this.state.cubeRotation.y + 0.01,
        0
      )
    });
  };

  render() {
    return (
      <React3
        antialias={true}
        alpha={true}
        clearAlpha={0}
        width={width}
        height={height}
        mainCamera="camera"
        onAnimate={this.onAnimate}
      >
        <scene>
          <perspectiveCamera
            name="camera"
            aspect={width / height}
            far={1000}
            fov={50}
            near={0.1}
            position={cameraPosition}
          />
          <mesh rotation={this.state.cubeRotation}>
            <boxGeometry width={2} height={2} depth={2} />
            <meshNormalMaterial />
          </mesh>
        </scene>
      </React3>
    );
  }
}

export default ThreeExample;

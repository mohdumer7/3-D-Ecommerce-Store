import { useRef } from "react";
import "./style.css";
import {
  Float,
  Environment,
  useGLTF,
  PresentationControls,
  ContactShadows,
  Html,
  Text,
} from "@react-three/drei";

import { Perf } from "r3f-perf";

function App() {
  const cube = useRef();
  const computer = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf"
  );

  return (
    <>
      <Perf position="top-left" />
      <Environment preset="city" />
      <color args={["#695b5b"]} attach="background" />

      <PresentationControls
        global
        rotation={[0.13, 0.1, 0]}
        polar={[-0.2, 0.2]}
        azimuth={[-1, 0.75]}
        config={{ mass: 2, tension: 400 }}
        snap={{ mass: 4, tension: 400 }}
      >
        <Float rotationIntensity={0.4}>
          <rectAreaLight
            width={2.5}
            height={1.65}
            intensity={65}
            color={"black"}
            rotation={[-0.1, Math.PI, 0]}
            position={[0, 0.55, -1.15]}
          />
          <primitive object={computer.scene} position-y={-1.2} position-z={1.5}>
            <Html
              transform
              wrapperClass="htmlScreen"
              distanceFactor={1.17}
              position={[0, 1.56, -1.4]}
              rotation-x={-0.256}
            >
              <iframe src="https://e-commerce-full-stack-application.vercel.app/" />
            </Html>
          </primitive>
          <Text
            font="./fonts/helvetiker_regular.typeface.json"
            fontSize={0.5}
            position={[2, 0.75, 2.5]}
            rotation-y={-1.25}
            maxWidth={2}
          >
            Mohd's Store
          </Text>
        </Float>
      </PresentationControls>
      <ContactShadows position-y={-1.4} opacity={0.4} scale={5} blur={2.4} />
    </>
  );
}

export default App;

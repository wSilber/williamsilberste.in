import React, { useRef } from "react";

import { PerspectiveCamera } from "@react-three/drei";

export default function Camera(props) {
  const camera = useRef();

  const group = useRef();

  return (
    <group ref={group} {...props}>
      <PerspectiveCamera name="CustomCamera" ref={camera} makeDefault />
      {props.children}
    </group>
  );
}
import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

function App() {
  const { unityProvider } = useUnityContext({
    loaderUrl: "Build/Build_03.loader.js",
    dataUrl: "Build/Build_03.data",
    frameworkUrl: "Build/Build_03.framework.js",
    codeUrl: "Build/Build_03.wasm",
  });

  return <Unity unityProvider={unityProvider} />;
}
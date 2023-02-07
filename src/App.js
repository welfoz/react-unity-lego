import { Unity, useUnityContext } from "react-unity-webgl";

function App() {
  const { unityProvider } = useUnityContext({
    loaderUrl: "build/lego.loader.js",
    dataUrl: "build/lego.data",
    frameworkUrl: "build/lego.framework.js",
    codeUrl: "build/lego.wasm",
  });

  return (
        <Unity unityProvider={unityProvider} style={{ width: 800, height: 600 }} />
  )
}

export default App;

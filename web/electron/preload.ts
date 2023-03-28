import "react-native-electron/preload";
import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld("litdmobile", {
  hello: () => {
    ipcRenderer.send("blixt-prompt");
    return 123;
  }
});

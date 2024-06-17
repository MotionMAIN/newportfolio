import { createBoard } from "@wixc3/react-board";
import App from "../../../../App";

export default createBoard({
  name: "App",
  Board: () => <App />,
  isSnippet: true,
  environmentProps: {
    canvasWidth: 859,
    canvasHeight: 3220,
    windowWidth: 475,
    windowHeight: 1180,
  },
});

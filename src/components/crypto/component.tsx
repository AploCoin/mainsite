import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { Charts } from "./charts";

const BlockExplorer = () => {  return (
    <ResizablePanelGroup direction="horizontal">
      <ResizablePanel defaultSize={75}>
        <Charts />
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={25}></ResizablePanel>
    </ResizablePanelGroup>
  );
};

export default BlockExplorer;

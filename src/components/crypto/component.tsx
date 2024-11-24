import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { Charts } from "./charts";
import Info from "./info";

const BlockExplorer = () => {  return (
    <ResizablePanelGroup direction="horizontal">
      <ResizablePanel defaultSize={60}>
        <Charts />
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={40}>
        <Info />
      </ResizablePanel>
    </ResizablePanelGroup>
  );
};

export default BlockExplorer;

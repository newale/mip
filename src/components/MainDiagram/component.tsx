import React from 'react';
import ReactFlow, { Background, BackgroundVariant, Elements } from 'react-flow-renderer';

type MainDiagramProps = {
  diagram: Elements
}

const MainDiagram = ({diagram}: MainDiagramProps) => (
  <ReactFlow elements={diagram}>
    <Background
      variant={BackgroundVariant.Dots}
      gap={24}
      size={1}
    />
  </ReactFlow>
)

export default MainDiagram;

import React from 'react';
import ReactFlow, { Elements } from 'react-flow-renderer';

type MainDiagramProps = {
  diagrams: Elements
}

const MainDiagram = ({diagrams}: MainDiagramProps) => (
  <ReactFlow elements={[]} />
)

export default MainDiagram;

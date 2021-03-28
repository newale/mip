import React, { EffectCallback } from 'react';
import { useEffect, useState } from 'react';
import { BaseLayout } from '../src/layouts';
import { default as Sidebar } from '../src/components/sidebar';
import { default as MainDiagram } from '../src/components/maindiagram';
import { Elements } from 'react-flow-renderer';

type DiagramElement = {
  name: String,
  diagram: Elements,
};

type Diagrams = Array<DiagramElement>;

const exampleElements = [
  { id: '1', data: { label: 'Node 1' }, position: { x: 250, y: 5 } },
  { id: '2', data: { label: 'Node 2' }, position: { x: 100, y: 100 } },
  { id: 'e1-2', source: '1', target: '2', animated: true }
];

export default function Home() {
  const builtDiagrams: Diagrams = [
    {name: 'map-1', diagram: exampleElements},
    {name: 'map-2', diagram: exampleElements},
  ];
  const [diagrams, setDiagrams] = useState<Diagrams>(builtDiagrams);
  const [selectedFlowDiagram, setSelectedFlowDiagram] = useState(diagrams[0].diagram);

  return (
    <BaseLayout
      Navigation={<Sidebar diagrams={diagrams} />}
      Content={<MainDiagram diagram={selectedFlowDiagram} />}
    />
  );
}

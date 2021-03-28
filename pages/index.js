import React from 'react';
import { useEffect, useState } from 'react';
import { BaseLayout } from '../src/layouts';
import { default as Sidebar } from '../src/components/sidebar';
import { default as MainDiagram } from '../src/components/MainDiagram';

export default function Home() {
  const [diagrams, setDiagrams] = useState([]);
  const [selectedFlowDiagram, setSelectedFlowDiagram] = useState();

  const buildSelectedDiagram = () => [
    { id: '1', data: { label: 'Node 1' }, position: { x: 250, y: 5 } },
    // you can also pass a React component as a label
    { id: '2', data: { label: <div>Node 2</div> }, position: { x: 100, y: 100 } },
    {
      id: 'e1-2', source: '1', target: '2', animated: true,
    },
  ];

  useEffect(async () => {
    const res = await fetch('http://localhost:3000/api/diagrams');
    const json = await res.json();
    const flowDiagram = buildSelectedDiagram();
    setSelectedFlowDiagram(flowDiagram);
    setDiagrams(json);@
    // setCurrentDiagram('map-1')
  });

  return (
    <BaseLayout
      Navigation={<Sidebar diagrams={diagrams} />}
      Content={<MainDiagram diagram={selectedFlowDiagram} />}
    />
  );
}

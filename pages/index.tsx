import React, { EffectCallback } from 'react';
import { useEffect, useState } from 'react';
import { Elements } from 'react-flow-renderer';
import {Select, Value} from 'baseui/select';
import { BaseLayout } from '../src/layouts';
import { default as Sidebar } from '../src/components/sidebar';
import { default as MainDiagram } from '../src/components/maindiagram';

type DiagramElement = {
  id: String,
  name: String,
  diagram: Elements,
};

type Diagrams = Array<DiagramElement>;

const d1 = [
  { id: '1', data: { label: 'Node 1' }, position: { x: 250, y: 5 } },
  { id: '2', data: { label: 'Node 2' }, position: { x: 100, y: 100 } },
  { id: 'e1-2', source: '1', target: '2', animated: true }
];

const d2 = [
  { id: '1', data: { label: 'Node 1' }, position: { x: 250, y: 5 } },
  { id: '2', data: { label: 'Node 2' }, position: { x: 100, y: 100 } },
  { id: '3', data: { label: 'Node 3' }, position: { x: 250, y: 150 } },
  { id: 'e1-2', source: '1', target: '2', animated: true },
  { id: 'e1-3', source: '2', target: '3', animated: true },
];

const diagrams: Diagrams = [
  {id: 'm1', name: 'Map 1', diagram: d1},
  {id: 'm2', name: 'Map 2', diagram: d2},
];

const getDiagram: any = (selectedDiagram: Value) => {
  const diagram = diagrams.filter(diagram => diagram.id === selectedDiagram[0].id)
  return diagram.length > 0 ? diagram[0].diagram : [];
}

export default function Home() {
  const [selectedDiagram, setSelectedDiagram] = React.useState<Value>([]);
  const selectOptions: Array<Object> = diagrams.map(diagram => ({label: diagram.name, id: diagram.id}))

  const diagram: Elements = selectedDiagram.length > 0 ? getDiagram(selectedDiagram) : [];

  return (
    <BaseLayout
      Navigation={
        <Select
          options={selectOptions}
          value={selectedDiagram}
          placeholder="Select diagram"
          onChange={params => setSelectedDiagram(params.value)}
        />
      }
      Content={<MainDiagram diagram={diagram} />}
    />
  );
}

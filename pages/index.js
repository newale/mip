import { styled, useStyletron } from 'styletron-react';
import ReactFlow from 'react-flow-renderer';
import { BaseLayout } from '../src/layouts';
import { default as Menu } from '../src/components/sidebar';

const elements = [
  { id: '1', data: { label: 'Node 1' }, position: { x: 250, y: 5 } },
  { id: '2', data: { label: <div>Node 2</div> }, position: { x: 100, y: 100 } },
  {
    id: 'e1-2', source: '1', target: '2', animated: true,
  },
];

export default function Home() {
  return (
    <BaseLayout
      Navigation={<Menu />}
      Content={<ReactFlow elements={elements} />}
    />
  );
}

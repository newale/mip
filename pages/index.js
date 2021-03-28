import ReactFlow from 'react-flow-renderer';
import { BaseLayout } from '../src/layouts';
import { default as Sidebar } from '../src/components/sidebar';

const elements = [
  { id: '1', data: { label: 'Node 1' }, position: { x: 250, y: 5 } },
  { id: '2', data: { label: 'Node 2' }, position: { x: 100, y: 100 } },
  {
    id: 'e1-2', source: '1', target: '2', animated: false,
  },
];

export default function Home() {
  return (
    <BaseLayout
      Navigation={<Sidebar />}
      Content={<ReactFlow elements={elements} />}
    />
  );
}

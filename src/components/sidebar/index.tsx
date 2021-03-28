import * as React from 'react';
import { Navigation } from 'baseui/side-navigation';

const constructItems = () => [
  {
    title: 'Map 1',
    itemId: '#map-1',
  }, {
    title: 'Map 2',
    itemId: '#map-2',
  }
];

type SidebarProps = {
  diagrams: Array<Object>,
}

const Sidebar = ({diagrams}: SidebarProps) => {
  const [activeItemId, setActiveItemId] = React.useState(
    '#map-1',
  );
  const items = constructItems();

  return (
    <Navigation
      items={items}
      activeItemId={activeItemId}
      onChange={({ item }) => setActiveItemId(item.itemId)}
    />
  );
};

export default Sidebar;

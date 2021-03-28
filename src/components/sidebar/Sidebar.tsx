import * as React from 'react';
import { Navigation } from 'baseui/side-navigation';

const Sidebar = () => {
  const [activeItemId, setActiveItemId] = React.useState(
    '#map-1',
  );
  const items = [
    {
      title: 'Map 1',
      itemId: '#map-1',
    }, {
      title: 'Map 2',
      itemId: '#map-2',
    },
  ];

  return (
    <Navigation
      items={items}
      activeItemId={activeItemId}
      onChange={({ item }) => setActiveItemId(item.itemId)}
    />
  );
};

export default Sidebar;

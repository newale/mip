import React, {useState} from 'react';
import { Select, Value } from "baseui/select";

type Diagram = {
  name: String,
  diagram: Object,
}

type SidebarProps = {
  diagrams: Array<Diagram>,
  onChangeDiagram: Function,
}

const Sidebar = ({diagrams, onChangeDiagram}: SidebarProps) => {
  const [activeItemId, setActiveItemId] = useState<Value>([]);

  const updateDiagram = (params) => {
    setActiveItemId(params.value);
    onChangeDiagram(params.option.value);
  }

  const selectItems = diagrams.map(diagram => ({label: diagram.name, value: diagram.diagram}))

  return (
    <Select
      options={selectItems}
      value={activeItemId}
      placeholder="Select Map"
      onChange={params => updateDiagram(params)}
    />
  );
};

export default Sidebar;

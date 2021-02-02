import React from "react";
import Dropdown from "react-bootstrap/Dropdown";

const useSortableData = (items, config = null) => {
    const [sortConfig, setSortConfig] = React.useState(config);
    
    const sortedItems = React.useMemo(() => {
      let sortableItems = [...items];
      if (sortConfig !== null) {
        sortableItems.sort((a, b) => {
          if (a[sortConfig.key] < b[sortConfig.key]) {
            return sortConfig.direction === 'ascending' ? -1 : 1;
          }
          if (a[sortConfig.key] > b[sortConfig.key]) {
            return sortConfig.direction === 'ascending' ? 1 : -1;
          }
          return 0;
        });
      }
      return sortableItems;
    }, [items, sortConfig]);
  
    const requestSort = key => {
      let direction = 'ascending';
      if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
        direction = 'descending';
      }
      setSortConfig({ key, direction });
    }
  
    return { items: sortedItems, requestSort };
  }



function Sort(props) {
    return (
        <div>
            <Dropdown className="sort">
                <Dropdown.Toggle variant="dark" id="dropdown-basic">
                    Sort by...
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item onClick={props.name}>Last name</Dropdown.Item>
                    <Dropdown.Item onClick={props.state}>State</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    );
};

export default Sort;
import TableItem from "../table-item";
import React from "react";

const TableBody = ({items, renderId}) => {
    return (
        <tbody>
        {items.map((itemArray, index) => {
            // if(renderId) itemArray.unshift(index + 1);
            return (
                <TableItem
                    renderId={renderId}
                    data={itemArray}
                    key={index}
                />
            );
        })}
        </tbody>
    );
};

export default TableBody;

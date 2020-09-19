import React from 'react';
import './table-item.css';

const TableItem = ({data, renderId}) => {
    return (
        <tr>
            {data.map((text, rowIndex) => {
                return (
                    <td key={rowIndex}>
                        {text}
                    </td>
                );
            })}
        </tr>
    );
}

export default TableItem;

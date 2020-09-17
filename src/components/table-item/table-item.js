import React from 'react';
import './table-item.css';

const TableItem = ({data, renderId}) => {
    return (
        <tr>
            {data.map((text, rowIndex) => {
                const scope = (rowIndex === 0 && renderId) ? "row" : undefined;
                return (
                    <td scope={scope} key={rowIndex}>
                        {text}
                    </td>
                );
            })}
        </tr>
    );
}

export default TableItem;

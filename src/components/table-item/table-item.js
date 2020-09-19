import React from 'react';
import './table-item.css';

const TableItem = ({data, renderId, onClick}) => {
    return (
        <tr {...{onClick}}>
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

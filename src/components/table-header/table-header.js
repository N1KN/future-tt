import React from "react";

const TableHeader = ({columnNames, onClick, renderId = true}) => {
    // if(renderId) columnNames.unshift({text: '#', sortable: true});

    const getSortString = (sortType) => {
        switch (sortType) {
            case 'asc':
                return `-${sortType}`;
            case 'desc':
                return `-${sortType}`;
            default:
                return '';
        }
    };

    const handleClick = (index, curSort) => () => {
        onClick(index, curSort !== 'asc' ? 'asc' : 'desc');
    };

    return (
        <thead className="thead-dark">
        <tr>
            {columnNames.map(({text, sortable, sort}, index) => (
                <th scope="col" key={index}>
                    {text}
                    {sortable ?
                        <span
                            onClick={handleClick(index, sort)}
                            className={`sortable sort${getSortString(sort)}`} /> : null}
                </th>
            ))}
        </tr>
        </thead>
    );
};

export default TableHeader;

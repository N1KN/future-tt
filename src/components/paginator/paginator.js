import React, {} from "react";
import './paginator.css';

const PaginationBar = ({ className: classString = '', currentPageIndex, itemsPerPage, itemsCount, onSetPage }) => {
    const _currentPage = currentPageIndex;
    // const _pages = [...([...Array(11).keys()]).slice(1)];
    const _pages = [];

    return (
        <ul className={`pagination ${classString}`}>
            <li className="page-item">
                <a className="page-link" onClick={() => onSetPage(1)}>&#9145; &#8666;</a>
            </li>
            <li className="page-item">
                <a className="page-link" onClick={() => onSetPage(currentPageIndex - 1)}>&#8666;</a>
            </li>
            {_pages.map((page, index) => (
                <li
                    key={index}
                    className={`page-item disabled ${_currentPage === page ? "active" : ""}`}
                >
                    <a className="page-link" onClick={() => false}>{page}</a>
                </li>
            ))}
            <li className="page-item">
                <a className="page-link" onClick={() => onSetPage(currentPageIndex + 1)}>&#8667;</a>
            </li>
            <li className="page-item">
                <a className="page-link" onClick={() => onSetPage(Math.floor(itemsCount / itemsPerPage))}>&#8667;&#9145;</a>
            </li>
        </ul>
    );
};

export default PaginationBar;

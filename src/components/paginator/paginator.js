import React, { useState, useEffect } from "react";
import './paginator.css';

const PaginationBar = ({ className: classString = '', currentPageIndex, ...props }) => {



    const _currentPage = currentPageIndex;
    const _pages = [...([...Array(11).keys()]).slice(1)];

    return (
        <ul className={`pagination ${classString}`}>
            <li className="page-item disabled">
                <a className="page-link" onClick={() => void (0)}>&#9145; &#8666;</a>
            </li>
            <li className="page-item">
                <a className="page-link" onClick={() => void (0)}>&#8666;</a>
            </li>
            {_pages.map((page, index) => (
                <li
                    key={index}
                    className={`page-item ${_currentPage === page ? "active" : ""}`}
                >
                    <a className="page-link" onClick={() => void (0)}>{page}</a>
                </li>
            ))}
            <li className="page-item">
                <a className="page-link" onClick={() => void (0)}>&#8667;</a>
            </li>
            <li className="page-item disabled">
                <a className="page-link" onClick={() => void (0)}>&#8667;&#9145;</a>
            </li>
        </ul>
    );
};

export default PaginationBar;

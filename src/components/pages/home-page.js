import React from 'react';
import {Link, useRouteMatch} from "react-router-dom";
// import BookList from '../book-list';
// import ShoppingCartTable from '../shopping-cart-table/shopping-cart-table';

const HomePage = () => {
  let { path, url } = useRouteMatch();

  return (
    <React.Fragment>
        {/*{"Hello"}*/}
      <ul>
        <li>
          <Link to={`/table/short/`}>Render Table With Short Data List</Link>
        </li>
        <li>
          <Link to={`/table/long/`}>Render Table With Long Data List</Link>
        </li>
      </ul>
      {/*<BookList />*/}
      {/*<ShoppingCartTable />*/}
    </React.Fragment>
  );
};

export default HomePage;

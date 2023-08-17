import React, { useState, useEffect } from 'react';
import axios from 'axios';

function CategoryList({ categoryList }) {
  return (
    <ul className="dropdown">
      {categoryList.map((category) => (
        <li key={category.categoryId}><a 
      
        href={`#${category.categoryId}`}>
          {category.categoryName}
          </a>
        </li>
      ))}
    </ul>
  );
}

function NavBar() {
  const [categoryList, setData] = useState([]);
  useEffect(() => {
  const fetchData = async () => {
  const result = await axios(
      'http://localhost:8080/api/categories/getall'
    );
    setData(result.data);
  };
  fetchData();
  }, []);

  return (
    <div className="col-lg-9 col-12">
      <div className="menu-area">
        <nav className="navbar navbar-expand-lg">
          <div className="navbar-collapse">
            <div className="nav-inner">
              <ul className="nav main-menu menu navbar-nav">
                <li className="active"><a href="#">Ana Sayfa</a></li>
                <li><a href="#">Kategoriler<i className="ti-angle-down"></i></a>
                  <CategoryList categoryList={categoryList} />
                </li>
                <li><a href="#products">Tüm Ürünler</a></li>
                <li><a href="#aboutus">Hakkımızda</a></li>
                <li><a href="#contactus">İletişim Kur</a></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default NavBar;

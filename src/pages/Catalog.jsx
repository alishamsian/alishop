import React , { useState } from "react";
import Helmet from "../components/Helmet";
import Grid from "../components/Grid";
import ProductCard from "../components/ProductCard";
import CheckBox from "../components/CheckBox";
import Button from "../components/Button";
import InfinityList from "../components/InfinityList";

import productData from "../assets/fake-data/products";
import category from "../assets/fake-data/category";
import colors from "../assets/fake-data/product-color";
import size from "../assets/fake-data/product-size";


const Catalog = () => {
  const inifilter = {
    category: [],
    color: [],
    size: [],
  };

  const productList = productData.getAllProducts();

  const [products, setProducts] = useState(productList);

  const [filter, setFilter] = useState(inifilter);

  // const filterSelect = (type, checked, item) => {
  //   if (checked) {
  //     switch (type) {
  //       case "CATEGORY":
  //         setFilter({
  //           ...filter,
  //           category: [...filter.category, item.categorySlug],
  //         });
  //         break

  //       case "COLOR":
  //         setFilter({ ...filter, color: [...filter.color, item.color] });
  //         break

  //       case "SIZE":
  //         setFilter({ ...filter, size: [...filter.size, item.size] });
  //         break

  //       default:
  //     }
  //   } else {
  //     switch (type) {
  //       case "CATEGORY":
  //         const newCategory = filter.category.filter(
  //           (e) => e !== item.categorySlug
  //         );
  //         setFilter({ ...filter, category: newCategory });
  //         break

  //       case "COLOR":
  //         const newColor = filter.color.filter((e) => e !== item.color);
  //         setFilter({ ...filter, color: newColor });
  //         break
  //       case "SIZE":
  //         const newSize = filter.size.filter((e) => e !== item.size);
  //         setFilter({ ...filter, size: newSize });
  //         break
  //       default:
  //     }
  //   }
  // };

  return (
    <Helmet title="Catalog">
      <div className="catalog">
        <div className="catalog__filter">
          <div className="catalog__filter__widget">
            <div className="catalog__filter__widget__title">
              Lorem, ipsum dolor.
            </div>
            <div className="catalog__filter__widget__content">
              {category.map((item, index) => (
                <div
                  key={index}
                  className="catalog__filter__widget__content__item"
                >
                  <CheckBox
                    label={item.display}
                    // onChange={(input) =>
                    //   filterSelect("CATEGORY", input.checked, item)
                    // }
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="catalog__filter__widget">
            <div className="catalog__filter__widget__title">color</div>
            <div className="catalog__filter__widget__content">
              {colors.map((item, index) => (
                <div
                  key={index}
                  className="catalog__filter__widget__content__item"
                >
                  <CheckBox
                    label={item.display}
                    // onChange={(input) =>
                    //   filterSelect("COLOR", input.checked, item)
                    // }
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="catalog__filter__widget">
            <div className="catalog__filter__widget__title">size</div>
            <div className="catalog__filter__widget__content">
              {size.map((item, index) => (
                <div
                  key={index}
                  className="catalog__filter__widget__content__item"
                >
                  <CheckBox
                    label={item.display}
                    // onChange={(input) =>
                    //   filterSelect("SIZE", input.checked, item)
                    // }
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="catalog__filter__widget">
            <div className="catalog__filter__widget__content">
              <Button size="sm">filter</Button>
            </div>
          </div>
        </div>
        <div className="catalog__content">
          <InfinityList 
            data={products}
          />
        </div>
      </div>
    </Helmet>
  );
};

export default Catalog;

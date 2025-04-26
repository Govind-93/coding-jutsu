import React from "react";
import AutoCompleteSearch from "../AutoCompleteSearch/AutoCompleteSearch";
import Query from "./components/Query";
import { queries } from "./data";
import Drawer from "../Drawer/Drawer";

export const DiscussLayout = () => {
  const [openDrawer, setOpenDrawer] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpenDrawer(true);
    document.body.style.overflow = "hidden";
  };
  const handleDrawerClose = () => {
    setOpenDrawer(false);
    document.body.style.overflow = "unset";
  };

  return (
    <div className="discuss__container">
      <div className="discuss">
        <div className="search__container">
          {/* <SearchBar
          items={queries}
          getKey={(q) => q.question}
          path={(q) => `/discuss/${q.id}`}
          placeholder={"Search here..."}x
        /> */}
          <div className="autoCompleteSearch">
            <AutoCompleteSearch items={[]}></AutoCompleteSearch>
          </div>
          <div className="button add__post" onClick={handleDrawerOpen}>
            <i className="uil uil-plus"></i> New Doubt
          </div>
        </div>

        <div className="queries">
          {queries.map((x) => (
            <Query {...x} description={null} />
          ))}
        </div>
        {!openDrawer && (
          <div className="post__doubt" onClick={handleDrawerOpen}>
            <i className="uil uil-plus-circle"></i>
          </div>
        )}
      </div>
      {openDrawer && (
        <Drawer
          title={"New Doubt"}
          closeDrawerHandler={handleDrawerClose}
          open={openDrawer}
        />
      )}
    </div>
  );
};

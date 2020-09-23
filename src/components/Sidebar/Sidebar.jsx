import React from "react";
import WidgetCategory from "./WidgetCategory";
import WidgetTag from "./WidgetTag";
import WidgetLatestPosts from "./WidgetLatestPosts";
import WidgetLinks from "./WidgetLinks";
import WidgetSearch from "./WidgetSearch";
import WidgetAds from "./WidgetAds";
import config from "../../../data/SiteConfig";
import WidgetTemplate from "./WidgetTemplate";
const Sidebar = ({ tagList, categoryList, latestPostEdges, links }) => {
  return (
    <aside
      className={`sidebar-container width-full ${
        config.sidebarSticky ? "height-full" : ""
      }`}
    >
      <WidgetTemplate />
      <WidgetSearch />

      {latestPostEdges && (
        <WidgetLatestPosts latestPostEdges={latestPostEdges} />
      )}

      {categoryList && <WidgetCategory categoryList={categoryList} />}

      {tagList && <WidgetTag tagList={tagList} />}

      {links && (
        <div className="position-sticky top-zero">
          <WidgetLinks links={links} />
        </div>
      )}
    </aside>
  );
};

export default Sidebar;

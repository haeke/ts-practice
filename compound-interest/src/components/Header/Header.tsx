import React from "react";

const Header: React.SFC<{ headerTitle: string }> = ({ headerTitle }) => {
  return (
    <header className="blog-header py-3">
      <div className="row flex-nowrap justify-content-between align-items center">
        <div className="col text-center">
          <h1 className="display-4">{headerTitle}</h1>
        </div>
      </div>
    </header>
  );
};

export default Header;

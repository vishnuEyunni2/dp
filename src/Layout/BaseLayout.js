import React from "react";

function BaseLayout({ children }) {
  return (
    <div id="baselayout" style={{ margin: `0 auto`, maxwidth: 650, padding: `0 1rem` }}>
      {children}
    </div>
  )
}

export default BaseLayout;
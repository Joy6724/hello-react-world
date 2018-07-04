/**
 * Created by Joy on 2018/7/4.
 */

import React from "react";

function WarningBanner(props) {
  if (!props.warn) {
    return null
  }

  return (
    <div className="warning">
      Warning!
    </div>
  );
}

export default WarningBanner
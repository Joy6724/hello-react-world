/**
 * Created by Joy on 2018/7/4.
 */

import React from "react"

function Search (props) {
  return (
    <form>
      <input type="text" placeholder="搜索文章"/>
      <p>
        <input type="checkbox" />
        {' '}
        只展示已串讲内容
      </p>
    </form>
  )
}

export default Search
 
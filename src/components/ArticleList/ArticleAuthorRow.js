/**
 * Created by Joy on 2018/7/5.
 */

import React from "react"

class ArticleAuthorRow extends React.Component {
  render() {
    return (
      <tr>
        <th colSpan="2">{this.props.author}</th>
      </tr>
    )
  }
}

export default ArticleAuthorRow;

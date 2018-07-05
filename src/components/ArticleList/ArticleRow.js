/**
 * Created by Joy on 2018/7/4.
 */

import React from "react"

class ArticleRow extends React.Component {
  render(){
    const article = props.article;
    return (
      <tr>
        <td>{article.title}</td>
        <td>{article.link}</td>
      </tr>
    )
  }
}

export default ArticleRow
 
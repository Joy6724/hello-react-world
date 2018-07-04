/**
 * Created by Joy on 2018/7/4.
 */

import React from "react"

function Article(props) {
  const article = props.article
  return (
    <tr>
      <td>{article.title}</td>
      <td>{article.author}</td>
    </tr>
  )
}

export default Article
 
/**
 * Created by Joy on 2018/7/4.
 */

import React from "react"
import Article from "./Article"

function ArticleTable(props) {
  let rows = []

  props.articles.forEach((article) => {
    rows.push(
      <Article
        article={article}
        key={article.id}
      />
    )
  })

  return (
    <div>
      <table className="App-table">
        <thead>
        <tr>
          <th>Title</th>
          <th>Author</th>
        </tr>
        </thead>
        <tbody>
        {rows}
        </tbody>
      </table>
    </div>
  )
}

export default ArticleTable

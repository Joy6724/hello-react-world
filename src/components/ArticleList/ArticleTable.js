/**
 * Created by Joy on 2018/7/4.
 */

import React from "react";
import ArticleRow from "./ArticleRow";
import ArticleAuthorRow from "./ArticleAuthorRow";

class ArticleTable extends React.Component {
  render() {
    let rows = [];
    let lastAuthor = null;

    this.props.articles.forEach((article) => {
      if (article.title.indexOf(this.props.filterText) === -1 || (!article.shared && this.props.isShared)) {
        return;
      }
      if (article.author !== lastAuthor) {
        rows.push(
          <ArticleAuthorRow author={article.author} key={article.id + '0'}/>
        );
      }
      rows.push(
        <ArticleRow
          article={article}
          key={article.id}
        />
      );
      lastAuthor = article.author;
    });

    return (
      <div>
        <table className="List-table" border="1">
          <thead>
          <tr>
            <th>文章列表</th>
          </tr>
          </thead>
          <tbody>
          {rows}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ArticleTable;

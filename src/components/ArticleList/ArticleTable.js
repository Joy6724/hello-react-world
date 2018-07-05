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
      console.log('this.props.isShared', this.props.isShared);
      console.log('this.props.filterText', this.props.filterText);
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

    // console.log(rows);

    return (
      <div>
        <table className="App-table" border="1">
          <thead>
          <tr>
            <th>Title</th>
            <th>Link</th>
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

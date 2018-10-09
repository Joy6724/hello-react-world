/**
 * Created by Joy on 2018/7/5.
 */

import React from "react";

class ArticleDetail extends React.Component {
  render() {
    // let article = this.props.article;
    console.log(this.match)
    return (
      <div className="Detail">
        {/*<h3>{article.title}</h3>*/}
        {/*<p>{article.content}</p>*/}
        {/*<p>{article.link}</p>*/}
      </div>
    );
  }
}

export default ArticleDetail;

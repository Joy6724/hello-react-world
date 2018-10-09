/**
 * Created by Joy on 2018/7/4.
 */

import React from "react"
import {Link} from 'react-router-dom';

class ArticleRow extends React.Component {
  render(){
    const article = this.props.article;
    return (
        <tr>
          <td>
            <Link to={`/list/detail/${article.id}`}>{article.title}</Link>
          </td>
        </tr>
    )
  }
}

export default ArticleRow
 
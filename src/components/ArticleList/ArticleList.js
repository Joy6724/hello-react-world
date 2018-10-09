/**
 * Created by Joy on 2018/7/5.
 */

import React from "react"
import Search from './Search';
import ArticleTable from './ArticleTable';

const articles = [
  {
    id: 'a1',
    title: 'http特性分享',
    author: '叶珊珊',
    link: 'https://zhuanlan.zhihu.com/p/35109980',
    content:  '1.输入url到服务器，http的过程 \n2.http的相关特性（tcp连接等） \n3.http简单的缓存原理讲解',
    shared: true
  },
  {
    id: 'a2',
    title: '你不知道的JavaScript--作用域（二）',
    author: '张翔',
    link: 'https://blog.csdn.net/zhangxiang_1102/article/details/79730440',
    content:  '词法阶段 \n欺骗词法（两个机制：eval(…)和with） \n性能 \n小结',
    shared: false
  }
];

class ArticleList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      isShared: false
    };
    this.handleInputTextChange = this.handleInputTextChange.bind(this);
    this.handleInputCheckboxChange = this.handleInputCheckboxChange.bind(this);
  }

  handleInputTextChange(filterText) {
    this.setState({
      filterText: filterText
    });
  }

  handleInputCheckboxChange(isShared) {
    this.setState({
      isShared: isShared
    });
  }

  render() {
    return (
      <div className="List-body">
        <Search
          filterText={this.state.filterText}
          isShared={this.state.isShared}
          onFilterTextInput={this.handleInputTextChange}
          onIsSharedInput={this.handleInputCheckboxChange}
        />
        <ArticleTable
          articles={articles}
          filterText={this.state.filterText}
          isShared={this.state.isShared}
        />
      </div>
    );
  }
}

export default ArticleList;

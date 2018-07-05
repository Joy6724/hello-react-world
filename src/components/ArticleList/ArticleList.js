/**
 * Created by Joy on 2018/7/5.
 */

import React from "react"
import Search from './Search';
import ArticleTable from './ArticleTable';

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
    console.log('filterText: ', filterText)
  }

  handleInputCheckboxChange(isShared) {
    this.setState({
      isShared: isShared
    });
  }

  render() {
    return (
      <div>
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

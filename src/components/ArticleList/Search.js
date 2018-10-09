/**
 * Created by Joy on 2018/7/4.
 */

import React from "react"

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.handleInputTextChange = this.handleInputTextChange.bind(this);
    this.handleInputCheckboxChange = this.handleInputCheckboxChange.bind(this);
  }

  handleInputTextChange(e) {
    this.props.onFilterTextInput(e.target.value);
  }

  handleInputCheckboxChange(e) {
    this.props.onIsSharedInput(e.target.checked);
  }

  render() {
    return (
      <form>
        <input
          type="text"
          placeholder="搜索文章"
          value={this.props.filterText}
          onChange={this.handleInputTextChange}
        />
        <p>
          <input
            type="checkbox"
            checked={this.props.isShared}
            onChange={this.handleInputCheckboxChange}
          />
          {' '}
          只展示已串讲内容
        </p>
      </form>
    );
  }
}

export default Search;
 
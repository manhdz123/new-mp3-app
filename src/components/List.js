import React, { Component } from 'react';

class List extends Component {
  render() {
    return (
      <div className="table-list">
        <table className="table">
          <thead>
            <tr>
              <th>STT</th>
              <th>Tên</th>
              <th>Trạng thái</th>
              <th>Hành động</th>
            </tr>
            <tr>
              <th />
              <th>
                <input type="text" className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
              </th>
              <th>
                <div class="dropdown">
                  <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-expanded="true">
                    Dropdown
                      <span class="caret"></span>
                  </button>
                  <ul class="dropdown-menu" role="menu" aria-labelledby="dropdownMenu1">
                    <li role="presentation"><a role="menuitem" tabindex="-1" href="#">Action</a></li>
                    <li role="presentation"><a role="menuitem" tabindex="-1" href="#">Another action</a></li>
                    <li role="presentation"><a role="menuitem" tabindex="-1" href="#">Something else here</a></li>
                    <li role="presentation"><a role="menuitem" tabindex="-1" href="#">Separated link</a></li>
                  </ul>
                </div>
              </th>
              <th />
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>John</td>
              <td>Doe</td>
              <td>john@example.com</td>
              <td className="ls-td">
                <i className="glyphicon glyphicon-pencil"></i>
                <i className="glyphicon glyphicon-remove" />
              </td>
            </tr>
            <tr>
              <td>Mary</td>
              <td>Moe</td>
              <td>mary@example.com</td>
              <td>mary@example.com</td>
            </tr>
            <tr>
              <td>July</td>
              <td>Dooley</td>
              <td>july@example.com</td>
              <td>july@example.com</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default List;

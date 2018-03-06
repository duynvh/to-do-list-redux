import React, { Component } from 'react';
import { connect } from 'react-redux';
import Item from './Item';
import { filter, includes, orderBy as funcOrderBy } from 'lodash';
class List extends Component {
    render() {
        let { search, items, sort } = this.props;
        let { orderBy, orderDir } = sort;
        let itemsOrigin = (items !== null) ? [...items] : [];
        // Search
        items = filter(itemsOrigin, (item) => {
            return includes(item.name, search);
        });

        //Sort
        items = funcOrderBy(items, [orderBy], [orderDir]);
        const elmItem = items.map((item, index) => {
            return (
                <Item onClickEdit={this.props.onClickEdit} key={index} item={item} index={index}/>
            );
        });
        return (
            <div className="panel panel-success">
                <div className="panel-heading">List Task</div>
                <table className="table table-hover ">
                    <thead>
                        <tr>
                            <th style={{ width: '10%' }} className="text-center">#</th>
                            <th>Task</th>
                            <th style={{ width: '20%' }} className="text-center">Level</th>
                            <th style={{ width: '20%' }}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        { elmItem }
                    </tbody>
                </table>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        items: state.items,
        sort: state.sort,
        search: state.search
    }
}

export default connect(mapStateToProps, null)(List);
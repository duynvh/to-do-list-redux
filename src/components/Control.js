import React, { Component } from 'react';
import Search from './Search';
import Sort from './Sort';
import Toggle from './Toggle';

class Control extends Component {
    render() {
        return (
            <div className="row">
                {/* SEARCH : START */}
                <Search />
                {/* SEARCH : END */}
                {/* SORT : START */}
                <Sort />
                {/* SORT : END */}
                {/* ADD : START */}
                <Toggle />
                {/* ADD : END */}
            </div>
        );
    }
}

export default Control;
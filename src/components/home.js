import React, { Component } from 'react';

class Home extends Component {
    renderList() {
        let div_list = [];

        this.props.list.forEach((item, i) => {
            div_list.push(
                <div key={"list_item" + i}>{item}</div>
            );
        });
        return div_list;
    }

    render() {
        console.log(this.props);
        return (
            <div className="home">
                {this.renderList()}
            </div>
        );
    }
}

export default Home;
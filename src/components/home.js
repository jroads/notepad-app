import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import Row from './row';
import {
    keys,
    setSessionItem,
    setLocalItem,
    getLocalItem
} from '../services/storage.js';

class Home extends Component {
    constructor(props) {
        super(props);

        let existingNotes = getLocalItem(keys.notes);
        if (!existingNotes) {
            existingNotes = []
        }

        this.state = {
            notes: existingNotes
        };
    }

    componentDidMount() {
        let form = {
            title: '',
            content: ''
        };
        setSessionItem(keys.user_form, form);
    }

    onDeleteClick(index) {
        let new_notes = this.state.notes;
        new_notes.splice(index, 1);
        this.setState({ notes: new_notes });

        setLocalItem(keys.notes, new_notes);
    }

    renderList() {
        getLocalItem();
        let div_list = [];
        this.state.notes.forEach((item, i) => {
            div_list.push(
                <Row
                    key={"list_item" + i}
                    onDeleteClick={this.onDeleteClick.bind(this)}
                    lineNumber={i + 1}
                    index={i}
                    item={item}
                />
            );
        });
        return div_list;
    }

    render() {
        console.log(this.props);
        return (
            <div className="home">
                <Link to="/add">
                    <button className="addButton">Add Note</button>
                </Link>
                <div
                    className={this.state.notes.length > 0 ? "home-list" : null}
                >
                    {this.renderList()}
                </div>
            </div>
        );
    }
}

export default Home;
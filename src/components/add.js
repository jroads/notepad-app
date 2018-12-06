import React, { Component } from 'react';

import {
    keys,
    getSessionItem,
    setSessionItem,
    setLocalItem,
    getLocalItem
} from '../services/storage';

class Add extends Component {
    constructor(props) {
        super(props);

        let existingNotes = getLocalItem(keys.notes);
        if (!existingNotes) {
            existingNotes = []
        }

        this.state = {
            title: '',
            content: '',
            notes: existingNotes
        };
    }

    storeFormData() {
        const form = {
            title: this.state.title,
            content: this.state.content
        };
        setSessionItem(keys.user_form, form);
    }

    onContentChange(event) {
        this.setState(
            { content: event.target.value },
            this.storeFormData
        );
    }

    getFormData() {
        const form = getSessionItem(keys.user_form);
        console.log(form);
        if (form) {
            this.setState({
                title: form.title ? form.title : '',
                content: form.content
            });
        }
    }

    componentDidMount() {
        this.getFormData();
    }

    onTitleChange(event) {
        this.setState(
            { title: event.target.value },
            this.storeFormData
        );
    }

    onSubmit() {
        console.log(this.state);
        let title = this.state.title;

        if (title.trim() === "") {
            alert("Title cannot be empty");
            return;
        }
        else {
            let note = {
                title: this.state.title,
                content: this.state.content
            };

            let new_note = this.state.notes;
            new_note.push(note);
            this.setState({
                title: '',
                content: '',
                notes: new_note
            });

            setLocalItem(keys.notes, new_note);

            this.props.history.push('/');
        }
    }

    render() {
        return (
            <div className="add">
                <form>
                    <fieldset>
                        <legend>New Note: </legend>
                        <p>
                            <label htmlFor="title">Title: </label>
                            <input
                                id="title"
                                vlaue={this.state.title || ''}
                                onChange={this.onTitleChange.bind(this)}
                            />
                        </p>
                        <p>
                            <label htmlFor="content">Content:</label>
                            <br />
                            <br />
                            <textarea
                                value={this.state.content}
                                onChange={this.onContentChange.bind(this)}
                            >
                            </textarea>
                        </p>
                    </fieldset>
                </form>
                <button
                    className="saveButton"
                    onClick={this.onSubmit.bind(this)}
                >
                    Save
                </button>
            </div>
        );
    }
}


export default Add;
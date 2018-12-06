import React, { Component } from 'react';
import {
    keys,
    getLocalItem,
    setLocalItem,
    setSessionItem
} from "../services/storage";

class Edit extends Component {
    constructor(props) {
        super(props);

        let existingNotes = getLocalItem(keys.notes);
        if (!existingNotes) {
            existingNotes = []
        }

        this.state = {
            selected: props.location.state.index,
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

    componentDidMount() {
        let note = this.state.notes[this.state.selected];
        this.setState({
            title: note.title,
            content: note.content
        });
    }

    onTitleChange(event) {
        this.setState({
            title: event.target.value
        },
            this.storeFormData
        );
    }

    onContentChange(event) {
        this.setState(
            { content: event.target.value },
            this.storeFormData
        );
    }

    onSubmit() {
        let title = this.state.title;

        if (title.trim() === "") {
            alert("Title cannot be empty");
            let note = this.state.notes[this.state.selected];
            this.setState({
                title: note.title
            });
            return
        }
        else {
            let new_notes = this.state.notes;
            let index = this.state.selected;

            let note = {
                title: this.state.title,
                content: this.state.content
            };

            new_notes.splice(index, 1, note);
            this.setState({ notes: new_notes });

            setLocalItem(keys.notes, new_notes);

            console.log('test');
            this.props.history.push('/');
        }
    }

    render() {
        return (
            <div className="edit">
                <form>
                    <fieldset>
                        <legend>Edit Note</legend>
                        <p>
                            <label htmlFor="title">Title</label>
                            <input
                                id="title"
                                value={this.state.title || ''}
                                onChange={this.onTitleChange.bind(this)}
                            />
                        </p>
                        <p>
                            <label htmlFor="content">Content:</label>
                            <br/>
                            <br />
                            <textarea
                                id="content"
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

export default Edit;
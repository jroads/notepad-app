import React from 'react';
import { Link } from 'react-router-dom';

const Row = function (props) {
    return (
        <div className="row">
            <div>
                <span className="rowNumber">
                    {props.lineNumber}
                </span>
            </div>
            <div>
                <h1>
                    {props.item.title}
                </h1>
            </div>
            <div>
                <Link to={{
                    pathname: "/edit",
                    state: {
                        index: props.index
                    }
                }}>
                    <button className="rowButton">
                        Edit
                </button>
                </Link>
                <button
                    className="rowButton"
                    onClick={() => props.onDeleteClick(props.index)}
                >
                    X
                </button>
            </div>
        </div>
    );
};

export default Row;
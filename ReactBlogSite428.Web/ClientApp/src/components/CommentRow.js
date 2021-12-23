import React from 'react';
import { format } from 'date-fns'


const CommentRow = ({ comment }) => {
    const { name, content, dateCreated } = comment;
    return (
        <>
            <div className="media mb-4">
                <img className="d-flex mr-3 rounded-circle" src={process.env.PUBLIC_URL + "/50x50.png"} alt="" />
                <div className="media-body"> <h5 className="mt-0">{name}
                    <small className="ml-1">{format(new Date(dateCreated), 'cccc MMMM Lo, yyyy')}</small>
                </h5>{content.split("\n").map(function (item) {
                    return (
                        <span>{item}<br /></span>
                    )
                })}
                </div>
            </div>
        </>
    );

}

export default CommentRow;
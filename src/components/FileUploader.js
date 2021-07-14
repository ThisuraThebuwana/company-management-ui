import React, {Component} from 'react';
import "./table.css"

const FileUploader = () => {

    const onChangeHandler = (event) => {

        console.log(event.target.files[0]);

    };
    return (
        <div>
            <input type="file" name="file" onChange={onChangeHandler}/>
        </div>
    );

};

export default FileUploader;

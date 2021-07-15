import React, {useState} from 'react';
import "./table.css"
import SideNavBar from "../components/SideNavBar";
import {host} from "../Constants";
import axios from "axios";
import {Alert, Button} from 'react-bootstrap';

const FileUploader = () => {

    const [selectedFile, setSelecetedFile] = useState(null);
    const [show, setShow] = useState(false);
    const [errMsg, setErrMsg] = useState('');
    const [showSuccess, setShowSuccess] = useState(false);
    const [succMsg, setSuccMsg] = useState('');

    const onChangeHandler = (event) => {

        setSelecetedFile(event.target.files[0]);

    };

    const onUpload = async () => {
        const data = new FormData();
        data.append('file', selectedFile);
        let res = await axios.post(host + '/parcel/upload', data, {withCredentials: true});

        if (res.data.error !== undefined) {
            console.log("res.data.error")
            setErrMsg(res.data.error);
            setShow(true);
        }else if(res.data.message !== undefined){
            console.log(res.data.message);
            setSuccMsg("CSV file uploaded successfully");
            setShowSuccess(true);
        }

    };
    return (
        <div className="Home">
            <div className="row">
                <div className="col-sm-2">
                    <SideNavBar/>
                </div>
                <div className="col-sm-10">
                    <div className="UploadPage">
                        <input type="file" name="file" className="uploadArea" onChange={onChangeHandler}/>
                        <br/>
                        <Button onClick={onUpload} variant="outline-primary">
                            Upload
                        </Button>
                        {show ?
                            <div style={{margin:20}}>
                                <Alert show={show} variant="danger">
                                    <Alert.Heading>Error!</Alert.Heading>
                                    <p>{errMsg}</p>
                                    <hr />
                                    <div className="d-flex justify-content-end">
                                        <Button onClick={() => setShow(false)} variant="outline-danger">
                                            Close
                                        </Button>
                                    </div>
                                </Alert>
                            </div>
                            : null}
                        {showSuccess ?
                            <div style={{margin:20}}>
                                <Alert show={showSuccess} variant="success">
                                    <Alert.Heading>Success!</Alert.Heading>
                                    <p>{succMsg}</p>
                                    <hr />
                                    <div className="d-flex justify-content-end">
                                        <Button onClick={() => setShowSuccess(false)} variant="outline-success">
                                            Close
                                        </Button>
                                    </div>
                                </Alert>
                            </div>
                            : null}
                    </div>
                </div>
            </div>

        </div>
    );

};

export default FileUploader;

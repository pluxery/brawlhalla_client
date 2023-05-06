import React from 'react';
import BhButton from "../../components/UI/button/BhButton";
import BhInput from "../../components/UI/input/BhInput";
import BhSelect from "../../components/UI/select/BhSelect";
import {Button} from 'react-bootstrap'

const CreatePost = () => {
    return (
        <div className={'container-sm'}>
            <div className="mb-3">
                <label htmlFor="formFileMultiple" className="form-label">Preview image</label>
                <input className="form-control" type="file" id="formFileMultiple" multiple/>
            </div>

            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Title</label>
                <input type="text" className="form-control" id="exampleFormControlInput1"
                       placeholder="title"/>
            </div>

            <select className="form-select" aria-label="Default select example">
                <option selected>category</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">new +</option>
            </select>

            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">tags</label>
                <input type="text" className="form-control" id="exampleFormControlInput1"
                       placeholder="#tag1 #tag2 #tag3"/>
            </div>


            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Content</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>

            <Button className={'btn-success'}>create</Button>
        </div>

    );
};

export default CreatePost;
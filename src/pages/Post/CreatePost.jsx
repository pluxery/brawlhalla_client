import React, {useContext, useState} from 'react';
import {Button} from 'react-bootstrap'
import {useHttp} from "../../hooks/http.hook";
import {useNavigate} from "react-router-dom";

const CreatePost = () => {
    const {request} = useHttp()
    const navigate = useNavigate()
    const [form, setForm] = useState({
        title: '',
        content: '',
        category: '',
    })
    const changeInputHandler = event => {
        setForm({...form, [event.target.name]: event.target.value})
    }
    const createPostOnClick = async (e) => {
        e.preventDefault()
        try {
            await request('/posts', 'POST', {...form})
            navigate('/posts')
        } catch (e) {

            console.log(e.message)
        }

    }


    return (
        <div className={'container-sm'}>
            <div className="mb-3">
                <label htmlFor="formFileMultiple" className="form-label">Preview image</label>
                <input className="form-control" type="file" id="formFileMultiple" multiple/>
            </div>

            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Title</label>
                <input type="text"
                       className="form-control"
                       placeholder="title"
                       id={'title'}
                       name={'title'}
                       value={form.title}
                       onChange={changeInputHandler}/>
            </div>

            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Категория</label>
                <input type="text"
                       className="form-control"
                       placeholder="Введите категорию"
                       id={'category'}
                       name={'category'}
                       value={form.category}
                       onChange={changeInputHandler}/>
            </div>

            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">tags</label>
                <input type="text" className="form-control" id="tags" name={'tags'} value={''}
                       placeholder="#tag1 #tag2 #tag3"/>
            </div>


            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Content</label>
                <textarea className="form-control"
                          id="content"
                          name={'content'}
                          value={form.content}
                          onChange={changeInputHandler}
                          rows="3">

                </textarea>
            </div>

            <Button className={'btn-success'}
                    onClick={createPostOnClick}>
                Создать
            </Button>
        </div>

    );
};

export default CreatePost;
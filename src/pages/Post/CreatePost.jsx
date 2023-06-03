import React, {useContext, useState} from 'react';
import {Button} from 'react-bootstrap'
import {useHttp} from "../../hooks/http.hook";
import {useNavigate} from "react-router-dom";
import DangerAlert from "../../components/Alerts/DangerAlert";
import axios from "axios";
import PostService from "../../API/PostService";
import {AuthContext} from "../../context/AuthContext";

const CreatePost = () => {
    const {request} = useHttp()
    const auth = useContext(AuthContext)
    const navigate = useNavigate()
    const [form, setForm] = useState({
        image: '',
        title: '',
        content: '',
        category: '',
        tags: ''
    })
    const [error, setError] = useState()
    const changeInputHandler = event => {
        setForm({...form, [event.target.name]: event.target.value})
    }

    function filterObject(obj) {
        return Object.fromEntries(Object.entries(obj).filter(([key, val]) => val !== ''));
    }

    function tagsToArray(str) {
        return str.split('#').filter(item => item !== '')
    }

    const createPostOnClick = async (e) => {
        e.preventDefault()
        try {
            if (form.tags) {
                form.tags = tagsToArray(form.tags)
            }
            //TODO load image on server
            const filterForm = filterObject(form)
            // const formData = new FormData();
            // formData.append('title', form.title)
            // formData.append('content', form.content)
            //formData.append('title', form.title)
            console.log(filterForm)
            await PostService.createPost(filterForm, auth.token)
            navigate('/posts')
        } catch (e) {
            setError('Данные заполнены некорректно')
            console.log(e.message)
        }

    }


    return (
        <div className={'container-sm'}>
            {error ? <DangerAlert message={error}/> : null}
            <div className="input-group mb-3">

                <input type="file" className="form-control"
                       id="image"
                       name="image"
                       value={form.image}
                       onChange={changeInputHandler}/>
                <label className="input-group-text" htmlFor="image">Upload</label>
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
                <input type="text" className="form-control"
                       id="tags" name={'tags'}
                       onChange={changeInputHandler}
                       value={form.tags}
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
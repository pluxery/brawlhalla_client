import React, {useContext, useState} from 'react';
import {Button} from 'react-bootstrap'
import {useHttp} from "../../hooks/http.hook";
import {useNavigate} from "react-router-dom";
import DangerAlert from "../../components/Alerts/DangerAlert";

const CreatePost = () => {
    const {request} = useHttp()
    const navigate = useNavigate()
    const [form, setForm] = useState({
        title: '',
        content: '',
        category: '',
        tags: ''
    })
    const [error, setError]  =useState()
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
            const filterForm = filterObject(form)
            await request('/posts', 'POST', {...filterForm})
            navigate('/posts')
        } catch (e) {
            setError('Данные заполнены не корректно')
            console.log(e.message)
        }

    }


    return (
        <div className={'container-sm'}>
            {error? <DangerAlert message={error}/>:null }
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
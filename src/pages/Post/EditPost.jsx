import React, { useContext, useEffect, useState } from 'react';
import { Button } from 'react-bootstrap'
import { API_URI, useHttp } from "../../hooks/http.hook";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import PostService from '../../API/PostService';

const EditPost = () => {
    const auth = useContext(AuthContext)
    const [post, setPost] = useState()
    const { id } = useParams()
    const navigate = useNavigate()

    const [form, setForm] = useState({
        title: '',
        content: '',
        category: '',
        tags: '',
    }
    )
    const changeInputHandler = event => {
        setForm({ ...form, [event.target.name]: event.target.value })
    }

    function filterObject(obj) {
        return Object.fromEntries(Object.entries(obj).filter(([key, val]) => val !== ''));
    }

    function tagsToArray(str) {
        return str.split('#').filter(item => item !== '')
    }

    useEffect(() => {
        PostService.getPostById(id).then(r => setPost(r.data))
    },
        [id, setPost])


    const editPostOnClick = async (e) => {
        e.preventDefault()
        if (form.tags) {
            form.tags = tagsToArray(form.tags)
        }
        const filterForm = filterObject(form)
        PostService.editPostById(post, filterForm, auth.token)
        navigate(`/profile/${post?.author.id}`)

    }

    return (
        <div className={'container-sm'}>
            <div className="mb-3">
                <label htmlFor="formFileMultiple" className="form-label">Preview image</label>
                <input className="form-control" type="file" id="formFileMultiple" multiple />
            </div>

            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Название</label>
                <input type="text"
                    className="form-control"
                    placeholder="title"
                    id={'title'}
                    name={'title'}
                    value={form.title ? form.title : post?.title}
                    onChange={changeInputHandler} />
            </div>

            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Категория</label>
                <input type="text"
                    className="form-control"
                    placeholder="Введите категорию"
                    id={'category'}
                    name={'category'}
                    value={form.category ? form.category : post?.category?.name}
                    onChange={changeInputHandler} />
            </div>

            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Тэги</label>

                <input type="text" className="form-control" id="tags" name={'tags'}
                    onChange={changeInputHandler}
                    value={
                        form.tags ? form.tags :
                            post?.tags.map(tag => {
                                return '#' + tag.name + ' '
                            })
                    }
                    placeholder="#tag1 #tag2 #tag3"
                />
            </div>


            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Текст</label>
                <textarea className="form-control"
                    id="content"
                    name={'content'}
                    value={form.content ? form.content : post?.content}
                    onChange={changeInputHandler}
                    rows="3">

                </textarea>
            </div>

            <Button className={'btn-success'}
                onClick={editPostOnClick}>
                Редактировать
            </Button>
        </div>

    );
};

export default EditPost;
import React, { useContext, useEffect, useState } from 'react';
import { Button } from 'react-bootstrap'
import { API_URI, useHttp } from "../../hooks/http.hook";
import { useNavigate } from "react-router-dom";
import DangerAlert from "../../components/Alerts/DangerAlert";
import axios from "axios";
import PostService from "../../API/PostService";
import { AuthContext } from "../../context/AuthContext";
import ObjectUtils from "../../utils/ObjectUtils";

const CreatePost = () => {
    const { request } = useHttp()
    const auth = useContext(AuthContext)
    const navigate = useNavigate()
    const [formInput, setFormInput] = useState({
        image: '',
        title: '',
        content: '',
        category: '',
        tags: ''
    })
    const [error, setError] = useState()
    const changeInputHandler = event => {
        setFormInput({ ...formInput, [event.target.name]: event.target.value })
        if (event.target.files) {
            setFormInput({ ...formInput, image: event.target.files[0] })
        }
    }
    const [categories, setCategories] = useState([])
    useEffect(() => {

        async function getAllCategories() {
            return await axios.get(`${API_URI}/categories`)
        }

        getAllCategories().then(r => {
            setCategories(r.data.data)
        })

    }, [])

    function tagsToArray(tags) {
        return tags.split('#').filter(item => item !== '')
    }
    function arrayToString(tags) {
        return tags.arrayToString
    }

    const createPostOnClick = async (e) => {
        e.preventDefault()
        try {
            if (formInput.title === '' || formInput.content === '') {
                throw Error("empty title or content")
            }
            if (formInput.tags) {
                formInput.tags = [JSON.stringify(tagsToArray(formInput.tags))]
            }
            const body = ObjectUtils.convertToFormData(
                ObjectUtils.filter(formInput, function ([key, val]) {
                    return val !== ''
                }))

            await PostService.createPost(body, auth.token).then(r => {
                console.log("succesfull", r)
                navigate(-1)
            })
        } catch (e) {
            setError('Данные заполнены некорректно')
            console.log(e.message)
        }

    }

    const searchedCategories = categories.filter(category => {
        return category.name.toLowerCase().includes(formInput.category.toLowerCase())
    })


    return (
        <div className={'container-sm'}>
            {error ? <DangerAlert message={error} /> : null}
            <div className="input-group mb-3">

                <input type="file" className="form-control"
                    id="image"
                    name="image"
                    onChange={changeInputHandler} />
                <label className="input-group-text" htmlFor="image">Upload</label>
            </div>

            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Название</label>
                <input type="text"
                    className="form-control"
                    placeholder="title"
                    id={'title'}
                    name={'title'}
                    value={formInput.title}
                    onChange={changeInputHandler} />
            </div>

            <div className={'mb-3'}>
                <label htmlFor="exampleFormControlInput1" className="form-label">Выбрать категории</label>
                <select className="form-select" aria-label="Default select example"
                    name={'category'}
                    id={'category'}
                    onChange={changeInputHandler}>
                    {categories.map(category => (
                        <option value={category.name}>
                            {category.name}
                        </option>
                    ))}

                </select>
            </div>

            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Теги</label>
                <input type="text" className="form-control"
                    id="tags" name={'tags'}
                    onChange={changeInputHandler}
                    value={arrayToString(formInput.tags)}
                    placeholder="#tag1 #tag2 #tag3" />
            </div>



            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Контент</label>
                <textarea className="form-control"
                    id="content"
                    name={'content'}
                    value={formInput.content}
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
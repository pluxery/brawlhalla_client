import React, {useContext, useEffect, useState} from 'react';
import {Button} from 'react-bootstrap'
import {API_URI, useHttp} from "../../hooks/http.hook";
import {useNavigate, useParams} from "react-router-dom";
import {AuthContext} from "../../context/AuthContext";
import PostService from '../../API/PostService';
import ObjectUtils from "../../utils/ObjectUtils";
import axios from "axios";

const EditPost = () => {
    const auth = useContext(AuthContext)
    const [post, setPost] = useState({})
    const {id} = useParams()
    const navigate = useNavigate()

    const [formInput, setFormInput] = useState({
        title: '', content: '', category: '', tags: '', image: ''
    })
    const changeInputHandler = event => {
        setFormInput({...formInput, [event.target.name]: event.target.value})
        if (event.target.files) {
            setFormInput({...formInput, image: event.target.files[0]})
        }
    }
    const [categories, setCategories] = useState([])
    function tagsToArray(str) {
        return str.split('#').filter(item => item !== '')
    }

    function arrayToString(tags) {
        return tags.arrayToString
    }

    useEffect(() => {
        PostService.getPostById(id).then(r => setPost(r.data))
        async function getAllCategories() {
            return await axios.get(`${API_URI}/categories`)
        }

        getAllCategories().then(r => {
            setCategories(r.data.data)
        })
    }, [id, setPost])


    const editPostOnClick = async (e) => {
        e.preventDefault()
        if (formInput.tags) {
            formInput.tags = [JSON.stringify(tagsToArray(formInput.tags))]
        }
        const body = ObjectUtils.convertToFormData(
            ObjectUtils.filter(formInput, function ([key, val]) {
            return val !== ''
        }))
        await PostService.editPostById(post, body, auth.token)
        navigate(`/posts/${post.id}`)

    }
    const searchedCategories = categories.filter(category => {
        return category.name.toLowerCase().includes(formInput.category.toLowerCase())
    })

    return (
        <div className={'container-sm'}>

            <div className="card">
                <h5>{post.created_at}</h5>
                <div className="fakeimg">
                    <img
                        src={post.image}
                        className="card-img-top rounded mx-auto d-block" alt="..."
                        style={{height: 420, width: 680}}/>
                </div>
            </div>
            <div className="mb-3">
                <input className="form-control" type="file" id="image" name="image" onChange={changeInputHandler}/>
            </div>

            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Название</label>
                <input type="text"
                       className="form-control"
                       placeholder={post.title}
                       id={'title'}
                       name={'title'}

                       value={formInput.title}
                       onChange={changeInputHandler}/>
            </div>

            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Категория</label>
                <input type="text"
                       className="form-control"
                       placeholder={post.category?.name}
                       id={'category'}
                       name={'category'}
                       value={formInput.category}
                      />
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
                <label htmlFor="exampleFormControlInput1" className="form-label">Тэги</label>

                <input type="text" className="form-control" id="tags" name={'tags'}
                       onChange={changeInputHandler}
                       value={formInput.tags ? formInput.tags :
                           post.tags?.map(tag => {
                            return '#' + tag.name + ' '
                       })}
                       placeholder={"example input: #tag1 #tag2 #tag3"}
                />
            </div>


            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Текст</label>
                <textarea className="form-control"
                          id="content"
                          name={'content'}
                          value={formInput.content ? formInput.content : post?.content}
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
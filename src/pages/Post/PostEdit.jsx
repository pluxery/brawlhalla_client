import React from 'react';
import BhInput from "../../components/UI/input/BhInput";
import BhButton from "../../components/UI/button/BhButton";
import '../../styles/EditPost.css'
import BhSelect from "../../components/UI/select/BhSelect";
const PostEdit = () => {
    return (
        <div>
            <form className={'post_edit__wrapper'}>
                <BhInput name={'title'} placeholder={'edit title'} type={'text'}/>
                <BhInput name={'edit text'} placeholder={'text'}/>

                <BhSelect name={'category'}>
                    <option>category 1</option>
                    <option>category 2</option>
                    <option>category 3</option>
                    <option>new category</option>
                </BhSelect>

                <BhInput placeholder={'edit #tags'}/>

                <BhButton>edit post</BhButton>
                <BhButton>delete post</BhButton>
            </form>

        </div>
    );
};

export default PostEdit;
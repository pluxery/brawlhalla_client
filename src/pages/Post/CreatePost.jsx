import React from 'react';
import BhButton from "../../components/UI/button/BhButton";
import BhInput from "../../components/UI/input/BhInput";

const CreatePost = () => {
    return (
        <div>
           <form className={'container-sm row'}>
               <BhInput name={'title'} placeholder={'title'} type={'text'}/>
               <BhInput name={'text'} placeholder={'text'}/>

               <select name={'category'}>
                   <option>category 1</option>
                   <option>category 2</option>
                   <option>category 3</option>
                   <option>new category</option>
               </select>

               <BhInput placeholder={'#tags'}/>

               <BhButton>add post</BhButton>
           </form>

        </div>
    );
};

export default CreatePost;
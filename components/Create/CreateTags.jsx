import { updateSiteState } from '@/redux/features/siteSlice';
import { createStory } from '@/redux/features/storiesSlice';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import makeAnimated from 'react-select/animated';
import CreatableSelect from 'react-select/creatable';

const CreateTags = () => {
    const animatedComponents = makeAnimated();

    const options = [
        { value: 'horror', label: 'ভৌতিক',style:{color:'red'} },
        { value: 'mystery', label: 'রহস্য',style:{color:'red'} },
        { value: 'detective', label: 'গোয়েন্দা',style:{color:'red'} },
        { value: 'funny', label: 'হাস্যকর',style:{color:'red'} },
        { value: 'love', label: 'প্রেম',style:{color:'red'} },
        { value: 'action', label: 'অ্যাকশন',style:{color:'red'} },
        { value: 'thriller', label: 'থ্রিলার',style:{color:'red'} },
      ]


      const colourStyles = {
        menuList: styles => ({
          ...styles,
          background: '#1d232a',
          border:'1px solid #aaa',
          borderRadius:'5px',
          
        }),
        option: (styles, { isFocused, isSelected }) => ({
          ...styles,
          background: isFocused
            ? '#414d5a'
            : isSelected
              ? '#414d5a'
              : undefined,
          zIndex: 1,
          color:'#fff',
          borderBottom:'1px solid #aaa'
        }),
        menu: base => ({
          ...base,
          background: '#1d232a',
          zIndex: 100,
          color:'#fff'
        }), control: (baseStyles, state) => ({
          ...baseStyles,
          backgroundColor: state.isFocused ? '#1d232a' : '#1d232a',
        }),
      }

      //
      const [theme,setTheme] = useState('light')
     
      useEffect(()=>{
        setTheme(localStorage.getItem('theme'))
      },[])


       // redux
       const dispatch = useDispatch()
       const story = useSelector(state=>state.stories)
       // handle dispatch
       const handleDispatch = data =>{
         dispatch(createStory({...story,tags:data}))
         dispatch(updateSiteState({disabledButton:false}))
       }
       const defaultValue =story?.tags
    return (
        <div className='w-full'>
            <CreatableSelect onChange={e=>handleDispatch(e)}  styles={theme==='dark' ? colourStyles:''} value={defaultValue} components={animatedComponents} className='w-full text-black' isClearable isMulti options={options} />
        </div>
    );
}

export default CreateTags;    
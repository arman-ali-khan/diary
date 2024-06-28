import { useEffect, useState } from 'react';
import makeAnimated from 'react-select/animated';
import CreatableSelect from 'react-select/creatable';

const CreateTags = () => {
    const animatedComponents = makeAnimated();

    const options = [
        { value: 'chocolate', label: 'Chocolate',style:{color:'red'} },
        { value: 'strawberry', label: 'Strawberry',style:{color:'red'} },
        { value: 'vanilla', label: 'Vanilla',style:{color:'red'} }
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
    return (
        <div className='w-full'>
            <CreatableSelect  styles={theme==='dark' ? colourStyles:''} components={animatedComponents} className='w-full' isClearable isMulti options={options} />
        </div>
    );
}

export default CreateTags;    
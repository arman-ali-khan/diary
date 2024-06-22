import { createSlice } from '@reduxjs/toolkit'

export const usersSlice = createSlice({
  name: 'user',
  initialState: {
    "name":"",
    "username":"",
    "photo":"",
    "cover":"",
    "email":"",
    "phone":"",
    "password":"",
    "blocked":"",
    "banned":"",
    "disabled":"",
    "warnings":"",
    gender:"",
    type:"",
    work:"",
    education:"",
    createdAt:"",
  },
  
  reducers: {
    createUser: (state,action) => {
       console.log(action.payload)
    },
    updateUser: (state,action) => {
        console.log(action.payload)
    },
    updateUserByAdmin: (state,action) => {
        console.log(action.payload)
    },
    deleteUser: (state, action) => {
        console.log(action.payload)
    },
    setUser:(state,action)=>{
      state.name=action.payload?.fullName,
      state.username=action.payload?.username,
      state.photo=action.payload?.photo,
      state.cover=action.payload?.cover,
      state.work=action.payload?.work,
      state.education=action.payload?.education,
      state.email=action.payload?.email,
      state.phone=action.payload?.phone,
      state.gender=action.payload?.gender
    }
  },
})

// Action creators are generated for each case reducer function
export const { createUser, updateUser, updateUserByAdmin,deleteUser,setUser } = usersSlice.actions

export default usersSlice.reducer
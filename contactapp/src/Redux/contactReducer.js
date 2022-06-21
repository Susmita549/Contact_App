
const initialState = [
    {
        id:0,
        name:'Raman',
        number:'123456789',
        email:'r@gmail.com'
    },
    {
        id:1,
        name:'Sharma',
        number:'123456889',
        email:'s@gmail.com'
    }
]

export const contactReducer = (state = initialState,action) => {
    switch(action.type){
       default: return state;
    }
}
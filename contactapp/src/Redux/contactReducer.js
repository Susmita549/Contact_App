
const initialState = [
    {
        id:0,
        name:'Raman',
        number:'123456789'
    },
    {
        id:1,
        name:'Sharma',
        number:'123456889'
    }
]

export const contactReducer = (state = initialState,action) => {
    switch(action.type){
       default: return state;
    }
}
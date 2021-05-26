const initialState = {
  token: null,
  errorMessage: null,
  users: null,
  user: null,
  loading: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TEST':
      return { ...state };
    default:
      return { ...state };
  }
};

export default reducer;

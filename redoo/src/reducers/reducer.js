const initialState = {
  loading: false,
  character: {},
  error: "",
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCHING_CHARACTER":
      return {
        ...state,
        loading: true,
      };

    case "SUCCESS":
      return {
        ...state,
        loading: false,
        character: action.payload,
      };
    default:
      return state;
  }
};

import  {
  GET_DATA,
  DELETE_ITEM,
  UPDATE_DATA
} from "./../constans";
export default (state = null,action) => {
  switch (action.type) {
    case GET_DATA:
      return (action.payload);
    case UPDATE_DATA:
      return (action.payload);
    case  DELETE_ITEM:
      return (action.payload);
    default:
      return state
  }
}

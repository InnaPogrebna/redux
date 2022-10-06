import { COMMENTS_LOAD, COMMENT_CREATE, COMMENT_DELETE, COMMENT_UPDATE } from "./types";

//// reducer for comments component //////

const initialState = {
  comments: [],
}
export const commentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case COMMENT_CREATE:
      return {
        ...state,
        comments: [action.data, ...state.comments],
      }
      
    case COMMENT_UPDATE:
      const { data } = action;
      const { comments } = state;
      const itemIndex = comments.findIndex(res => res.id === data.id);
      const nextComments = [
        ...comments.slice(0, itemIndex),
        data,
        ...comments.slice(itemIndex + 1)
      ]
      return {
        ...state,
        comments: nextComments,
      }

    case COMMENT_DELETE:
      return (() => {
        const { id } = action;
        const { comments } = state;
        const newComments = comments.filter(res => res.id !== id);
        return {
          ...state,
          comments: newComments,
        }
      })();

    case COMMENTS_LOAD:
      const commentsNew = action.data.map(res => {
        return {
          text: res.name,
          id: res.id,
        }
      })
      return {
        ...state,
        comments: commentsNew
      }

    default:
      return state;
  }
}

import {ADD_COMMENT} from './actions'
import {THUMB_UP_COMMENT} from './actions'
import {THUMB_DOWN_COMMENT} from './actions'


const comments = (state = [], action) => {
    switch(action.type) {

        case ADD_COMMENT:
            return [{
                id: action.id,
                text: action.text,
                votes: 0
                }
        , ...state];

            case THUMB_UP_COMMENT:
                return state.map(comment => {
                    if(comment.id === action.id) {
                    return {...comment, votes: comment.votes + 1}
                    }
                return comment;
                });

        case THUMB_DOWN_COMMENT:
            return state.map(comment => {
                if(comment.id === action.id) {
                return {...comment, votes: comment.votes - 1}
                }
            return comment;
            });

        default:
            return state;
    }
    
}

export default comments;
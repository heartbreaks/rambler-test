import {commentsModule} from "@modules/comments";
import {commentsList} from "@modules/comments/mocks/mocks";


export default commentsModule.factory('commentsService', function () {
    return {
        getComments(secondsDelay = 3) {
            return new Promise((resolve) => setTimeout(resolve.bind(this, commentsList), secondsDelay * 1000))
        },

        /* Используется исключительно как фейк API */
        getDataList(secondsDelay = 3) {
            return new Promise((resolve) => setTimeout(resolve, secondsDelay * 1000))
        },

        /* Используется исключительно как фейк API */
        getInfoList(secondsDelay = 1) {
            return new Promise((resolve) => setTimeout(resolve, secondsDelay * 1000))
        }
    }
})
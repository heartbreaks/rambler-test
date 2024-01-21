import {commentsModule} from "@modules/comments";
import anonImage from '../../../assets/images/anon-plug.png'

const imagePlug = require('@main/assets/images/avatar-plug.png')
export default commentsModule.component('comment', {
    bindings: {
        commentInfo: '<',
        isRolled: '<',
        isChild: '<',
        maxNestedLeverage: '@'
    },
    template: require('./comment.component.html').default,
    controller: [CommentComponent]
})

function CommentComponent() {
    const self = this

    self.createThread = (message) => {
        this.commentInfo.thread = this.commentInfo.thread || []

        this.commentInfo.thread.push({
            message,
            username: 'Anonymous',
            postedAt: Date.now(),
            avatarUrl: anonImage
        })
    }

    this.toggleThread = (isRolled = false) => {
        this.isRolled = isRolled
    }

    this.$onInit = () => {
        if (!this.isChild) {
            const isOutLimit = nestedLengthMoreThan(this.maxNestedLeverage, this.commentInfo, 'thread')
            this.toggleThread(!isOutLimit)
        }
    }
}

function nestedLengthMoreThan(maxLeverage = 3, data, key, currentLeverage = 1) {
    const nestedArray = data[key]

    if (maxLeverage > currentLeverage && Array.isArray(nestedArray)) {
        nestedArray.forEach((item) => {
            return nestedLengthMoreThan(maxLeverage, item, key, currentLeverage + 1)
        })
    } else {
        return maxLeverage > currentLeverage
    }
}
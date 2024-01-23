import React from "react";

export default class CommentCounter extends React.Component {
    constructor(props) {
        super(props);
        this.state = { ...props };
    }

    #countNestedItems = (count, comment) => {
        const thread = comment.thread || []
        return thread.reduce(this.#countNestedItems, thread.length + count)
    }

    updateTotalCount = (data) => {
        const totalComments = data.reduce(this.#countNestedItems, data.length);
        this.setState({ totalComments });
    };

    componentDidMount() {
       this.updateTotalCount(this.state.comments);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.comments !== this.props.comments) {
            this.updateTotalCount(this.props.comments)
        }
    }

    render(){
        let { totalComments } = this.state
        return (
            <div>
                <h1>Всего комментариев: { totalComments }</h1>
            </div>
        );
    }
}
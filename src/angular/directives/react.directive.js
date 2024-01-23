import { app } from '../app'
import React from "react";
import { createRoot } from "react-dom/client";
import CommentCounter from "@react/Layout";

const reactDirective = app.directive('reactCommentCounter', function() {
    return {
        template: '<div id="reactapp" class="react-part"></div>',
        link: function(scope, el, attrs){
            const reactApp = document.getElementById('reactapp')
            const root = createRoot(reactApp)

            // В целях оптимизации, нежелательно использование вотчеров
            scope.$watch('comments', function(newValue) {
                let immutableData = angular.copy(newValue, [])
                root.render(<CommentCounter comments={immutableData}/>);
            }, true);

        }
    }
})

export default reactDirective
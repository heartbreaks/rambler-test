import { app } from '../app'
import React from "react";
import { createRoot } from "react-dom/client";
import Layout from "@react/Layout";

const reactDirective = app.directive('reactDirective', function() {
    return {
        template: '<div id="reactapp" class="react-part"></div>',
        link: function(scope, el, attrs){
            const reactApp = document.getElementById('reactapp')
            const root = createRoot(reactApp)

            scope.$watch('comments', function(newValue, oldValue) {

                root.render(<Layout comments={newValue}/>);
            }, true);

        }
    }
})

export default reactDirective
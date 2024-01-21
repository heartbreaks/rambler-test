import {pipesModule} from "@core";

export default pipesModule.filter('titlecase', function() {
    return (input = '') => input.charAt(0).toUpperCase() + input.substring(1).toLowerCase();
})
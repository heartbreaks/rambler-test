import angular from 'angular'
import {commentsList} from "@modules/comments/mocks/mocks";
import '@modules/comments'
import '@core/pipes'

export const app = angular.module('app', [
    'comments.module',
    'app.pipes'
]);


app.controller('MainController', function($scope, commentsService) {
    $scope.comments = commentsList
})
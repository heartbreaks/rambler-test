import angular from 'angular'
import {commentsList} from "@modules/comments/mocks/mocks";
import '@modules/comments'
import '@core/pipes'

export const app = angular.module('app', [
    'comments.module',
    'app.pipes'
]);


app.controller('MainController', function($scope, commentsService) {
    $scope.commentValue = null

    $scope.comments = angular.copy(commentsList)

    $scope.saveComment = function () {
        if (!$scope.commentValue) return null

        $scope.comments.push({
            username: 'Anonym from textarea',
            postedAt: Date.now(),
            message: $scope.commentValue,
        })
        $scope.commentValue = ''
    }

    $scope.updateThread = function () {
        $scope.comments = [...$scope.comments]
    }
})
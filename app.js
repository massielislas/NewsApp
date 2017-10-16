  angular.module('News', [])
  .factory('postFactory', [function(){
    var o = {
      posts: []
    };
    return o;
  }])
    .controller('MainCtrl', [
    '$scope',
    'postFactory',
    function($scope, postFactory){
      $scope.test= 'Hello World';
      $scope.posts = postFactory.posts;

      $scope.addPost = function() {
        $scope.posts.push({title:$scope.formContent,upvotes:0});
        $scope.formContent='';
      };
      $scope.incrementUpvotes = function(post) {
        post.upvotes += 1;
      };
    }
    ]);
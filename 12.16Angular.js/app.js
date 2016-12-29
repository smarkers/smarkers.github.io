/**
 * Created by Administrator on 2016/12/17.
 */
angular.module("app",[]).controller("main",function ($scope,$interval,$http) {
    $scope.word="hello";
   /* $scope.student=[
        {name:'a',age:12},
        {name:'b',age:12},
        {name:'c',age:12},
        {name:'d',age:12},
        {name:'e',age:12}
    ];
*/
    $scope.count=0;
    $scope.text='hello world';
    $interval(function () {
        $scope.count++;
    },1000);   //单项数据绑定


    $http.get("data.json").then(function (result) {
        console.log(result);
        $scope.students=result.data;
    })




});
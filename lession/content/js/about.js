define(['zepto','http'], function (zepto,http) {
   return ['zepto','http',function () {
       $('#about').css({color: 'blue'});
       http.post('content/data/person.json').then(function(ret){

       }).catch(function(err){
       });
   }];
});
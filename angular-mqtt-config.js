(function () {
  'use strict';
  angular
    .module('webClient')
    .config(['MQTTProvider',function(MQTTProvider){
      MQTTProvider.setHref('ws://test.mosquitto.org:8080/mqtt');
      console.log("vao cmnr");
    }])
  ;
})();

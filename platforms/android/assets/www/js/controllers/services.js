'use strict';

/* Services */
var appServices = angular.module('appServices', []);


$(document).ready(function () {
    document.addEventListener("deviceready", onDeviceReady, false);
});

var onDeviceReady = function () {
    document.addEventListener("backbutton", onBackKeyDown, false);
};

var onBackKeyDown = function () {
    var $body = angular.element(document.body);
    var $rootScope = $body.scope().$root;
    $rootScope.$apply(function () {
        $rootScope.$broadcast('backbutton', {});
    });
};

var onDeviceReady = function () {
    document.addEventListener("backbutton", onBackKeyDown, false);
};
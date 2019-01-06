'use strict';
/* Controllers */
var appControllers = angular.module('appControllers', []);

/* Controller for splash page */
appControllers.controller('mainCtrl', ['$scope', '$rootScope',
		function ($scope, $rootScope) {

		    $(document).ready(function () {
		        $(function () {
		            $(document).on('click', 'input[type=number]', function () { this.select(); });
		        });

		        $scope.countries = countries;
		        $scope.price;

		        $.get("http://ipinfo.io", function (response) {
		            console.log(response.city, response.country);
		            for (var i = 0; i < countries.length; i++) {
		                if (countries[i].code == response.country) {
		                    $scope.currentCountry = countries[i];
		                    document.getElementById('currancy').innerHTML = $scope.currentCountry.currancyName;
		                    $.ajax({
		                        url: 'https://currency-exchange.p.mashape.com/exchange?from=ILS&q=1&to=' + $scope.currentCountry.currancyName + '',
		                        headers: { 'X-Mashape-Key': 'h8ZhrxlOssmshY43eKgnTF6AKdgmp1jhqq0jsnlsYsbanYg8Mp' },
		                        type: "GET",
		                        success: function (data) {
		                            $scope.currentState = '(1ILS = ' + data + '' + $scope.currentCountry.currancyName + ')';
		                            $scope.$apply();
		                        }
		                    });
		                    $scope.$apply();
		                }
		            }
		        }, "jsonp");

		    });

		    $scope.showCurrancy = function () {
		        document.getElementById('currancy').innerHTML = $scope.currentCountry.currancyName;
		        $.ajax({
		            url: 'https://currency-exchange.p.mashape.com/exchange?from=ILS&q=1&to=' + $scope.currentCountry.currancyName + '',
		            headers: { 'X-Mashape-Key': 'h8ZhrxlOssmshY43eKgnTF6AKdgmp1jhqq0jsnlsYsbanYg8Mp' },
		            type: "GET",
		            success: function (data) {
		                $scope.currentState = '(1ILS = ' + data + '' + $scope.currentCountry.currancyName + ')';
		                $scope.$apply();
		            }
		        });
		    }

		    $scope.calcPrice = function () {
		        document.getElementById('answer').innerHTML = '<img src="images/loader.gif" style="height: 53px; width: auto">';
		        $.ajax({
		            url: 'https://currency-exchange.p.mashape.com/exchange?from=' + $scope.currentCountry.currancyName + '&q=' + $scope.price + '&to=ILS',
		            headers: { 'X-Mashape-Key': 'h8ZhrxlOssmshY43eKgnTF6AKdgmp1jhqq0jsnlsYsbanYg8Mp' },
		            type: "GET",
		            success: function (data) {
		                $scope.answer = data + ' שקלים';
		                $scope.$apply();
		            }
		        });
		    }



		}]);


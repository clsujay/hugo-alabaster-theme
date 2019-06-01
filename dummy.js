"use strict";
angular.module("webApp").controller("ProductCtrl", ["$scope", "$uibModal", "$filter", "$state",
        "config", "blockUI", "$window", "$timeout", "$sce","$cookies",
    function ($scope, $uibModal, $filter, $state, config, blockUI, $window, $timeout, $sce, $cookies) {
        var $ = window.jQuery;

        $scope.cart = [];//{"prodTypeDetails":[]};
        $scope.total = 0;

        if(!angular.isUndefined($cookies.get('total'))){
          $scope.total = parseFloat($cookies.get('total'));
        }
        //Sepetimiz daha önceden tanımlıysa onu çekelim
        if (!angular.isUndefined($cookies.get('cart'))) {
             $scope.cart =  $cookies.getObject('cart');
        }

        $scope.productList = {
          "tData": [{
            "branchId": "1",
            "branchName": "JAIN MOULDED FITTINGS",
            "productId": "1",
            "productName": "ELBOW",
            "productImgPath": "a.jpg",
            "prodTypeDetails": [{
              "id": "1",
              "name": "Elbow 40 mm - Rs. 10.87",
              "pn": "PN 6",
              "comRate": "9.80",
              "nettRate": "10.87",
              "pkgNo": "0.00",
              "qty" : 1
            }, {
              "id": "2",
              "name": "Elbow 50 mm - Rs. 15.53",
              "pn": "PN 6",
              "comRate": "14.00",
              "nettRate": "15.53",
              "pkgNo": "0.00",
              "qty" : 1
            }, {
              "id": "3",
              "name": "Elbow 63 mm - Rs. 18.86",
              "pn": "PN 6",
              "comRate": "17.00",
              "nettRate": "18.86",
              "pkgNo": "96.00",
              "qty" : 1
            }, {
              "id": "4",
              "name": "Elbow 75 mm - Rs. 18.86",
              "pn": "PN 6",
              "comRate": "26.50",
              "nettRate": "29.39",
              "pkgNo": "80.00",
              "qty" : 1
            }, {
              "id": "5",
              "name": "Elbow 90 mm - Rs. 18.86",
              "pn": "PN 6",
              "comRate": "42.50",
              "nettRate": "47.14",
              "pkgNo": "38.00",
              "qty" : 1
            }, {
              "id": "6",
              "name": "Elbow 110 mm - Rs. 18.86",
              "pn": "PN 6",
              "comRate": "69.50",
              "nettRate": "77.09",
              "pkgNo": "24.00",
              "qty" : 1
            }, {
              "id": "7",
              "name": "Elbow 140 mm - Rs. 18.86",
              "pn": "PN 4",
              "comRate": "130.00",
              "nettRate": "144.20",
              "pkgNo": "8.00",
              "qty" : 1
            }, {
              "id": "8",
              "name": "Elbow 160 mm - Rs. 18.86",
              "pn": "PN 4",
              "comRate": "191.00",
              "nettRate": "211.86",
              "pkgNo": "6.00",
              "qty" : 1
            }, {
              "id": "9",
              "name": "Elbow 200 mm - Rs. 18.86",
              "pn": "PN 4",
              "comRate": "440.00",
              "nettRate": "488.05",
              "pkgNo": "2.00",
              "qty" : 1
            }]
          }, {
            "branchId": "1",
            "branchName": "JAIN MOULDED FITTINGS",
            "productId": "2",
            "productName": "TEE",
            "productImgPath": "b.jpg",
            "prodTypeDetails": [{
              "id": "10",
              "name": "Tee Equal 40 mm - Rs. 18.86",
              "pn": "PN 6",
              "comRate": "11.00",
              "nettRate": "12.20",
              "pkgNo": "0.00",
              "qty" : 1
            }, {
              "id": "11",
              "name": "Tee Equal 50 mm - Rs. 18.86",
              "pn": "PN 6",
              "comRate": "19.00",
              "nettRate": "21.07",
              "pkgNo": "0.00",
              "qty" : 1
            }, {
              "id": "12",
              "name": "Tee Equal 63 mm - Rs. 18.86",
              "pn": "PN 6",
              "comRate": "23.00",
              "nettRate": "25.51",
              "pkgNo": "62.00",
              "qty" : 1
            }, {
              "id": "13",
              "name": "Tee Equal 75 mm - Rs. 18.86",
              "pn": "PN 6",
              "comRate": "37.50",
              "nettRate": "41.60",
              "pkgNo": "60.00",
              "qty" : 1
            }, {
              "id": "14",
              "name": "Tee Equal 90 mm - Rs. 18.86",
              "pn": "PN 6",
              "comRate": "55.00",
              "nettRate": "61.01",
              "pkgNo": "30.00",
              "qty" : 1
            }, {
              "id": "15",
              "name": "Tee Equal 110 mm - Rs. 18.86",
              "pn": "PN 6",
              "comRate": "111.00",
              "nettRate": "123.12",
              "pkgNo": "18.00",
              "qty" : 1
            }, {
              "id": "16",
              "name": "Tee Equal 140 mm - Rs. 18.86",
              "pn": "PN 4",
              "comRate": "164.50",
              "nettRate": "182.46",
              "pkgNo": "6.00",
              "qty" : 1
            }, {
              "id": "17",
              "name": "Tee Equal 160 mm - Rs. 18.86",
              "pn": "PN 4",
              "comRate": "244.50",
              "nettRate": "271.20",
              "pkgNo": "0.00",
              "qty" : 1
            }, {
              "id": "18",
              "name": "Tee Equal 200 mm - Rs. 18.86",
              "pn": "PN 4",
              "comRate": "573.50",
              "nettRate": "636.13",
              "pkgNo": "0.00",
              "qty" : 1
            }, {
              "id": "19",
              "name": "50mm Male Thre. Ada. 1.5 - Rs. 18.86",
              "pn": "PN 6",
              "comRate": "10.00",
              "nettRate": "11.09",
              "pkgNo": "12.02",
              "qty" : 1
            }]
          }, {
            "branchId": "1",
            "branchName": "JAIN MOULDED FITTINGS",
            "productId": "3",
            "productName": "FTA",
            "productImgPath": "c.jpg",
            "prodTypeDetails": null
          }, {
            "branchId": "1",
            "branchName": "JAIN MOULDED FITTINGS",
            "productId": "4",
            "productName": "MTA",
            "productImgPath": "d.jpg",
            "prodTypeDetails": null
          }, {
            "branchId": "1",
            "branchName": "JAIN MOULDED FITTINGS",
            "productId": "5",
            "productName": "PLAIN END CAP",
            "productImgPath": "e.jpg",
            "prodTypeDetails": null
          }, {
            "branchId": "1",
            "branchName": "JAIN MOULDED FITTINGS",
            "productId": "6",
            "productName": "REDUCING TEE",
            "productImgPath": "f.jpg",
            "prodTypeDetails": null
          }, {
            "branchId": "1",
            "branchName": "JAIN MOULDED FITTINGS",
            "productId": "7",
            "productName": "REDUCER",
            "productImgPath": "g.jpg",
            "prodTypeDetails": null
          }, {
            "branchId": "1",
            "branchName": "JAIN MOULDED FITTINGS",
            "productId": "8",
            "productName": "Y TEE",
            "productImgPath": "h.jpg",
            "prodTypeDetails": null
          }, {
            "branchId": "1",
            "branchName": "JAIN MOULDED FITTINGS",
            "productId": "9",
            "productName": "CROSS TEE",
            "productImgPath": "i.jpg",
            "prodTypeDetails": null
          }, {
            "branchId": "1",
            "branchName": "JAIN MOULDED FITTINGS",
            "productId": "10",
            "productName": "THREADED ELBOW",
            "productImgPath": "j.jpg",
            "prodTypeDetails": null
          }, {
            "branchId": "1",
            "branchName": "JAIN MOULDED FITTINGS",
            "productId": "11",
            "productName": "dummy catg",
            "productImgPath": "a.jpg",
            "prodTypeDetails": null
          }],
          "msg": ""
        };
        
        $scope.productList = $scope.productList.tData;
        var expireDate = new Date();
        expireDate.setDate(expireDate.getDate() + 1);
        //$scope.product = {"id":0,"qty":1};
        
          /* var filteredProductList =  $filter('unique')(productList,'catId');
          var plObj = {};
          $scope.completeProductList = [];
          angular.forEach(filteredProductList, function (prodList) {
            plObj = prodList;  
            plObj["prodType"] = $filter("filter")(productList, { "catId": prodList.catId });
            $scope.completeProductList.push(plObj);
          }); */ 

           
          var findItemById = function(items, id) {
            return _.find(items, function(item) {
              return item.prodTypeDetails.id === id;
            });
          };

          $scope.addItem = function(itemToAdd,typeId) {
            //console.log($scope.product);
            var found = findItemById($scope.cart, typeId);
            var selectedProdType={};
            selectedProdType.prodTypeDetails = $filter("filter")(itemToAdd.prodTypeDetails, { "id": typeId })[0];
            if (found) {
              found.prodTypeDetails.qty += selectedProdType.prodTypeDetails.qty;
            }
            else {
              selectedProdType.branchName=itemToAdd.branchName;
              selectedProdType.productId=itemToAdd.productId;
              selectedProdType.productName=itemToAdd.productName;
              selectedProdType.productImgPath=itemToAdd.productImgPath; 
              $scope.cart.push(selectedProdType);
            }

            
            $cookies.putObject('cart', $scope.cart,  {'expires': expireDate});
            $scope.cart = $cookies.getObject('cart');

          };

          $scope.getCost = function(item) {
            return item.qty * item.nettRate;
          };
          
          $scope.getTotal = function() {
            $scope.total =  _.reduce($scope.cart, function(sum, item) {
              return sum + $scope.getCost(item.prodTypeDetails);
            }, 0);
            console.log('total: ' + $scope.total);
            $cookies.put('total', $scope.total,  {'expires': expireDate});
            return $scope.total;
          };

          $scope.removeItem = function(item) {
            var index = $scope.cart.indexOf(item);
            $scope.cart.splice(index, 1);
            $cookies.putObject('cart', $scope.cart, {'expires': expireDate});
 			      $scope.cart = $cookies.getObject('cart');
          };

          $scope.clearCart = function() {
            $scope.cart.length = 0;
            $cookies.putObject('cart', $scope.cart, {'expires': expireDate});
 			      $scope.cart = $cookies.getObject('cart');
          };
           
        $scope.init = function () {
        };
        $scope.init();       
    }]);

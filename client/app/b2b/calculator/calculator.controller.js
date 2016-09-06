'use strict';

(function(){

class CalculatorComponent {
  constructor() {
    this.message = 'Hello';
    console.log('aaa');
  }
}

angular.module('zavistNodeApp.b2b')
  .component('calculator', {
    templateUrl: 'app/b2b/calculator/calculator.html',
    controller: CalculatorComponent,
    controllerAs: 'calculatorCtrl'
  });

})();

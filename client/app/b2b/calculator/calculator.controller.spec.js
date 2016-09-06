'use strict';

describe('Component: CalculatorComponent', function () {

  // load the controller's module
  beforeEach(module('zavistNodeApp.b2b'));

  var CalculatorComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    CalculatorComponent = $componentController('calculator', {});
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});

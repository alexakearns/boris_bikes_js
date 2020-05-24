'use strict'

describe('Bike', function() {
  var bike;

  it('working should default to true', function() {
    bike = new Bike();
    expect(bike.isWorking()).toEqual(true);
  });
});
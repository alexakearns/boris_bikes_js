'use strict'

describe('DockingStations', function() {
    var station;

    beforeEach(function() {
        station = new DockingStation();
    });

    it('should return a bike', function() {
        expect(station.releaseBike()).toEqual('bike');
    });
});
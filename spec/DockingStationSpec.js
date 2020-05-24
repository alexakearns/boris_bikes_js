'use strict'

describe('DockingStations', function() {
    var station;

    it('should return a bike', function() {
        station = new DockingStation();
        expect(station.releaseBike()).toEqual('bike');
    });
});
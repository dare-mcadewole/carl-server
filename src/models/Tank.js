import Datastore from 'nedb';
import path from 'path';

const BASE_PATH = path.resolve(__dirname, '../databases');

var tank = new Datastore({
    filename: `${BASE_PATH}/tank.db`,
    autoload: true
});

class Tank {
    initialize () {
        tank.insert({
            wmsid: '6srftydgyewu',
            tankLevel: 0,
            pumpState: 0,
            createdDate: new Date()
        });
    }

    /**
     * 
     * @param {*} tankLevel 
     */
    updateTankLevel (tankLevel) {
        tank.update({
            wmsid: '6srftydgyewu'
        }, { $set: { tankLevel } }, { upsert: true });
    }

    /**
     * 
     * @param {*} pumpState 
     */
    updatePumpState (pumpState) {
        tank.update({
            wmsid: '6srftydgyewu'
        }, { $set: { pumpState } }, { upsert: true });
    }
}

export default new Tank();
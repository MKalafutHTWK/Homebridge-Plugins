import {
  AccessoryConfig,
  AccessoryPlugin,
  API,
  CharacteristicEventTypes,
  CharacteristicGetCallback,
  CharacteristicSetCallback,
  CharacteristicValue,
  HAP,
  Logging,
  Service
} from "homebridge";

let hap: HAP;
const hours = new Date().getHours;

export = (api: API) => {  //wird aufgerufen, wenn das plugin geladen wird
  hap = api.hap;
  api.registerAccessory("ExampleSwitchTimer", SwitchTimer);
};

class SwitchTimer implements AccessoryPlugin{

  //private readonly hours: const; 
  private readonly name: string;

  constructor(log: Logging, config: AccessoryConfig, api: API) {
    this.name = config.name;
    
  }

}


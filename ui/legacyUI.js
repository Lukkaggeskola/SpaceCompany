function registerLegacyBindings() {

	Game.ui.bindElement('uraniumStorageCost', function(){ return Game.settings.format(getStorage(RESOURCE.Uranium)*storagePrice); });
	Game.ui.bindElement('uraniumStorageLunariteCost', function(){ return Game.settings.format(getStorage(RESOURCE.Uranium)/2.5*storagePrice); });
	Game.ui.bindElement('oilStorageCost', function(){ return Game.settings.format(getStorage(RESOURCE.Oil)*storagePrice); });
	Game.ui.bindElement('oilStorageMetalCost', function(){ return Game.settings.format(getStorage(RESOURCE.Oil)/2.5*storagePrice); });
	Game.ui.bindElement('metalStorageCost', function(){ return Game.settings.format(getStorage(RESOURCE.Metal)*storagePrice); });
	Game.ui.bindElement('gemStorageCost', function(){ return Game.settings.format(getStorage(RESOURCE.Gem)*storagePrice); });
	Game.ui.bindElement('gemStorageMetalCost', function(){ return Game.settings.format(getStorage(RESOURCE.Gem)/2.5*storagePrice); });
	Game.ui.bindElement('charcoalStorageCost', function(){ return Game.settings.format(getStorage(RESOURCE.Charcoal)*storagePrice); });
	Game.ui.bindElement('charcoalStorageMetalCost', function(){ return Game.settings.format(getStorage(RESOURCE.Charcoal)/2.5*storagePrice); });
	Game.ui.bindElement('woodStorageCost', function(){ return Game.settings.format(getStorage(RESOURCE.Wood)*storagePrice); });
	Game.ui.bindElement('woodStorageMetalCost', function(){ return Game.settings.format(getStorage(RESOURCE.Wood)/2.5*storagePrice); });
	Game.ui.bindElement('lunariteStorageCost', function(){ return Game.settings.format(getStorage(RESOURCE.Lunarite)*storagePrice); });
	Game.ui.bindElement('lunariteStorageMetalCost', function(){ return Game.settings.format(getStorage(RESOURCE.Lunarite)*4*storagePrice); });
	Game.ui.bindElement('methaneStorageCost', function(){ return Game.settings.format(getStorage(RESOURCE.Methane)*storagePrice); });
	Game.ui.bindElement('methaneStorageLunariteCost', function(){ return Game.settings.format(getStorage(RESOURCE.Methane)/2.5*storagePrice); });
	Game.ui.bindElement('titaniumStorageCost', function(){ return Game.settings.format(getStorage(RESOURCE.Titanium)*storagePrice); });
	Game.ui.bindElement('titaniumStorageLunariteCost', function(){ return Game.settings.format(getStorage(RESOURCE.Titanium)/2.5*storagePrice); });
	Game.ui.bindElement('goldStorageCost', function(){ return Game.settings.format(getStorage(RESOURCE.Gold)*storagePrice); });
	Game.ui.bindElement('goldStorageLunariteCost', function(){ return Game.settings.format(getStorage(RESOURCE.Gold)/2.5*storagePrice); });
	Game.ui.bindElement('silverStorageCost', function(){ return Game.settings.format(getStorage(RESOURCE.Silver)*storagePrice); });
	Game.ui.bindElement('silverStorageLunariteCost', function(){ return Game.settings.format(getStorage(RESOURCE.Silver)/2.5*storagePrice); });
	Game.ui.bindElement('siliconStorageCost', function(){ return Game.settings.format(getStorage(RESOURCE.Silicon)*storagePrice); });
	Game.ui.bindElement('siliconStorageLunariteCost', function(){ return Game.settings.format(getStorage(RESOURCE.Silicon)/2.5*storagePrice); });
	Game.ui.bindElement('lavaStorageCost', function(){ return Game.settings.format(getStorage(RESOURCE.Lava)*storagePrice); });
	Game.ui.bindElement('lavaStorageLunariteCost', function(){ return Game.settings.format(getStorage(RESOURCE.Lava)/2.5*storagePrice); });
	Game.ui.bindElement('hydrogenStorageCost', function(){ return Game.settings.format(getStorage(RESOURCE.Hydrogen)*storagePrice); });
	Game.ui.bindElement('hydrogenStorageLunariteCost', function(){ return Game.settings.format(getStorage(RESOURCE.Hydrogen)/2.5*storagePrice); });
	Game.ui.bindElement('heliumStorageCost', function(){ return Game.settings.format(getStorage(RESOURCE.Helium)*storagePrice); });
	Game.ui.bindElement('heliumStorageLunariteCost', function(){ return Game.settings.format(getStorage(RESOURCE.Helium)/2.5*storagePrice); });
	Game.ui.bindElement('iceStorageCost', function(){ return Game.settings.format(getStorage(RESOURCE.Ice)*storagePrice); });
	Game.ui.bindElement('iceStorageLunariteCost', function(){ return Game.settings.format(getStorage(RESOURCE.Ice)/2.5*storagePrice); });
	Game.ui.bindElement('meteoriteStorageCost', function(){ return Game.settings.format(getStorage(RESOURCE.Meteorite)*storagePrice); });
	Game.ui.bindElement('meteoriteStorageLunariteCost', function(){ return Game.settings.format(getStorage(RESOURCE.Meteorite)*4*storagePrice); });

    Game.ui.bindElement('chemicalPlant', function(){ return Game.settings.format(chemicalPlant); });
    Game.ui.bindElement('chemicalPlantMetalCost', function(){ return Game.settings.format(chemicalPlantMetalCost); });
    Game.ui.bindElement('chemicalPlantGemCost', function(){ return Game.settings.format(chemicalPlantGemCost); });
    Game.ui.bindElement('chemicalPlantOilCost', function(){ return Game.settings.format(chemicalPlantOilCost); });
    Game.ui.bindElement('oxidisation', function(){ return Game.settings.format(oxidisation); });
    Game.ui.bindElement('oxidisationMetalCost', function(){ return Game.settings.format(oxidisationMetalCost); });
    Game.ui.bindElement('oxidisationGemCost', function(){ return Game.settings.format(oxidisationGemCost); });
    Game.ui.bindElement('oxidisationOilCost', function(){ return Game.settings.format(oxidisationOilCost); });
    Game.ui.bindElement('hydrazine', function(){ return Game.settings.format(hydrazine); });
    Game.ui.bindElement('hydrazineTitaniumCost', function(){ return Game.settings.format(hydrazineTitaniumCost); });
    Game.ui.bindElement('hydrazineSiliconCost', function(){ return Game.settings.format(hydrazineSiliconCost); });
    Game.ui.bindElement('hydrazineGoldCost', function(){ return Game.settings.format(hydrazineGoldCost); });
}

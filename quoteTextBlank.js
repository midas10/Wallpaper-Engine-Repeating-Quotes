/*
 * An adjusted script of mdrb97's WallPaper Dynamic Quote scripts.
 * Made by midas10
 * mrdb97's github: https://github.com/mdrb97
 * my github: https://github.com/midas10
 */
"use strict"
var initEngineRunTime;
var refreshRate = 10;

export function init(){
	let selectedElement = quotesArray[Math.floor(Math.random()*quotesArray.length)];
	let breakLineCounter = 0;
	thisLayer.text = getBrokenString(selectedElement['quoteText'], 5, () => breakLineCounter++);
	shared.quoteSettings = {
		isVisible: true,
		quote_author: `~${selectedElement['quoteAuthor']}`,
		breakLineCounter: breakLineCounter,
		xSize: thisLayer.size.x,
		ySize: thisLayer.size.y,
		yOrigin: thisLayer.origin.y,
		xOrigin: thisLayer.origin.x
	};
	initEngineRunTime = engine.runtime;
}


export function update(){
	if(thisLayer.visible === false)
		return;
		
	if(engine.runtime - initEngineRunTime > refreshRate){
		let selectedElement = quotesArray[Math.floor(Math.random()*quotesArray.length)];
		let breakLineCounter = 0;
		
		thisLayer.text = getBrokenString(selectedElement['quoteText'], 5, () => breakLineCounter++);
		shared.quoteSettings.quote_author = `~${selectedElement['quoteAuthor']}`;

		thisLayer.origin = thisLayer.origin.add(new Vec3(-(refreshRate*9.7), 0, 0))

		initEngineRunTime = engine.runtime;
	}
	else
		thisLayer.origin = thisLayer.origin.add(new Vec3(0.2, 0, 0));
}


var getBrokenString = function(originalStr, nWordsUntilBreak, afterEachLineBreakCallback){
	let quoteStringArray = originalStr.split(' ');
	let brokenQuoteStringArray = [];
	for(let i = 0; i < quoteStringArray.length; i++){
		brokenQuoteStringArray.push(quoteStringArray[i]);
		if(i !== 0 && i % nWordsUntilBreak === 0){
			afterEachLineBreakCallback();
			brokenQuoteStringArray.push("\n");
		}
	}
	return brokenQuoteStringArray.join(' ');
}
// quotes
var quotesArray = [{
"quoteText": "",
"quoteAuthor": ""
}];

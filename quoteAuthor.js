/*
 * An adjusted script of mdrb97's WallPaper Dynamic Quote scripts.
 * Made by midas10
 * mrdb97's github: https://github.com/mdrb97
 * my github: https://github.com/midas10
 */
'use strict';

var initEngineRuntime = 0;
var refreshRate = 10; 		// adjust this var to make refresh rate slower (higher) or faster (slower)
export function update(value) {
	thisLayer.text = shared.quoteSettings['quote_author'];
	thisLayer.origin = thisLayer.origin.subtract(new Vec3(0.2, 0, 0));	// dont change the movement variable for now, it will mess up the ratio w/ the position reset
	if(engine.runtime - initEngineRuntime > refreshRate){
		thisLayer.origin = thisLayer.origin.add(new Vec3((refreshRate*9.7), 0, 0))
		thisLayer.text = shared.quoteSettings['quote_author'];
		initEngineRuntime = engine.runtime;
	}
	return value;
}

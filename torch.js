/**
 * A simple script for putting on and off a torch for one or more tokens in Foundry VTT
*/

const tokens = canvas.tokens.controlled
tokens.forEach(hitTheLights);

function hitTheLights(token) {
    if (token.document.light.bright == 0) {
        token.document.update({ 'light.bright': 20, 'light.dim': 40, 'light.color': "#fdcf58", 'light.alpha': 0.2, 'light.animation': { type: "torch", speed: 4, intensity: 4 } });
    }
    else {
        token.document.update({ 'light.bright': 0, 'light.dim': 0, });
    }
}
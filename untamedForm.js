/**
 * A script for handling token image changes when using Untamed Form in FoundryVTT v14.
 * Currently supports insect, aerial and animal forms.
 * 
 * Change the pathToTokenImg folder to where you are storing your untamed form images.
 * The files should be in the same format (png for example, you can change the format extension) and named like the form name (ape.png, bear.png, bull.png etc).
 * 
 */

const token = canvas.tokens.controlled[0];
// Replace with the path to your token images
const pathToTokenImg = "worlds/pathfinder/assets/tokens/";
// Change if you have for example .webp token images
const fileExtension = ".png"
const originalImg = token.actor.prototypeToken.texture.src;
const effects = actor.itemTypes.effect;
let form = "";
let formType = "";

const animalFormEffect = actor.itemTypes.effect.find(e =>
    e.slug?.startsWith("spell-effect-animal-form")
);

const insectFormEffect = actor.itemTypes.effect.find(e =>
    e.slug?.startsWith("spell-effect-insect-form")
);

const aerialFormEffect = actor.itemTypes.effect.find(e =>
    e.slug?.startsWith("spell-effect-aerial-form")
);

if (animalFormEffect) {
    formType = "Animal";
} else if (insectFormEffect) {
    formType = "Insect";
} else if (aerialFormEffect) {
    formType = "Aerial";
} else {
    token.document.update({ "texture.src": originalImg });
    return;
}

form = animalFormEffect.name.replace(`Spell Effect: ${formType} Form (`, "").slice(0, -1).toLowerCase();
token.document.update({ "texture.src": `${pathToTokenImg}${form}${fileExtension}` });
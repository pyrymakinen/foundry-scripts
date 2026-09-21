/**
 * A script for handling token image changes when using PF2e Untamed Form in FoundryVTT v14.
 * Currently supports insect, aerial and animal forms.
 * 
 * Change the pathToTokenImg folder to where you are storing your untamed form images.
 * The files should be in the same format (png for example, you can change the format extension) and named like the form name (ape.png, bear.png, bull.png etc).
 * 
 * First drag and drop the effect to token, when the untamed form effect and animal/insect/aerial form are active, run the script.
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
    form = animalFormEffect.name.replace(`Spell Effect: Animal Form (`, "").slice(0, -1).toLowerCase();
} else if (insectFormEffect) {
    form = insectFormEffect.name.replace(`Spell Effect: Insect Form (`, "").slice(0, -1).toLowerCase();
} else if (aerialFormEffect) {
    form = aerialFormEffect.name.replace(`Spell Effect: Aerial Form (`, "").slice(0, -1).toLowerCase();
} else {
    token.document.update({ "texture.src": originalImg });
    return;
}

token.document.update({ "texture.src": `${pathToTokenImg}${form}${fileExtension}` });
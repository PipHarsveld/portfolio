const helpendehand = document.querySelector("main > section:nth-of-type(2) > ul > li:first-of-type img");
const helpendehandOverlay = document.querySelector("main > section:nth-of-type(2) > ul > li:first-of-type > article");
const helpendehandButton  = document.querySelector("main > section:nth-of-type(2) > ul > li:first-of-type > article > button");

const plantrebelz = document.querySelector("main > section:nth-of-type(2) > ul > li:nth-of-type(2) > img");
const plantrebelzOverlay = document.querySelector("main > section:nth-of-type(2) > ul > li:nth-of-type(2) > article");
const plantrebelzButton  = document.querySelector("main > section:nth-of-type(2) > ul > li:nth-of-type(2) > article > button");

const stylish = document.querySelector("main > section:nth-of-type(2) > ul > li:nth-of-type(3) > img");
const stylishOverlay = document.querySelector("main > section:nth-of-type(2) > ul > li:nth-of-type(3) > article");
const stylishButton  = document.querySelector("main > section:nth-of-type(2) > ul > li:nth-of-type(3) > article > button");

const camping = document.querySelector("main > section:nth-of-type(2) > ul > li:nth-of-type(4) > img");
const campingOverlay = document.querySelector("main > section:nth-of-type(2) > ul > li:nth-of-type(4) > article");
const campingButton  = document.querySelector("main > section:nth-of-type(2) > ul > li:nth-of-type(4) > article > button");

const portfolio = document.querySelector("main > section:nth-of-type(2) > ul > li:nth-of-type(5) > img");
const portfolioOverlay = document.querySelector("main > section:nth-of-type(2) > ul > li:nth-of-type(5) > article");
const portfolioButton  = document.querySelector("main > section:nth-of-type(2) > ul > li:nth-of-type(5) > article > button");

const isga = document.querySelector("main > section:nth-of-type(2) > ul > li:nth-of-type(6) > img");
const isgaOverlay = document.querySelector("main > section:nth-of-type(2) > ul > li:nth-of-type(6) > article");
const isgaButton  = document.querySelector("main > section:nth-of-type(2) > ul > li:nth-of-type(6) > article > button");

const helpendehandInfo = () => {
  helpendehandOverlay.classList.add(`toonOverlay`);
  console.log("helpende hand info");
}
const helpendehandSluiten = () => {
  helpendehandOverlay.classList.remove(`toonOverlay`);
  console.log("helpende hand sluiten");
}

const plantrebelzInfo = () => {
  plantrebelzOverlay.classList.add(`toonOverlay`);
  console.log("plantrebelz");
}
const plantrebelzSluiten = () => {
  plantrebelzOverlay.classList.remove(`toonOverlay`);
  console.log("plantrebelz sluiten");
}

const stylishInfo = () => {
  stylishOverlay.classList.add(`toonOverlay`);
  console.log("stylish");
}
const stylishSluiten = () => {
  stylishOverlay.classList.remove(`toonOverlay`);
  console.log("stylish sluiten");
}

const campingInfo = () => {
  campingOverlay.classList.add(`toonOverlay`);
  console.log("camping");
}
const campingSluiten = () => {
  campingOverlay.classList.remove(`toonOverlay`);
  console.log("camping sluiten");
}

const portfolioInfo = () => {
  portfolioOverlay.classList.add(`toonOverlay`);
  console.log("portfolio");
}
const portfolioSluiten = () => {
  portfolioOverlay.classList.remove(`toonOverlay`);
  console.log("portfolio sluiten");
}

const isgaInfo = () => {
  isgaOverlay.classList.add(`toonOverlay`);
  console.log("isga");
}
const isgaSluiten = () => {
  isgaOverlay.classList.remove(`toonOverlay`);
  console.log("isga sluiten");
}

helpendehand.addEventListener(`click`, helpendehandInfo);
helpendehandButton.addEventListener(`click`, helpendehandSluiten);

plantrebelz.addEventListener(`click`, plantrebelzInfo);
plantrebelzButton.addEventListener(`click`, plantrebelzSluiten);

stylish.addEventListener(`click`, stylishInfo);
stylishButton.addEventListener(`click`, stylishSluiten);

camping.addEventListener(`click`, campingInfo);
campingButton.addEventListener(`click`, campingSluiten);

portfolio.addEventListener(`click`, portfolioInfo);
portfolioButton.addEventListener(`click`, portfolioSluiten);

isga.addEventListener(`click`, isgaInfo);
isgaButton.addEventListener(`click`, isgaSluiten);
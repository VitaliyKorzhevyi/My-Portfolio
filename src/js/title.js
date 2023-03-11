// для banner

const logoBannerEl = document.querySelectorAll('.big-logo span');
let stepBanner = 0.1;
logoBannerEl.forEach((span) => {
  span.style.animationDelay = `${stepBanner}s`;
  stepBanner += 0.15;
});

// для header

const logoHeaderEl = document.querySelectorAll('.logo span');
let stepHeader = 0.1;

logoHeaderEl.forEach((span) => {
  span.style.animationDelay = `${stepHeader}s`;
  stepHeader += 0.1;
});

// для developer

const logoDeveloperEl = document.querySelectorAll('.developer-text span');
let stepDev = 0.1;

logoDeveloperEl.forEach((span) => {
  span.style.animationDelay = `${stepDev}s`;
  stepDev += 0.1;
});

// для about

const logoAboutEl = document.querySelectorAll('.text-logo-about span');
let stepAbout = 0.1;

logoAboutEl.forEach((span) => {
  span.style.animationDelay = `${stepAbout}s`;
  stepAbout += 0.1;
});

// для serviсes

const logoServicesEl = document.querySelectorAll('.text-logo-services span');
let stepServices = 0.1;

logoServicesEl.forEach((span) => {
  span.style.animationDelay = `${stepServices}s`;
  stepServices += 0.13;
});

// для portfolio

const logoPortfolioEl = document.querySelectorAll('.text-logo-portfolio span');
let stepPort = 0.1;

logoPortfolioEl.forEach((span) => {
  span.style.animationDelay = `${stepPort}s`;
  stepPort += 0.13;
});

// для experimental

const logoExperimentalEl = document.querySelectorAll('.healing-experimental span');
let stepEx = 0.1;

logoExperimentalEl.forEach((span) => {
  span.style.animationDelay = `${stepEx}s`;
  stepEx += 0.1;
});

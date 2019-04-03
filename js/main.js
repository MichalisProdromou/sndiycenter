const welcomeTitle = "Welcome to S.N. DIY Center.";
const welcomeSub = "We are a local family business with more than 20 years of experience in the field."
const welcomeMsg = `In our shop you can find household materials for home improvement including: Building materials, hand tools, power tools, keys, locks, hinges, chains, plumbing supplies, electrical supplies, cleaning products, swimming pool chemicals, paints, garden and irrigation products and much more.
At S.N. DIY Center we always provide a friendly environment to our customers and we aid them in finding what they need.`;

window.onload = function(){
  const welcomeTitleElem = document.querySelector('.welcome-msg-title');
  const welcomeSubElem = document.querySelector('.welcome-msg-subtitle');
  const welcomeMsgElem = document.querySelector('.welcome-msg');
  welcomeTitleElem.textContent = welcomeTitle;
  welcomeSubElem.textContent = welcomeSub;
  welcomeMsgElem.textContent = welcomeMsg;
}


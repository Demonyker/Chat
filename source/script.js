/* eslint-disable object-shorthand */
/* eslint-disable no-unused-expressions */
/* eslint-disable prefer-template */
/* eslint-disable no-undef */
window.onload = () => {
  (function chat() {
    const pubnub = new PubNub({ publishKey: 'pub-c-1e1103cf-61df-4737-ab8a-f5ad4cd65aa8', subscribeKey : 'sub-c-7c740a9a-a2f0-11e9-806d-8e5101bba1a5'}); // Your PubNub keys here. Get them from https://dashboard.pubnub.com.
    const box0 = document.getElementsByClassName('chat__text');
    const box = box0[0];
    const input0 = document.getElementsByClassName('chat__input-text');
    const input = input0[0];
    const channel = 'chat';
    const button0 = document.getElementsByClassName('chat__button-submit');
    const button = button0[0];
    pubnub.subscribe({ channels: [channel] }); // Subscribe to a channel.
    pubnub.addListener({
      message(m) {
        box.innerHTML = `<p class="chat__message">${('' + m.message).replace( /[<>]/g, '')}</p>` + box.innerHTML; // Add message to page.
      },
    });
    input.addEventListener('keypress', (e) => {
      (e.keyCode || e.charCode) === 13 && pubnub.publish({ // Publish new message when enter is pressed. 
        channel: channel, message: input.value, x: (input.value = ''),
      });
    });
    button.onclick = () => {
      pubnub.publish({ // Publish new message when enter is pressed.
        channel: channel, message: input.value, x: (input.value = ''),
      });
    };
  }());
};

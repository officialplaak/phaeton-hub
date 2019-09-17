## Protocols

Phaeton-hub as a part of electron application can use custom protocols.
In the other words You are able to open Phaeton-hub desktop application using our custom protocol `phaeton`.

:exclamation: Please keep in mind that not all browsers has handling custom protocols handled as default.

#### Basic usage
After installing phaeton-hub on your device you will be able to use `phaeton` protocol.
Example: `phaeton://wallet`
![Alt text](./assets/phaeton_wallet.png?raw=true "Phaeton protocol basic")
Everything that comes after `phaeton://` is treated as a route so this example will open phaeton-hub app on wallet page.

#### Voting protocol
Makes voting for delegates easier 
`phaeton://main/voting/vote?votes=thepool,4miners.net` or `phaeton://delegates/vote?votes=thepool,4miners.net`
It will open phaeton app and select delegates automatically `thepool` and `4miners.net`

:exclamation: Please keep in mind that We don't use `/main` route anymore but some websites still relay on an old url so We are allowing `/main` in this particular case `main/voting/vote`.

![Alt text](./assets/voting_protocol.png?raw=true "Phaeton voting protocol")

#### Network switcher protocol
Opens the login page and enables the network switcher options.

`phaeton://add-account?showNetwork=true`

![Alt text](./assets/network_switcher.png?raw=true "Phaeton voting protocol")

#### Send protocol
Opens the wallet and prefills the send form with recipient and amount.

`phaeton://wallet?recipient=16313739661670634666L&amount=5`

![Alt text](./assets/send.png?raw=true "Phaeton voting protocol")

#### Sign message protocol
Opens the sign message form and prefills it with your message.

`phaeton://sign-message?message=my message`

![Alt text](./assets/sign_message.png?raw=true "Phaeton voting protocol")


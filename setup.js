var Lisk = require('lisk-elements');

passphase="lunch price prevent response helmet glory actual deer two nose forward win";
data = "5e00ec481ae697c4ad18362a0dd3180762880f56a839c89b640f944b60cfffbe";
data1 = "5e20ec4820e697c4ad20362a20d3202062882056a839c89b6420944b60cfffbe";

// console.log(Lisk.cryptography.getKeys(passphrase).publicKey);

// console.log(Lisk.cryptography.getAddressFromPublicKey(data));

// console.log(Lisk.cryptography.getAddressAndPublicKeyFromPassphrase(passphase));

// console.log(Lisk.cryptography.getPrivateAndPublicKeyFromPassphrase(passphase));

// console.log(Lisk.cryptography.getPrivateAndPublicKeyBytesFromPassphrase(passphase));

// console.log(Buffer.from(data));

/*
console.log(Lisk.transaction.transfer({
    amount: '560000000',
    recipientId: '8915991036464781888L',
    recipientPublicKey: 'f239284d1e3f4883d091bc88e9c7cd8fad4a41db7dd0dde58bbc3771b01f4ec8',
    data : 'Hello Plaak 8',
    passphrase: 'rate throw fade access stay depend tunnel spray apart define behind nature',
    
})); // Transfer Signed transaction
*/

// {"amount":"10000000","asset":{},"fee":"10000000","id" : "14980309028184532873","recipientId" : "4540393408310767905L","recipientPublicKey": null,"senderPublicKey": "5e00ec481ae697c4ad18362a0dd3180762880f56a839c89b640f944b60cfffbe","signature": "c2c240cf0ea2683e9be53ff136674f5540524ac4a302732391c600dedd7e22814b0399a77b7faacbbd8f522f891ac6323bf7b451831730db534ffd005ac44602","timestamp":71000178,"type":0 }

/*
console.log(Lisk.transaction.registerDelegate({
    username: 'plaak_4',
    passphrase: 'wrestle twelve vendor delay shallow fossil wheat glide lemon ramp reduce protect',
})); // Delegates Signed transaction
*/

/*console.log(Lisk.transaction.castVotes({
    votes: ['5e00ec481ae697c4ad18362a0dd3180762880f56a839c89b640f944b60cfffbe','6caaef6873e61e39e413c9011d816a953b8169cc04d50eb5fce57f35ebc87786','f239284d1e3f4883d091bc88e9c7cd8fad4a41db7dd0dde58bbc3771b01f4ec8'],
    passphrase: 'wrestle twelve vendor delay shallow fossil wheat glide lemon ramp reduce protect',
    senderId: "5123416281361170566L",
})); //  Cast Vote Signed transaction
*/

// Generate Public Key and get Address
console.log(Lisk.cryptography.getAddressAndPublicKeyFromPassphrase(
    'lunch price prevent response helmet glory actual deer two nose forward win'
));

console.log(Lisk.cryptography.getAddressFromPassphrase(
    'lunch price prevent response helmet glory actual deer two nose forward win'
));

console.log(Lisk.cryptography.getPrivateAndPublicKeyFromPassphrase(
    'lunch price prevent response helmet glory actual deer two nose forward win'
));


// Generate Public Key and get Address
// console.log("Public key and Address"+ Lisk.cryptography.getAddressFromPublicKey(data1));
//console.log("Public key and Address"+ Lisk.cryptography.getAddressFromPassphrase(passphase));
// { address: '10609379708772874815L',  publicKey: '5e00ec481ae697c4ad18362a0dd3180762880f56a839c89b640f944b60cfffbe' }

/* ----------------------------------------------------------------------------------------------------------------------
 * GENESIS BLOCK 2  :: elephant tree paris dragon chair galaxy
 * ----------------------------------------------------------------------------------------------------------------------
 * Public Key && Private Key :: Lisk.cryptography.getPrivateAndPublicKeyFromPassphrase(passphase)
 * ----------------------------------------------------------------------------------------------------------------------
 * 
 lunch price prevent response helmet glory actual deer two nose forward win
 { address: '10609379708772874815L',  publicKey: '5e00ec481ae697c4ad18362a0dd3180762880f56a839c89b640f944b60cfffbe', privateKey: 'ac083b777a36566b79b3ad30dccd48fa46f6fd01d5892e065e96734a7dfc133e5e00ec481ae697c4ad18362a0dd3180762880f56a839c89b640f944b60cfffbe' }
 { address: '4540393408310767905L',   publicKey: '5e00ec481ae697c4ad18362a0dd3180762880f56a839c89b640f944b60cfffbe', privateKey: 'ac083b777a36566b79b3ad30dccd48fa46f6fd01d5892e065e96734a7dfc133e5e00ec481ae697c4ad18362a0dd3180762880f56a839c89b640f944b60cfffbe' }
--------------                                    
 rate throw fade access stay depend tunnel spray apart define behind nature
 { address: '7878240535114445572L',  publicKey: '6caaef6873e61e39e413c9011d816a953b8169cc04d50eb5fce57f35ebc87786', privateKey: 'dd2bd9284c86f293f0dc852ced06041d079eec27e2ab5db10dc5cf6fb3d8b2636caaef6873e61e39e413c9011d816a953b8169cc04d50eb5fce57f35ebc87786' }
 { address: '7141483601469737392L',  publicKey: '6caaef6873e61e39e413c9011d816a953b8169cc04d50eb5fce57f35ebc87786', privateKey: 'dd2bd9284c86f293f0dc852ced06041d079eec27e2ab5db10dc5cf6fb3d8b2636caaef6873e61e39e413c9011d816a953b8169cc04d50eb5fce57f35ebc87786' }
--------------
 salmon common flip aim prefer multiply flag about parade erosion crucial cup
 { address: '3022481002821754746L',  publicKey: 'f239284d1e3f4883d091bc88e9c7cd8fad4a41db7dd0dde58bbc3771b01f4ec8', privateKey: '52c028e1d0ef1f4acd081a3b996a916c40547ae7e5c464d0623644b16bd9a586f239284d1e3f4883d091bc88e9c7cd8fad4a41db7dd0dde58bbc3771b01f4ec8'} 
 { address: '8915991036464781888L',  publicKey: 'f239284d1e3f4883d091bc88e9c7cd8fad4a41db7dd0dde58bbc3771b01f4ec8', privateKey: '52c028e1d0ef1f4acd081a3b996a916c40547ae7e5c464d0623644b16bd9a586f239284d1e3f4883d091bc88e9c7cd8fad4a41db7dd0dde58bbc3771b01f4ec8'} 
--------------  
 wrestle twelve vendor delay shallow fossil wheat glide lemon ramp reduce protect
 { address: '12256985891007870537L',  publicKey: '8015e3ba9c8614219b8a323a3270a15a342d48f5070b50b94bd5a643273b4fa5', privateKey: '73ebce761f270a8756df9646c7ca0cd4a485afe83f8c1c99ce86150cfb8f86558015e3ba9c8614219b8a323a3270a15a342d48f5070b50b94bd5a643273b4fa5' }
 { address: '5123416281361170566L',  publicKey: '8015e3ba9c8614219b8a323a3270a15a342d48f5070b50b94bd5a643273b4fa5', privateKey: '73ebce761f270a8756df9646c7ca0cd4a485afe83f8c1c99ce86150cfb8f86558015e3ba9c8614219b8a323a3270a15a342d48f5070b50b94bd5a643273b4fa5' }

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
* 
* 
* Transaction :: 1
* 
1	{
		"amount": "123000000000",
		"recipientId": "4540393408310767905L",
		"recipientPublicKey": '5e00ec481ae697c4ad18362a0dd3180762880f56a839c89b640f944b60cfffbe',
		"data" : " Hi there 1",
		"passphrase" : "rate throw fade access stay depend tunnel spray apart define behind nature",
	}


2	{
		"amount": "41230000",
		"recipientId": "7141483601469737392L",
		"recipientPublicKey": '6caaef6873e61e39e413c9011d816a953b8169cc04d50eb5fce57f35ebc87786',
		"data" : " Hello Plaak 2",
		"passphrase" : "lunch price prevent response helmet glory actual deer two nose forward win",
	}
	
	
3	{
		"amount": "21022330000",
		"recipientId": "8915991036464781888L",
		"recipientPublicKey": 'f239284d1e3f4883d091bc88e9c7cd8fad4a41db7dd0dde58bbc3771b01f4ec8',
		"data" : " Hello Plaak 3",
		"passphrase" : "wrestle twelve vendor delay shallow fossil wheat glide lemon ramp reduce protect",
	}
	
	
4	{
		"amount": "2100000000",
		"recipientId": "5123416281361170566L",
		"recipientPublicKey": '8015e3ba9c8614219b8a323a3270a15a342d48f5070b50b94bd5a643273b4fa5',
		"data" : " Hello Plaak 4",
		"passphrase" : "salmon common flip aim prefer multiply flag about parade erosion crucial cup",
	}
	
5	{
		"amount": "410000000",
		"recipientId": "4540393408310767905L",
		"recipientPublicKey": '5e00ec481ae697c4ad18362a0dd3180762880f56a839c89b640f944b60cfffbe',
		"data" : " Hello Plaak 5",
		"passphrase" : "wrestle twelve vendor delay shallow fossil wheat glide lemon ramp reduce protect",
	}
	
6	{
		"amount": "1300000000",
		"recipientId": "5123416281361170566L",
		"recipientPublicKey": '8015e3ba9c8614219b8a323a3270a15a342d48f5070b50b94bd5a643273b4fa5',
		"data" : " Hello Plaak 6",
		"passphrase" : "lunch price prevent response helmet glory actual deer two nose forward win",
	}
	 
7	{
		"amount": "2400000000",
		"recipientId": "7141483601469737392L",
		"recipientPublicKey": '6caaef6873e61e39e413c9011d816a953b8169cc04d50eb5fce57f35ebc87786',
		"data" : " Hello Plaak 7",
		"passphrase" : "salmon common flip aim prefer multiply flag about parade erosion crucial cup",
	}
	
8	{
		"amount": "560000000",
		"recipientId": "8915991036464781888L",
		"recipientPublicKey": 'f239284d1e3f4883d091bc88e9c7cd8fad4a41db7dd0dde58bbc3771b01f4ec8',
		"data" : " Hello Plaak",
		"passphrase" : "rate throw fade access stay depend tunnel spray apart define behind nature",
	} 

9   {
		username: 'plaak_1',
		passphrase: 'lunch price prevent response helmet glory actual deer two nose forward win',
	},

10 
	{
		username: 'plaak_2',
		passphrase: 'rate throw fade access stay depend tunnel spray apart define behind nature',
	}

11 
	{
		username: 'plaak_3',
		passphrase: 'salmon common flip aim prefer multiply flag about parade erosion crucial cup',
	}

12 
	{
		username: 'plaak_4',
		passphrase: 'wrestle twelve vendor delay shallow fossil wheat glide lemon ramp reduce protect',
	}


13	{
		votes: '9d3058175acab969f41ad9b86f7a2926c74258670fe56b37c429c01fca9f2f0f',
		passphrase: 'robust swift grocery peasant forget share enable convince deputy road keep cheap',
	}

14	{
		votes: '9d3058175acab969f41ad9b86f7a2926c74258670fe56b37c429c01fca9f2f0f',
		passphrase: 'robust swift grocery peasant forget share enable convince deputy road keep cheap',
	}

15	{
		votes: '9d3058175acab969f41ad9b86f7a2926c74258670fe56b37c429c01fca9f2f0f',
		passphrase: 'robust swift grocery peasant forget share enable convince deputy road keep cheap',
	}

16	{
		votes: '9d3058175acab969f41ad9b86f7a2926c74258670fe56b37c429c01fca9f2f0f',
		passphrase: 'robust swift grocery peasant forget share enable convince deputy road keep cheap',
	}
* 	
* 
* 
* 
* 
* 
* 
	{ 
		'amount': '123000000000',
		'recipientId': '4540393408310767905L',
		'senderPublicKey': '6caaef6873e61e39e413c9011d816a953b8169cc04d50eb5fce57f35ebc87786',
		'timestamp': 70917323,
		'type': 0,
		'fee': '10000000',
		'recipientPublicKey': '5e00ec481ae697c4ad18362a0dd3180762880f56a839c89b640f944b60cfffbe',
		'asset': { 'data': 'Hello Plaak' },
		'signature': 'd7aaf926c7e8a67748bd80268cd4809354f780ab0b000c4c776e316ad9c9c5f741154ef32c6e352b964cfb897d84d188b698352a90d63007e70e0589ed14ae0a',
		'id': '1957913958356753523' 
	},
	{
		'amount': '41230000',
		'recipientId': '7141483601469737392L',
		'senderPublicKey': '5e00ec481ae697c4ad18362a0dd3180762880f56a839c89b640f944b60cfffbe',
		'timestamp': 70917432,
		'type': 0,
		'fee': '10000000',
		'recipientPublicKey': '6caaef6873e61e39e413c9011d816a953b8169cc04d50eb5fce57f35ebc87786',
		'asset': { 'data': 'Hello Plaak' },
		'signature': 'bf30bc0d5d3d18b0cf3d278fd3d80cc62cf2938460afe318cab22a87f01a148c95eee3e0e1897d72289c14dfb9bc0a0c8ff2e5e48579944e353df06382434c01',
		'id': '9961311301049585969'
	},
	{
		'amount': '21022330000',
		'recipientId': '8915991036464781888L',
		'senderPublicKey': '8015e3ba9c8614219b8a323a3270a15a342d48f5070b50b94bd5a643273b4fa5',
		'timestamp': 70917555,
		'type': 0,
		'fee': '10000000',
		'recipientPublicKey': 'f239284d1e3f4883d091bc88e9c7cd8fad4a41db7dd0dde58bbc3771b01f4ec8',
		'asset': { 'data': 'Hello Plaak 3' },
		'signature': 'befc7c5b2722d0a53f21d492cbfe2b9fa3a2972749d7e2093a493f493d0b566db535de6576b3caee1510e9189cf0b1da2a90e894809e55331ec233f2962f3d06',
		'id': '6124460339608647122' 
	},
	{
		'amount': '2100000000',
		'recipientId': '5123416281361170566L',
		'senderPublicKey': 'f239284d1e3f4883d091bc88e9c7cd8fad4a41db7dd0dde58bbc3771b01f4ec8',
		'timestamp': 70917664,
		'type': 0,
		'fee': '10000000',
		'recipientPublicKey': '8015e3ba9c8614219b8a323a3270a15a342d48f5070b50b94bd5a643273b4fa5',
		'asset': { 'data': 'Hello Plaak 4' },
		'signature': '17a03f6a950ed06b88aec510c215ba723208801ad8b161c1a364dac15ab8a3ad437193d5f67aa0a6b40a6729caf651e3b60aecf4419eb9fb2254ec170085b40d',
		'id': '6639846925115136616' 
	},
	{
		'amount': '410000000',
		'recipientId': '4540393408310767905L',
		'senderPublicKey': '8015e3ba9c8614219b8a323a3270a15a342d48f5070b50b94bd5a643273b4fa5',
		'timestamp': 70917808,
		'type': 0,
		'fee': '10000000',
		'recipientPublicKey': '5e00ec481ae697c4ad18362a0dd3180762880f56a839c89b640f944b60cfffbe',
		'asset': { 'data': 'Hello Plaak 5' },
		'signature': '6d0442e5de0e0edf7b5330a4a118391a5dc85ca555922a0c0caa4226f2b5f6a7ae1518df6ba8757d98257ceacfd146439c08cd9ba5b8fb3761fa69fa2fd3ce0c',
		'id': '8896906620605794822'
	},
	{ 
		'amount': '1300000000',
		'recipientId': '5123416281361170566L',
		'senderPublicKey': '5e00ec481ae697c4ad18362a0dd3180762880f56a839c89b640f944b60cfffbe',
		'timestamp': 70917937,
		'type': 0,
		'fee': '10000000',
		'recipientPublicKey': '8015e3ba9c8614219b8a323a3270a15a342d48f5070b50b94bd5a643273b4fa5',
		'asset': { 'data': 'Hello Plaak 6' },
		'signature': 'ba18d22930caeef0219aa77f2f3902989574deec5f18a6a4384ee517e47823f45bd81aac76cbc59aa6142a841ce7225542b042873fd8dfe690cd6b67615b040a',
		'id': '8135358899913874954'
	},
	{
		'amount': '2400000000',
		'recipientId': '7141483601469737392L',
		'senderPublicKey': 'f239284d1e3f4883d091bc88e9c7cd8fad4a41db7dd0dde58bbc3771b01f4ec8',
		'timestamp': 70918032,
		'type': 0,
		'fee': '10000000',
		'recipientPublicKey': '6caaef6873e61e39e413c9011d816a953b8169cc04d50eb5fce57f35ebc87786',
		'asset': { 'data': 'Hello Plaak 7' },
		'signature': '0193bf2bb49352e7444082e4c561b8c06a46c062ea2fddcd6098ede8aa14dcb91fd869c7fec675d954cbdaaf120fd1121e98b1e49b2e0f004a295fbdc046f20a',
		'id': '16174229183805069674'
	},
	{
		'amount': '560000000',
		'recipientId': '8915991036464781888L',
		'senderPublicKey': '6caaef6873e61e39e413c9011d816a953b8169cc04d50eb5fce57f35ebc87786',
		'timestamp': 70918145,
		'type': 0,
		'fee': '10000000',
		'recipientPublicKey': 'f239284d1e3f4883d091bc88e9c7cd8fad4a41db7dd0dde58bbc3771b01f4ec8',
		'asset': { 'data': 'Hello Plaak 8' },
		'signature': '9b9850af1cd5b459e0f340f47bfc1f067eaa21c9d9b90d5d4b6c9ce6f5b4b4a911d6ae1d1cdffaae10dafbf91fb39d9edb6b5435f3f6e5c475c017f62a72d002',
		'id': '10602131273061337889'
   },
	{
		'amount': '0',
		'recipientId': '',
		'senderPublicKey': '5e00ec481ae697c4ad18362a0dd3180762880f56a839c89b640f944b60cfffbe',
		'timestamp': 70919296,
		'type': 2,
		'fee': '2500000000',
		'asset': { 'delegate': { 'username': 'plaak_1' } },
		'signature': 'd2a34f8b5058f43de0e6bf1e5bcbc4b8d4347beb878242137b89e23436a7fbf51ce4dae18aa803299be29eda6849b19060582c7f7acb33a228393181a099c60d',
		'id': '14423736449336677104'
	},
	{
		'amount': '0',
		'recipientId': '',
		'senderPublicKey': '6caaef6873e61e39e413c9011d816a953b8169cc04d50eb5fce57f35ebc87786',
		'timestamp': 70919424,
		'type': 2,
		'fee': '2500000000',
		'asset': { 'delegate': {' username': 'plaak_2' } },
		'signature': '26d1c51f03a578db434d4c7dbdf565582eb66f924bfc5d90bbb3dceaacc3d2c00d9b6ccd3edc682cf773fd2aff4ec69facf9958ffb9f96f0783fe4ed2bce5e0b',
		'id': '15577171043507269171'
	},
	{
		'amount': '0',
		'recipientId': '',
		'senderPublicKey': 'f239284d1e3f4883d091bc88e9c7cd8fad4a41db7dd0dde58bbc3771b01f4ec8',
		'timestamp': 70919487,
		'type': 2,
		'fee': '2500000000',
		'asset': { 'delegate': { 'usernam'e: 'plaak_3' } },
		'signature': '6e1f2fd93a02a21c20ddf72e6d0992308188eb90c60b33426c02cab7645a8816f1664a39065ff937710a50612dd894a419b07ab542aff5f40d9ddd09d3209005',
		'id': '1018629088906773280'
	},
	{
		'amount': '0',
		'recipientId': '',
		'senderPublicKey': '8015e3ba9c8614219b8a323a3270a15a342d48f5070b50b94bd5a643273b4fa5',
		'timestamp': 70919505,
		'type': 2,
		'fee': '2500000000',
		'asset': { 'delegate': { 'username': 'plaak_4' } },
		signature: 'e5fcf77666443582db9ed82cb920731aefe1b45d7e6e5785a85edc6a7737126282c92530732ff38e5288a4db5346788e53828ce0f06882b13f3bb4fd82095609',
		id: '504735032021346170'
	},
	{ 
		'amount': '0',
		'recipientId': '4540393408310767905L',
		'senderPublicKey': '5e00ec481ae697c4ad18362a0dd3180762880f56a839c89b640f944b60cfffbe',
		'timestamp': 70919777,
		'type': 3,
		'fee': '100000000',
		'asset': 
		{ 'votes': 
		  [ '+6caaef6873e61e39e413c9011d816a953b8169cc04d50eb5fce57f35ebc87786',
			'+f239284d1e3f4883d091bc88e9c7cd8fad4a41db7dd0dde58bbc3771b01f4ec8',
			'+8015e3ba9c8614219b8a323a3270a15a342d48f5070b50b94bd5a643273b4fa5' ] },
		'signature': '0e06c571db8acf3e49c6102255d876aada51e14f7b8ebd74efec385be0c40bc658e0585fe9558818cf543ab55b3b2f614ca2ee2dff0801a76b7687e491a53306',
		'id': '8481753808895802694' 
	},
	{ 
		'amount': '0',
		'recipientId': '7141483601469737392L',
		'senderPublicKey': '6caaef6873e61e39e413c9011d816a953b8169cc04d50eb5fce57f35ebc87786',
		'timestamp': 70920624,
		'type': 3,
		'fee': '100000000',
		'asset': 
		{ 'votes': 
		  [ '+5e00ec481ae697c4ad18362a0dd3180762880f56a839c89b640f944b60cfffbe',
			'+f239284d1e3f4883d091bc88e9c7cd8fad4a41db7dd0dde58bbc3771b01f4ec8',
			'+8015e3ba9c8614219b8a323a3270a15a342d48f5070b50b94bd5a643273b4fa5' ] },
		'signature': '0aca9fbdd8f7bf8f8ab3b1d968f1c5743d1e5011f927d8ac806596d3b5e16aa3f2313e6661089e0ad95081161fdf06fd2e76e57db9088768766d57974af5ac03',
		'id': '135047978209413804'
	},
	{
		'amount': '0',
		'recipientId': '8915991036464781888L',
		'senderPublicKey': 'f239284d1e3f4883d091bc88e9c7cd8fad4a41db7dd0dde58bbc3771b01f4ec8',
		'timestamp': 70920678,
		'type': 3,
		'fee': '100000000',
		'asset': 
		{ 'votes': 
		  [ '+5e00ec481ae697c4ad18362a0dd3180762880f56a839c89b640f944b60cfffbe',
			'+6caaef6873e61e39e413c9011d816a953b8169cc04d50eb5fce57f35ebc87786',
			'+8015e3ba9c8614219b8a323a3270a15a342d48f5070b50b94bd5a643273b4fa5' ] },
		'signature': 'c2f83a48001f33b29f377c765597fd0d34ab7d710c0ecef1f2760376d68c93886ac7c2a1910a77ff5907ca247b78afec682e48212b3b5e666150f0e3ff153c01',
		'id': '12930821529044836924'
	},
	{ 
		'amount': '0',
		'recipientId': '5123416281361170566L',
		'senderPublicKey': '8015e3ba9c8614219b8a323a3270a15a342d48f5070b50b94bd5a643273b4fa5',
		'timestamp': 70920734,
		'type': 3,
		'fee': '100000000',
		'asset': 
		{ 'votes': 
		  [ '+5e00ec481ae697c4ad18362a0dd3180762880f56a839c89b640f944b60cfffbe',
			'+6caaef6873e61e39e413c9011d816a953b8169cc04d50eb5fce57f35ebc87786',
			'+f239284d1e3f4883d091bc88e9c7cd8fad4a41db7dd0dde58bbc3771b01f4ec8' ] },
		'signature': '600bb69610bed7af475366656c724a1ab6650a0a6bb75c42c799a2e229a9e6fac5a6580db51a77bfcd9e888ae5fa276c3745ee349497efceb12a9638d9ad700b',
		'id': '4165632684099547852'
	}

* 
* elephant tree paris dragon chair galaxy
* 
{
	"encryptedPassphrase": "salt=9f47271452ef6f1fb217a39183420a49&cipherText=9fc56bfb5adb0c04b30db60d0609f43607ef54613ea8312ba33b5d6c6c5a460305a5b29fd3b9faefc612bb252a05c680f73ff49525b3940c662878ee9dd52e5e94d38eb5acc2f6362f05&iv=48bea7e7329fbb44be9dedc0&tag=45f045d21616e30928b71b5d03c560b2&version=1",
	"publicKey" : "5e00ec481ae697c4ad18362a0dd3180762880f56a839c89b640f944b60cfffbe" 
},
{
	"encryptedPassphrase": "salt=82b4c296cdf0c056dac72c946ff44e54&cipherText=573943be47f455b037bd7ec9dc5a6fe54ea4b1f0a3d908e0e329546200adb6b1c9601aa26a2b27673ad6469e728a485dcfffc6b89f6fdadabf6e5b0d890685b125025252492794aac399&iv=b2eb9f11aa65aca7876c3e8b&tag=35ff705a78e22f9b1a4c552e2ae81a2a&version=1",
	"publicKey" :  "6caaef6873e61e39e413c9011d816a953b8169cc04d50eb5fce57f35ebc87786"
},
{
	"encryptedPassphrase": "salt=43f4b1f8410d5855f817343b8834a2fa&cipherText=65eefc7f70f221a2182683a629a4c3042413f4630aaaca08ab9dd0a81ac951fcec448bed8aa1fec0847211ecfc5baf0e6cd85a6ea4a9fbe9f38f83d2da9bc7d90edac66575de2c8b34e95ba1&iv=4606398a61e9357102322a46&tag=9516ca5d81751a1f7c14197bb98cb177&version=1",
	"publicKey" : "f239284d1e3f4883d091bc88e9c7cd8fad4a41db7dd0dde58bbc3771b01f4ec8"
},
{
	"encryptedPassphrase": "salt=c9e439549480889fe536aeed4cd6b011&cipherText=1d4fb020ed947cd6bf8906595a8bc8372e2b8b965cb7ff1ecb462444d3350847a840a084790a4503750bd166c14a105db43a5d81b3a5ef6119351ed41888b60a75239155cb6864f85e11703e1ae7c73e&iv=5590db02fefcca64784fc331&tag=eac569d468b8d6c10af199aa5fe287e9&version=1",
	"publicKey" : "8015e3ba9c8614219b8a323a3270a15a342d48f5070b50b94bd5a643273b4fa5"
}



**/




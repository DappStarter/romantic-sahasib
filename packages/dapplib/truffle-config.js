require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'include kiwi flame table educate ranch remind history half argue surge series'; 
let testAccounts = [
"0xf2eb2df49299557a8ebe4ca2d09e42d2e22e91d977d00bf7d74fb0030c711b10",
"0xfdbbb83eb3b665c9842262162365a6eee8b2f14224f0bbe942f9f0be537350bc",
"0x4f7e26ca39200f64235423e2f478f082dbb0c407175b49fa2f57a7feef614c0f",
"0x841f4b4ae4a823c35508f79dcb626dfc57673eb948ba93c0eb901bbb60f9883b",
"0x113fdac5185599a37f2b19f7a9b9050a6f16dde2f28abaddf644e229ff5c4609",
"0x2a2a2884d1c709d5f51f45d09102138f4ebd0311a2094eae65d2e33c04e964f8",
"0xea762426738502e17ad4778c22da2fb01f7d582abb6928bd023a17e4383c2515",
"0xcdfcda343983033fd256de249c57a954f3df08842ecaf4ea04709fc1502157b1",
"0xb24d974f7147391f9d554549ce94bd5739dcfc682a3693ceba0f8a3687cc4928",
"0x5bd671f2483491f105b0c1191f15a2d54c06dc70b05649f69caf965c2a81690c"
]; 
let rpcUri = 'https://rpc-mumbai.matic.today';
let wsUri = 'wss://ws-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: rpcUri,
            wsUri: wsUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                rpcUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

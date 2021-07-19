require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good argue sure spot toy note payment unit gesture merry flock setup'; 
let testAccounts = [
"0x3f9d31675b0c19fae3924877a11ba0e6163022045a9c66465322206c2035dc7f",
"0x488bfd4443dcead542aa83474cd61756a22aa15de4e6e5c3de1a97d4907b1a36",
"0x9b2dd34f87f007d46732f5d0a3d91c0e7401cca3483f9d8f505cce85af3131b7",
"0x51e6c1cd0a82e87d472c2d928dbfd71488883e6dbdc9b75ed23b36867427b27e",
"0x3d2190a883d40aefad105df39d3abd85de4bf79ef486ffe764529b540f15936d",
"0x87e0bd055dc06b20d79efa19343377e7ffba8ae6f0b07384f960499f63fc89be",
"0xb9fe3eb7b50e7430b5136163fe02cc36a51e093828c3b903a263d74d61723aad",
"0xb0603b8633bdd833399e044f80f6105d89da7d60507a97298fcc74f1a9badb73",
"0x38ecbfe9dc450518f854c903c6fa76fd4402a4f34d83f991019fa4dac8529d73",
"0xb60966b1d5ad67d8a8345b462bc6ed8086aed3079c2d2a1db8d8be50cffe95b8"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 3000000,
            gasPrice: 470000000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};



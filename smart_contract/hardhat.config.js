// https://eth-ropsten.alchemyapi.io/v2/wl8X57EyqyZSzIQtyDffAZ1C_pYDbXse

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/wl8X57EyqyZSzIQtyDffAZ1C_pYDbXse',
      accounts: [ '2846364b8cc82ab89ec4618fe43498036c848eb498fa71f3d970161b8a6357f3' ]
    }
  }
}

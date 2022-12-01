require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */

const { ALCHEMY_URL, PRIVATE_KEY } = process.env;
module.exports = {
    solidity: "0.8.17",
    networks: {
        goerli: {
            url: ALCHEMY_URL,
            accounts: [PRIVATE_KEY],
        },
    },
};

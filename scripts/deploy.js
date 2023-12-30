const fs = require('fs');
const { ethers, artifacts } = require('hardhat');

async function main() {
    const [deployer, user1] = await ethers.getSigners();
    console.log("Deploying contracts with the account:", deployer.address);
    console.log("Account balance:", (await deployer.getBalance()).toString());
    // get contract factory
    const digiQuipFactory = await ethers.getContractFactory("DigiQuip");
    // deploy contract
    const digiQuip = await digiQuipFactory.deploy();
    // save contract address file
    const contractsDir = __dirname + "/../src/contractsData";
    if (!fs.existsSync(contractsDir)) {
        fs.mkdirSync(contractsDir);
    }

    fs.writeFileSync(
        contractsDir + `/digiquip-address.json`,
        JSON.stringify({ address: digiQuip.address }, undefined, 2)
    );

    const contractArtifact = artifacts.readArtifactSync("DigiQuip");

    fs.writeFileSync(
        contractsDir + `/digiQuip.json`,
        JSON.stringify(contractArtifact, null, 2)
    );
    console.log("DigiQuip deployed to:", digiQuip.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
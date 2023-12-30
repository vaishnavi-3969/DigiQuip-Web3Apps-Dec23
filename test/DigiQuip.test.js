const { expect } = require('chai')
const { ethers } = require('hardhat')

describe("DigiQuip", function () {
    let digiquip
    let deployer, signer1, signer2, signers
    let URI = "DemoURI"
    let postHash = "DemoHash"
    beforeEach(async () => {
        [deployer, signer1, signer2, ...signers] = await ethers.getSigners()
        const DigiQuip = await ethers.getContractFactory("DigiQuip")
        digiquip = await DigiQuip.deploy()
        //signer1 mints an nft
        await digiquip.connect(signer1).mint(URI)
    })
    describe("Deployment", async () => {
        it("Should set the right owner", async function () {
            it("Should track name and symbol", async function () {
                const nftName = "DigiQuip"
                const nftSymbol = "DAPP"
                expect(await digiquip.name()).to.equal(nftName)
                expect(await digiquip.symbol()).to.equal(nftSymbol)
            });
        })
    });













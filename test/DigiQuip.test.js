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
        it("Should track name and symbol", async function () {
            const nftName = "DigiQuip"
            const nftSymbol = "DAPP"
            expect(await digiquip.name()).to.equal(nftName)
            expect(await digiquip.symbol()).to.equal(nftSymbol)
        });
    })
    describe("Minting NFTs", async () => {
        it("Should track each minted NFT", async function () {
            expect(await digiquip.tokenCount()).to.equal(1);
            expect(await digiquip.balanceOf(signer1.address)).to.equal(1);
            expect(await digiquip.tokenURI(1)).to.equal(URI);
            //signer2 mints an nft
            await digiquip.connect(signer2).mint(URI)
            expect(await digiquip.tokenCount()).to.equal(2);
            expect(await digiquip.balanceOf(signer2.address)).to.equal(1);
            expect(await digiquip.tokenURI(2)).to.equal(URI);
        });
    })
    describe('Setting profiles', async () => {
        it("Should allow users to select which NFT they own to represent their profile", async function () {
            // user1 mints another nft
            await digiquip.connect(signer1).mint(URI)
            // By default the users profile is set to their last minted nft.
            expect(await digiquip.profiles(signer1.address)).to.equal(2);
            // user 1 sets profile to first minted nft
            await digiquip.connect(signer1).setProfile(1)
            expect(await digiquip.profiles(signer1.address)).to.equal(1);
            // FAIL CASE //
            // user 2 tries to set their profile to nft number 2 owned by user 1
            await expect(
                digiquip.connect(signer2).setProfile(2)
            ).to.be.revertedWith("Must own the nft you want to select as your profile");
        });
    })
    describe("Tipping posts", async () => {
        it("Should allow users to tip posts and track each posts tip amount", async function () {
            //signer1 uploads a post
            await digiquip.connect(signer1).uploadPost(postHash)
            //track signer1 balance before their post gets tipped
            const initAuthorBalance = await ethers.provider.getBalance(signer1.address)
            //set tip amt to 1eth
            const tipAmt = ethers.utils.parseEther("1")
            //signer2 tips signer1 post
            await expect(digiquip.connect(signer2).tipPostOwner(1, { value: tipAmt }))
                .to.emit(digiquip, "PostTipped").withArgs(
                    1,
                    postHash,
                    tipAmt,
                    signer2.address
                )
            //check that the tipamt has been updated to struct
            const post = await digiquip.posts(1)
            expect(post.tipAmount).to.equal(tipAmt)
            //check that the signer1 received funds
            const finalAuthorBalance = await ethers.provider.getBalance(signer1.address)
            expect(finalAuthorBalance).to.equal(initAuthorBalance.add(tipAmt))
            //fail case - signer2 tries to tip a post that doesn't exist
            await expect(
                digiquip.connect(signer2).tipPostOwner(2)
            ).to.be.revertedWith("Post does not exist");
            //fail case - signer1 tries to tip their own post
            await expect(
                digiquip.connect(signer1).tipPostOwner(1)
            ).to.be.revertedWith("Cannot tip your own post");
        });
    })

});







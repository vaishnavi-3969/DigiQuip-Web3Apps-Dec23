//SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "hardhat/console.sol";

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract DigiQuip is ERC721URIStorage {
    uint256 public tokenCount;
    uint256 public postCount;

    mapping(uint256 => Post) public posts;
    //address => nft id
    mapping(address => uint256) public profiles;

    struct Post {
        uint256 id;
        string hash;
        // string content;
        uint256 tipAmount;
        address payable author;
    }

    event PostCreated (
        uint256 id,
        string hash,
        uint256 tipAmount,
        address payable author
    );

    event PostTipped (
        uint256 id,
        string hash,
        uint256 tipAmount,
        address payable author
    );

    constructor() ERC721("DigiQuip", "DAPP") {}

    function mint(string memory _tokenURI) external returns (uint256){
        tokenCount++;
        _safeMint(msg.sender, tokenCount);
        _setTokenURI(tokenCount, _tokenURI);
        setProfile(tokenCount);
        return (tokenCount);
    }
    function setProfile(uint256 _id) public {
        require(
            ownerOf(_id) == msg.sender,
            "Must own the nft you want to select as your profile"
        );
        profiles[msg.sender] = _id;
    }
}









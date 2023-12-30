//SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "hardhat/console.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract DigiQuip is ERC721URIStorage {
    constructor() ERC721("DigiQuip", "DAPP") {}
}
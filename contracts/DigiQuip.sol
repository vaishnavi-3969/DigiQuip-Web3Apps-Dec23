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

    function uploadPost(string memory _postHash) external {
        require(
            balanceOf(msg.sender) > 0,
            "Must own at least one NFT to upload a post"
        );
        //make sure the post hash exists
        require(bytes(_postHash).length > 0,"Cannot pass an empty hash");
        //increment post count
        postCount++;
        //add post to contract
        posts[postCount] = Post(postCount, _postHash, 0, payable(msg.sender));
        //trigger event
        emit PostCreated(postCount, _postHash, 0, payable(msg.sender));
    }

    function tipPostOwner(uint256 _id) external payable{
        require(_id > 0 && _id <= postCount, "Invalid post id");
        //fetch the post
        Post memory _post = posts[_id];
        require(_post.author != msg.sender , "Cannot tip your own post");
        //pay the author
        _post.author.transfer(msg.value);
        //increment the tip amount
        _post.tipAmount += msg.value;
        //update the image
        posts[_id] = _post;
        //trigger an event
        emit PostTipped(postCount, _post.hash, _post.tipAmount, _post.author);
    }
    function getAllPosts() external view returns (Post[] memory _posts){
        _posts = new Post[](postCount);
        for(uint256 i=0; i< _posts.length; i++){
            _posts[i] = posts[i+1];
        }
    }

    //fetchs all users nfts
    function getAllNFTs() external view returns (uint256[] memory _ids) {
       _ids = new uint256[](balanceOf(msg.sender));
       uint256 currentIndex;
       uint256 _tokenCount = tokenCount;
         for(uint256 i=1; i < _tokenCount; i++){
              if(ownerOf(i) == msg.sender){
                _ids[currentIndex] = i+1;
                currentIndex++;
              }
         }
    }
}










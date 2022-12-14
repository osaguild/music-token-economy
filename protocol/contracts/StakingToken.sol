// SPDX-License-Identifier: MIT
pragma solidity =0.8.9;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "./interfaces/IStakingToken.sol";

contract StakingToken is ERC721URIStorage, Ownable, IStakingToken {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    /**
     * @dev set the name and symbol of the staking token and set owner address
     */
    constructor(address owner) ERC721("StakingToken", "STAKING") {
        _transferOwnership(owner);
    }

    /**
     * @inheritdoc IStakingToken
     */
    function mint(address to, string memory tokenURI) external onlyOwner returns (uint256) {
        _tokenIds.increment();
        _mint(to, _tokenIds.current());
        _setTokenURI(_tokenIds.current(), tokenURI);
        return _tokenIds.current();
    }

    /**
     * @inheritdoc IStakingToken
     */
    function burn(uint256 tokenId) external onlyOwner {
        _burn(tokenId);
    }

    /**
     * @inheritdoc IStakingToken
     */
    function totalSupply() external view override returns (uint256) {
        return _tokenIds.current();
    }
}

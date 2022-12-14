// SPDX-License-Identifier: MIT
pragma solidity =0.8.9;

interface IFanficToken {
    /**
     * @dev mint the fanfic token with royalty of origin token owners.
     */
    function mint(string memory tokenURI, uint256[] memory originIds) external returns (uint256);

    /**
     * @dev return total count of fanfic token. it is based on counter.
     */
    function totalSupply() external returns (uint256);

    /**
     * @dev return originIds of fanfic token.
     */
    function origins(uint256 tokenId) external returns (uint256[] memory);

    /**
     * @dev set origin token address.
     */
    function setOriginToken(address originToken) external;

    /**
     * @dev set protocol address.
     */
    function setProtocol(address protocol) external;
}

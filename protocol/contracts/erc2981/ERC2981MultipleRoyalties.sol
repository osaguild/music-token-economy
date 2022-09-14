// SPDX-License-Identifier: MIT
// OpenZeppelin Contracts (last updated v4.7.0) (token/common/ERC2981.sol)
pragma solidity =0.8.9;

import "@openzeppelin/contracts/utils/introspection/ERC165.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "./IERC2981MultipleRoyalties.sol";

/**
 * @dev Implementation of the NFT Royalty Standard, a standardized way to retrieve royalty payment information. enable to set multiple royalties
 */
contract ERC2981MultipleRoyalties is IERC2981MultipleRoyalties, ERC165, Ownable {
    struct RoyaltyInfo {
        address receiver;
        uint16 royaltyFraction;
    }

    RoyaltyInfo private _defaultRoyaltyInfo;
    mapping(uint256 => RoyaltyInfo[]) private _tokenRoyaltyInfo;

    /**
     * @dev Set default royalty info
     */
    constructor(
        address owner,
        address defaultReceiver,
        uint16 defaultFeeNumerator
    ) {
        _setDefaultRoyalty(defaultReceiver, defaultFeeNumerator);
        _transferOwnership(owner);
    }

    /**
     * @dev See {IERC165-supportsInterface}.
     */
    function supportsInterface(bytes4 interfaceId) public pure override(IERC165, ERC165) returns (bool) {
        return interfaceId == type(IERC2981MultipleRoyalties).interfaceId;
    }

    /**
     * @inheritdoc IERC2981MultipleRoyalties
     */
    function royaltyInfo(uint256 tokenId, uint256 salePrice)
        external
        view
        override
        returns (address[] memory, uint256[] memory)
    {
        address[] memory receivers;
        uint256[] memory royaltyAmounts;

        // set royalty info
        if (_defaultRoyaltyInfo.receiver == address(0) && _tokenRoyaltyInfo[tokenId].length == 0) {
            receivers = new address[](0);
            royaltyAmounts = new uint256[](0);
        } else if (_defaultRoyaltyInfo.receiver == address(0) && _tokenRoyaltyInfo[tokenId].length != 0) {
            receivers = new address[](_tokenRoyaltyInfo[tokenId].length);
            royaltyAmounts = new uint256[](_tokenRoyaltyInfo[tokenId].length);
            for (uint256 i = 0; i < _tokenRoyaltyInfo[tokenId].length; i++) {
                receivers[i] = _tokenRoyaltyInfo[tokenId][i].receiver;
                royaltyAmounts[i] = (salePrice * _tokenRoyaltyInfo[tokenId][i].royaltyFraction) / _feeDenominator();
            }
        } else if (_defaultRoyaltyInfo.receiver != address(0) && _tokenRoyaltyInfo[tokenId].length == 0) {
            receivers = new address[](1);
            royaltyAmounts = new uint256[](1);
            receivers[0] = _defaultRoyaltyInfo.receiver;
            royaltyAmounts[0] = (salePrice * _defaultRoyaltyInfo.royaltyFraction) / _feeDenominator();
        } else {
            receivers = new address[](1 + _tokenRoyaltyInfo[tokenId].length);
            royaltyAmounts = new uint256[](1 + _tokenRoyaltyInfo[tokenId].length);
            receivers[0] = _defaultRoyaltyInfo.receiver;
            royaltyAmounts[0] = (salePrice * _defaultRoyaltyInfo.royaltyFraction) / _feeDenominator();
            for (uint256 i = 0; i < _tokenRoyaltyInfo[tokenId].length; i++) {
                receivers[i + 1] = _tokenRoyaltyInfo[tokenId][i].receiver;
                royaltyAmounts[i + 1] = (salePrice * _tokenRoyaltyInfo[tokenId][i].royaltyFraction) / _feeDenominator();
            }
        }

        return (receivers, royaltyAmounts);
    }

    /**
     * @inheritdoc IERC2981MultipleRoyalties
     */
    function addRoyaltyInfo(
        uint256 tokenId,
        address receiver,
        uint16 feeNumerator
    ) external override onlyOwner {
        // count total fee
        uint16 totalFeeNumerator = feeNumerator;
        if (_defaultRoyaltyInfo.receiver != address(0)) {
            totalFeeNumerator += _defaultRoyaltyInfo.royaltyFraction;
        }
        for (uint256 i = 0; i < _tokenRoyaltyInfo[tokenId].length; i++) {
            totalFeeNumerator += _tokenRoyaltyInfo[tokenId][i].royaltyFraction;
        }
        require(feeNumerator <= _feeDenominator(), "ERC2981: royalty fee will exceed salePrice");
        require(feeNumerator <= totalFeeNumerator, "ERC2981: total royalty fee is grate than 100%");
        require(receiver != address(0), "ERC2981: Invalid parameters");

        _tokenRoyaltyInfo[tokenId].push(RoyaltyInfo(receiver, feeNumerator));

        emit AddRoyaltyInfo(tokenId, receiver, feeNumerator);
    }

    /**
     * @inheritdoc IERC2981MultipleRoyalties
     */
    function deleteDefaultRoyalty() external onlyOwner {
        delete _defaultRoyaltyInfo;
        emit DeleteDefaultRoyalty();
    }

    /**
     * @inheritdoc IERC2981MultipleRoyalties
     */
    function resetTokenRoyalty(uint256 tokenId) external onlyOwner {
        delete _tokenRoyaltyInfo[tokenId];
        emit ResetTokenRoyalty(tokenId);
    }

    /**
     * @dev The denominator with which to interpret the fee set in {_setTokenRoyalty} and {_setDefaultRoyalty} as a
     * fraction of the sale price. Defaults to 10000 so fees are expressed in basis points, but may be customized by an
     * override.
     */
    function _feeDenominator() internal pure returns (uint16) {
        return 10000;
    }

    /**
     * @dev Sets the royalty information that all ids in this contract will default to.
     *
     * Requirements:
     *
     * - `receiver` cannot be the zero address.
     * - `feeNumerator` cannot be greater than the fee denominator.
     */
    function _setDefaultRoyalty(address receiver, uint16 feeNumerator) internal {
        require(feeNumerator <= _feeDenominator(), "ERC2981: royalty fee will exceed salePrice");
        require(receiver != address(0), "ERC2981: invalid receiver");

        _defaultRoyaltyInfo = RoyaltyInfo(receiver, feeNumerator);
    }
}
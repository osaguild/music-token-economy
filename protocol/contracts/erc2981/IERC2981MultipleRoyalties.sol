// SPDX-License-Identifier: MIT
// extended OpenZeppelin Contracts (last updated v4.6.0) (interfaces/IERC2981.sol)
pragma solidity =0.8.9;

import "@openzeppelin/contracts/utils/introspection/IERC165.sol";

/**
 * @dev Interface for the NFT Royalty Standard. enable to set multiple royalties
 */
interface IERC2981MultipleRoyalties is IERC165 {
    /**
     * @dev royalty info
     */
    struct RoyaltyInfo {
        address receiver;
        uint16 royaltyFraction;
    }

    /**
     * @dev Returns how much royalty is owed and to whom, based on a sale price that may be denominated in any unit of
     */
    function royaltyInfo(uint256 tokenId, uint256 salePrice)
        external
        view
        returns (address[] memory receivers, uint256[] memory royaltyAmounts);

    /**
     * @dev Emit event of addRoyaltyInfo
     */
    event AddRoyaltyInfo(uint256 tokenId, address receiver, uint16 feeNumerator);

    /**
     * @dev Emit event of resetTokenRoyalty
     */
    event ResetTokenRoyalty(uint256 tokenId);
}

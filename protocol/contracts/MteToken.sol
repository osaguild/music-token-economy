// SPDX-License-Identifier: MIT
pragma solidity =0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "./interface/IMteToken.sol";

contract MteToken is ERC20, Ownable, IMteToken {
    /**
     * @dev set the name and symbol of the MTE token and set owner address
     */
    constructor(address protocol) ERC20("Music Token Economy", "MTE") {
        _transferOwnership(protocol);
    }

    /**
     * @dev make the MTE token and send to the address
     */
    function mint(address to, uint256 amount) external onlyOwner {
        _mint(to, amount);
    }
}

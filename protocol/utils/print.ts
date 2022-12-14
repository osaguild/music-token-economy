import { BigNumber } from 'ethers'
import { Address, Balance } from './type'
import { ethers } from 'hardhat'

const printRoyalty = (
  addresses: Address[],
  receivers: string[],
  amounts: BigNumber[],
  tokenId: number,
  price: BigNumber
) => {
  let message = `tokenId: ${tokenId} price: ${ethers.utils.formatEther(price)} MTE`
  for (let i = 0; i < addresses.length; i++) {
    if (receivers.length == 0) {
      message += ` / ${addresses[i]?.name}: 0 MTE`
    } else {
      for (let j = 0; j < receivers.length; j++) {
        if (addresses[i]?.address === receivers[j]) {
          message += ` / ${addresses[i]?.name}: ${ethers.utils.formatEther(amounts[j] as BigNumber)} MTE`
          break
        } else if (j === receivers.length - 1) {
          message += ` / ${addresses[i]?.name}: 0 MTE`
        }
      }
    }
  }
  console.log(message)
}

const printBalance = (balance: Balance) => {
  console.log(
    'alice:',
    `${ethers.utils.formatEther(balance.alice)} ETH`,
    'bob:',
    `${ethers.utils.formatEther(balance.bob)} ETH`,
    'protocol:',
    `${ethers.utils.formatEther(balance.protocol)} ETH`,
    'stakingOfAlice:',
    `${ethers.utils.formatEther(balance.stakingOfAlice)} ETH`,
    'stakingOfBob:',
    `${ethers.utils.formatEther(balance.stakingOfBob)} ETH`
  )
}

export { printBalance, printRoyalty }

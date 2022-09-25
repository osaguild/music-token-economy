import { useState, useEffect } from 'react'
import { useContract } from '../Contract'
import { ethers } from 'ethers'
import { address } from '../../config'

const useKpi = () => {
  const [stakerCount, setStakerCount] = useState<number>()
  const [stakingAmount, setStakingAmount] = useState<number>()
  const [originCount, setOriginCount] = useState<number>()
  const [fanficCount, setFanficCount] = useState<number>()
  const { fanficToken, originToken, mteToken, stakingToken } = useContract()

  useEffect(() => {
    if (fanficToken && originToken && mteToken && stakingToken) {
      Promise.all([
        stakingToken.totalSupply(),
        mteToken.balanceOf(address().PROTOCOL_CONTRACT),
        originToken.totalSupply(),
        fanficToken.totalSupply(),
      ]).then(([staker, staking, origin, fanfic]) => {
        setStakerCount(staker.toNumber())
        setStakingAmount(Number(ethers.utils.formatEther(staking)))
        setOriginCount(origin.toNumber())
        setFanficCount(fanfic.toNumber())
      })
    }
  }, [fanficToken, originToken, mteToken, stakingToken])

  return { stakerCount, stakingAmount, fanficCount, originCount }
}

export { useKpi }
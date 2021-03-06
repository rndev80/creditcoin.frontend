import request from '@/utils/request'

const fetchBlockchainInfo = () => {
  return request({
    url: `/api/blockchain`,
    method: 'get'
  })
}

const fetchBlocks = (limit = 3) => {
  return request({
    url: `/api/blocks?limit=${limit}`,
    method: 'get'
  })
}

const fetchBlockDetail = (blockId) => {
  return request({
    url: `/api/blocks/${blockId}`,
    method: 'get'
  })
}

const fetchBlockForTx = (transactionId) => {
  return request({
    url: `/api/blocks/forTxid/${transactionId}`,
    method: 'get'
  })
}

export default {
  fetchBlockchainInfo,
  fetchBlocks,
  fetchBlockDetail,
  fetchBlockForTx
}

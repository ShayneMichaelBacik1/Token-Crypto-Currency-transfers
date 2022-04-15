// Copyright (c) 2018-2019 Coinbase, Inc. <https://coinbase.com/>
// Licensed under the Apache License, version 2.0

export enum JSONRPCMethod {
  // synchronous or asynchronous
  eth_accounts = "eth_accounts",
  eth_coinbase = "eth_coinbase",
  net_version = "net_version",
  eth_uninstallFilter = "eth_uninstallFilter", // synchronous

  // asynchronous only
  eth_requestAccounts = "eth_requestAccounts",
  eth_sign = "eth_sign",
  eth_ecRecover = "eth_ecRecover",
  personal_sign = "personal_sign",
  personal_ecRecover = "personal_ecRecover",
  eth_signTransaction = "eth_signTransaction",
  eth_sendRawTransaction = "eth_sendRawTransaction",
  eth_sendTransaction = "eth_sendTransaction",
  // TODO: eth_signTypedData = 'eth_signTypedData',

  // asynchronous filter methods
  eth_newFilter = "eth_newFilter",
  eth_newBlockFilter = "eth_newBlockFilter",
  eth_newPendingTransactionFilter = "eth_newPendingTransactionFilter",
  eth_getFilterChanges = "eth_getFilterChanges",
  eth_getFilterLogs = "eth_getFilterLogs"
}

export interface JSONRPCRequest<T = any[]> {
  jsonrpc: "2.0"
  id: number
  method: string
  params: T
}

export interface JSONRPCResponse<T = any, U = any> {
  jsonrpc: "2.0"
  id: number
  result?: T
  error?: {
    code: number
    message: string
    data?: U
  } | null
}

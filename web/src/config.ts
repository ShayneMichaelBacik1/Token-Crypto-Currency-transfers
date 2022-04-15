// Copyright (c) 2018-2019 Coinbase, Inc. <https://coinbase.com/>
// Licensed under the Apache License, version 2.0

export const NODE_ENV = process.env.NODE_ENV || "development"
export const WEB_URL = getWebUrl()
export const RPC_URL = getRpcUrl()

function getWebUrl(): string {
  if (NODE_ENV === "development") {
    return process.env.REACT_APP_WEB_URL || "http://localhost:3001"
  }
  const { protocol, host } = document.location
  return `${protocol}//${host}`
}

function getRpcUrl(): string {
  if (NODE_ENV === "development") {
    return process.env.REACT_APP_RPC_URL || "ws://localhost:8080/rpc"
  }
  const { protocol, host } = document.location
  return `${protocol.replace("http", "ws")}//${host}/rpc`
}

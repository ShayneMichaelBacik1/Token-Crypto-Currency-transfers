// Copyright (c) 2018-2019 Coinbase, Inc. <https://coinbase.com/>
// Licensed under the Apache License, version 2.0

import QRCode from "qrcode.react"
import querystring from "querystring"
import React from "react"
import { style } from "typestyle"

const styles = {
  main: style({
    borderRadius: 8,
    boxShadow: "0 5px 10px rgba(0, 0, 0, .2)",
    display: "inline-block",
    padding: 16
  }),
  qrUrl: style({
    display: "block",
    width: "100%"
  })
}

export interface Props {
  webUrl: string
  serverUrl: string
  sessionId: string
  sessionSecret: string
}

export class SessionQRCode extends React.PureComponent<Props> {
  public render() {
    const { webUrl, serverUrl, sessionId, sessionSecret } = this.props
    const queryParams = {
      id: sessionId,
      secret: sessionSecret,
      server: serverUrl
    }
    const url = `${webUrl}/#/link?${querystring.stringify(queryParams)}`

    return (
      <div className={styles.main}>
        <QRCode value={url} renderAs="svg" size={196} />
        <input className={styles.qrUrl} type="text" value={url} readOnly />
      </div>
    )
  }
}

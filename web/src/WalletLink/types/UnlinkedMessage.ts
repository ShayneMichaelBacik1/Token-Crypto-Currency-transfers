// Copyright (c) 2018-2019 Coinbase, Inc. <https://coinbase.com/>
// Licensed under the Apache License, version 2.0

import { IPCMessage, IPCMessageType } from "./IPCMessage"

export interface UnlinkedMessage extends IPCMessage<IPCMessageType.UNLINKED> {}

export function UnlinkedMessage(): UnlinkedMessage {
  return { type: IPCMessageType.UNLINKED }
}

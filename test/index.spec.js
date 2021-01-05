/* eslint-env mocha */
/* eslint-disable no-unused-expressions */

import { expect } from 'chai'
import UlaServerConnector from '../src/index'

describe('The ULA Server Connector', () => {
  it('should work in integration', async () => {
    const conn = new UlaServerConnector()
    conn.configure(process.env.ULA_ENDPOINT, process.env.ULA_BASIC_AUTH)

    const resultLink = await conn.claim('123123123', '', { data: 'important' })

    expect(resultLink).to.be.a('string')
    expect(resultLink.startsWith('link:discipl:ula-server')).to.equal(true)

    const claim = await conn.get(resultLink)

    expect(claim.inviteURL).to.be.a('string')
    expect(claim.operationType).to.be.a('string')
    expect(claim.documentName).to.be.a('string')
  })
}
)

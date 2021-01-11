/* eslint-env mocha */
/* eslint-disable no-unused-expressions */

import { expect } from 'chai'
import sinon from 'sinon'

import UlaServerConnector from '../src/index'

describe('The ULA Server Connector', () => {
  it('should work in integration', async () => {
    const conn = new UlaServerConnector()
    conn.configure('https://localhost:8080', '')
    const resultLink = await conn.claim('123123123', '', { data: 'important' })
    expect(resultLink).to.be.a('string')
    expect(resultLink.startsWith('link:discipl:ula-server')).to.equal(true)

    const claim = conn.get(resultLink)

    expect(claim.inviteURL).to.be.a('string')
    expect(claim.operationType).to.be.a('string')
    expect(claim.documentName).to.be.a('string')
  })
}
)

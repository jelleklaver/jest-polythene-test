/**
 * @jest-environment jsdom
 */
m = require('mithril')
mq = require('mithril-query')
TextField = require('polythene-mithril').TextField

afterAll(() => {
    global.window.close();
})

test('Test if textfield will render', () => {
    mq(TextField)
})

test('reference to verify testing setup', () => {
    const out = mq({view: () => m('.thisshouldpass')})
    out.should.have('.thisshouldpass')
})

import { State } from 'jumpsuit'

const state = State('modal', {
  initial: {
    open: false
  },
  toggle (state, payload) {
    return { open: !state.open }
  }
})

export default state

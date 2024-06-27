import store from './store'

export type stateType = ReturnType<typeof store.getState>
export type dispatchType = typeof store.dispatch

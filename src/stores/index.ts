import type { TypedUseSelectorHook } from 'react-redux'

import { useDispatch, useSelector } from 'react-redux'

import { dispatchType, stateType } from '@/stores/type'

export const useStoreSelector: TypedUseSelectorHook<stateType> = useSelector
export const useStoreDispatch: () => dispatchType = useDispatch

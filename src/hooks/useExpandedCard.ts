import {
  atom,
  useRecoilState,
  SetterOrUpdater
} from 'recoil'

type State = string|null

const expandedCardState = atom<State>({
  key: 'expandedCardState',
  default: null,
})

const useExpandedCard = (): [State, SetterOrUpdater<State>] => {
  return useRecoilState(expandedCardState)
}

export default useExpandedCard

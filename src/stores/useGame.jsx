import { create } from 'zustand'
import { subscribeWithSelector } from 'zustand/middleware'

export default create(
  subscribeWithSelector((set) => {
    return {
      blocksCount: 10,
      blocksSeed: 0,

      /**
       * Time
       */
      startTime: 0,
      endTime: 0,

      /**
       * Phases
       */
      phase: 'ready',

      explore: () => {
        set((state) => {
          // console.log('exploring phase')
          if (state.phase === 'exploring') return { phase: 'ready' }

          return {}
        })
      },

      start: () => {
        set((state) => {
          //console.log('playing phase')
          if (state.phase === 'ready')
            return { phase: 'playing', startTime: Date.now() }

          return {}
        })
      },
      restart: () => {
        set((state) => {
          //console.log('restart phase')
          if (state.phase === 'playing' || state.phase === 'ended')
            return { phase: 'ready', blocksSeed: Math.random() }

          return {}
        })
      },
      end: () => {
        set((state) => {
          // console.log('end phase')
          if (state.phase === 'playing')
            return { phase: 'ended', endTime: Date.now() }

          return {}
        })
      },
    }
  })
)

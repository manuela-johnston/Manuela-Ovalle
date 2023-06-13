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
          if (state.phase === 'ready') return { phase: 'ready' }

          return {}
        })
      },

      start: () => {
        set((state) => {
          //console.log('playing phase')
          if (state.phase === 'playing')
            return { phase: 'playing', startTime: Date.now() }
          return {}
        })
      },
      restart: () => {
        set((state) => {
          if (state.phase === 'playing' || state.phase === 'ended')
            return { phase: 'ready', blocksSeed: Math.random() }
          //console.log('restart state')
          return {}
        })
      },
      end: () => {
        set((state) => {
          //console.log('end phase')
          if (state.phase === 'playing')
            return { phase: 'ended', endTime: Date.now() }

          return {}
        })
      },
    }
  })
)

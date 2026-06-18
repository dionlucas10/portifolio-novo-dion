import { useEffect, useState } from 'react'
import styles from './Loader.module.css'

/* Mario sprite sheet: /assets/mario-sprite.png (405×188px)
   Row 0 (y=0, h=52): Big Mario sprites
   Walk frames (x): 29, 60, 89  |  Jump frame: 120
   Display at 3x scale → 156px tall
*/
const SCALE = 3
const WALK_FRAMES = [-29 * SCALE, -60 * SCALE, -89 * SCALE]  // [-87, -180, -267]
const JUMP_FRAME  = -120 * SCALE                               // -360

function playCoin() {
  try {
    const Ctx = window.AudioContext || window.webkitAudioContext
    const ctx = new Ctx()
    const osc1 = ctx.createOscillator()
    const osc2 = ctx.createOscillator()
    const gain = ctx.createGain()
    osc1.connect(gain); osc2.connect(gain); gain.connect(ctx.destination)
    osc1.type = 'square'; osc2.type = 'square'
    osc1.frequency.setValueAtTime(988,  ctx.currentTime)
    osc1.frequency.setValueAtTime(1319, ctx.currentTime + 0.08)
    osc2.frequency.setValueAtTime(1482, ctx.currentTime)
    osc2.frequency.setValueAtTime(1979, ctx.currentTime + 0.08)
    gain.gain.setValueAtTime(0.07, ctx.currentTime)
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.45)
    osc1.start(ctx.currentTime); osc1.stop(ctx.currentTime + 0.45)
    osc2.start(ctx.currentTime); osc2.stop(ctx.currentTime + 0.45)
  } catch (_) {}
}

function MarioSprite({ frame, phase }) {
  const bgX = phase === 'jumping' ? JUMP_FRAME : WALK_FRAMES[frame % 3]

  return (
    <div
      className={styles.marioSprite}
      style={{
        backgroundPosition: `${bgX}px 0px`,
      }}
    />
  )
}

function QuestionBlock({ hit }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"
      width="80" height="80" style={{ imageRendering: 'pixelated', display: 'block' }}>
      <rect x="0" y="0" width="16" height="16" fill={hit ? '#C47800' : '#E8A420'} />
      <rect x="1" y="1" width="14" height="1" fill={hit ? '#E8A420' : '#F7D51D'} />
      <rect x="1" y="1" width="1" height="14" fill={hit ? '#E8A420' : '#F7D51D'} />
      <rect x="15" y="1" width="1" height="15" fill="#431200" />
      <rect x="1"  y="15" width="14" height="1" fill="#431200" />
      <rect x="0"  y="15" width="1"  height="1" fill={hit ? '#E8A420' : '#F7D51D'} />
      {!hit ? (
        <>
          {/* D */}
          <rect x="3" y="3" width="2" height="10" fill="#FFF" />
          <rect x="5" y="3" width="2" height="2"  fill="#FFF" />
          <rect x="5" y="11" width="2" height="2" fill="#FFF" />
          <rect x="7" y="5" width="1" height="6"  fill="#FFF" />
          {/* L */}
          <rect x="9"  y="3" width="2" height="10" fill="#FFF" />
          <rect x="11" y="11" width="3" height="2" fill="#FFF" />
        </>
      ) : (
        <>
          <rect x="5" y="6" width="6" height="2" fill="#E8A420" />
          <rect x="7" y="8" width="2" height="3" fill="#E8A420" />
        </>
      )}
    </svg>
  )
}

function Coin() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 8"
      width="36" height="36" style={{ imageRendering: 'pixelated', display: 'block' }}>
      <rect x="2" y="0" width="4" height="1" fill="#F7D51D" />
      <rect x="1" y="1" width="6" height="6" fill="#F7D51D" />
      <rect x="2" y="7" width="4" height="1" fill="#F7D51D" />
      <rect x="3" y="2" width="2" height="4" fill="#C47800" />
    </svg>
  )
}

export default function Loader({ onFinish }) {
  const [phase, setPhase] = useState('init')
  const [frame, setFrame] = useState(0)
  const [blockHit, setBlockHit] = useState(false)
  const [showCoin, setShowCoin] = useState(false)
  const [marioLeft, setMarioLeft] = useState(null)

  useEffect(() => {
    if (phase !== 'walking') return
    const iv = setInterval(() => setFrame(f => (f + 1) % 3), 140)
    return () => clearInterval(iv)
  }, [phase])

  useEffect(() => {
    const t = [
      setTimeout(() => setPhase('walking'), 400),
      setTimeout(() => { setPhase('jumping'); setMarioLeft('calc(50% - 30px)') }, 2100),
      setTimeout(() => { setBlockHit(true); setShowCoin(true); playCoin() }, 2300),
      setTimeout(() => setPhase('hit'), 2600),
      setTimeout(() => setShowCoin(false), 3000),
      setTimeout(() => setPhase('exiting'), 3300),
      setTimeout(onFinish, 4200),
    ]
    return () => t.forEach(clearTimeout)
  }, [onFinish])

  return (
    <div className={`${styles.loader} ${phase === 'exiting' ? styles.exit : ''}`}>
      <div className={styles.scene}>

        {/* Question Block */}
        <div className={`${styles.blockWrapper} ${blockHit ? styles.blockBounce : ''}`}>
          <QuestionBlock hit={blockHit} />
          {showCoin && <div className={styles.coin}><Coin /></div>}
        </div>

        {/* Ground */}
        <div className={styles.ground} />

        {/* Mario — outer div handles X, inner handles Y */}
        <div
          className={`${styles.marioX} ${phase === 'walking' ? styles.walking : ''}`}
          style={marioLeft ? { left: marioLeft } : undefined}
        >
          <div className={`${styles.marioY} ${phase === 'jumping' ? styles.jumping : ''}`}>
            <MarioSprite frame={frame} phase={phase} />
          </div>
        </div>

      </div>
    </div>
  )
}

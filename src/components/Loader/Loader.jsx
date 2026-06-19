import { useEffect, useRef, useState } from 'react'
import styles from './Loader.module.css'

const SCALE = 3
const WALK_FRAMES = [-29 * SCALE, -60 * SCALE, -89 * SCALE]
const JUMP_FRAME  = -120 * SCALE

function playCoin(ctx) {
  try {
    if (!ctx || ctx.state === 'closed') return
    const osc1 = ctx.createOscillator()
    const osc2 = ctx.createOscillator()
    const gain = ctx.createGain()
    osc1.connect(gain); osc2.connect(gain); gain.connect(ctx.destination)
    osc1.type = 'square'; osc2.type = 'square'
    const t = ctx.currentTime
    osc1.frequency.setValueAtTime(988,  t)
    osc1.frequency.setValueAtTime(1319, t + 0.08)
    osc2.frequency.setValueAtTime(1482, t)
    osc2.frequency.setValueAtTime(1979, t + 0.08)
    gain.gain.setValueAtTime(0.07, t)
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.45)
    osc1.start(t); osc1.stop(t + 0.45)
    osc2.start(t); osc2.stop(t + 0.45)
  } catch (_) {}
}

function MarioSprite({ frame, phase }) {
  const bgX = phase === 'jumping' ? JUMP_FRAME : WALK_FRAMES[frame % 3]
  return (
    <div
      className={styles.marioSprite}
      style={{ backgroundPosition: `${bgX}px 0px` }}
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
          <rect x="3" y="3" width="2" height="10" fill="#FFF" />
          <rect x="5" y="3" width="2" height="2"  fill="#FFF" />
          <rect x="5" y="11" width="2" height="2" fill="#FFF" />
          <rect x="7" y="5" width="1" height="6"  fill="#FFF" />
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

function BgCloud({ width = 96, height = 48, style }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 24"
      width={width} height={height}
      style={{ imageRendering: 'pixelated', display: 'block', position: 'absolute', ...style }}>
      <rect x="4"  y="16" width="40" height="8"  fill="white" />
      <rect x="8"  y="12" width="32" height="4"  fill="white" />
      <rect x="10" y="8"  width="10" height="4"  fill="white" />
      <rect x="28" y="4"  width="12" height="8"  fill="white" />
    </svg>
  )
}

function BgHill({ width = 192, height = 80, style }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 28"
      width={width} height={height}
      style={{ imageRendering: 'pixelated', display: 'block', position: 'absolute', ...style }}>
      <rect x="4"  y="10" width="56" height="18" fill="#00A800" />
      <rect x="12" y="4"  width="40" height="6"  fill="#00A800" />
      <rect x="24" y="0"  width="16" height="4"  fill="#00A800" />
      <rect x="14" y="12" width="5"  height="3"  fill="#00CC00" />
      <rect x="32" y="8"  width="5"  height="3"  fill="#00CC00" />
      <rect x="45" y="12" width="5"  height="3"  fill="#00CC00" />
    </svg>
  )
}

export default function Loader({ onFinish }) {
  const [started, setStarted]   = useState(false)
  const [phase, setPhase]       = useState('idle')
  const [frame, setFrame]       = useState(0)
  const [blockHit, setBlockHit] = useState(false)
  const [showCoin, setShowCoin] = useState(false)
  const [marioLeft, setMarioLeft] = useState(null)
  const audioCtxRef = useRef(null)

  const handleStart = () => {
    if (started) return
    // Desbloqueia áudio direto na interação do usuário
    const Ctx = window.AudioContext || window.webkitAudioContext
    if (Ctx) {
      try {
        audioCtxRef.current = new Ctx()
        audioCtxRef.current.resume()
      } catch (_) {}
    }
    setStarted(true)
  }

  useEffect(() => {
    if (!started) return
    setPhase('walking')
    const t = [
      setTimeout(() => { setPhase('jumping'); setMarioLeft('calc(50% - 30px)') }, 1700),
      setTimeout(() => { setBlockHit(true); setShowCoin(true); playCoin(audioCtxRef.current) }, 1900),
      setTimeout(() => setPhase('hit'), 2200),
      setTimeout(() => setShowCoin(false), 2600),
      setTimeout(() => setPhase('exiting'), 2900),
      setTimeout(onFinish, 3800),
    ]
    return () => t.forEach(clearTimeout)
  }, [started, onFinish])

  useEffect(() => {
    if (phase !== 'walking') return
    const iv = setInterval(() => setFrame(f => (f + 1) % 3), 140)
    return () => clearInterval(iv)
  }, [phase])

  return (
    <div
      className={`${styles.loader} ${phase === 'exiting' ? styles.exit : ''}`}
      style={{ pointerEvents: started ? 'none' : 'all' }}
      onClick={handleStart}
    >
      <BgCloud style={{ left: '6%', top: '10%' }} />
      <BgCloud width={70} height={35} style={{ left: '44%', top: '6%' }} />
      <BgCloud width={80} height={40} style={{ right: '8%', top: '15%' }} />
      <div className={styles.bgGround} />
      <BgHill style={{ left: '1%', bottom: 64 }} />
      <BgHill width={150} height={62} style={{ right: '4%', bottom: 64 }} />
      <BgHill width={120} height={50} style={{ left: '28%', bottom: 64 }} />

      <div className={styles.scene}>

        <div className={`${styles.blockWrapper} ${blockHit ? styles.blockBounce : ''}`}>
          <QuestionBlock hit={blockHit} />
          {showCoin && <div className={styles.coin}><Coin /></div>}
        </div>

        {phase !== 'idle' && (
          <div
            className={`${styles.marioX} ${phase === 'walking' ? styles.walking : ''}`}
            style={marioLeft ? { left: marioLeft } : undefined}
          >
            <div className={`${styles.marioY} ${phase === 'jumping' ? styles.jumping : ''}`}>
              <MarioSprite frame={frame} phase={phase} />
            </div>
          </div>
        )}

      </div>

      {!started && (
        <p className={styles.pressStart}>PRESS START</p>
      )}
    </div>
  )
}

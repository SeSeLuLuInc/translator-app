import ReactDOM from 'react-dom/client'
import '@fontsource/lexend'
import './styles.css'
import { platform } from '@tauri-apps/plugin-os'

function App () {
  const map: Record<string, string> = {
    a: 'selu',
    b: 'seselulu',
    c: 'seseselululu',
    d: 'dedecucu',
    e: 'lalalulu',
    f: 'fafu',
    g: 'googoogaagaa',
    h: 'hahaha',
    i: 'eiei',
    j: 'jaja',
    k: 'ok',
    l: 'lagu',
    m: 'moo',
    n: 'no',
    o: 'oogabooga',
    p: 'pepe',
    q: 'oogalyboogaly',
    r: 'rahroo',
    s: 'solay',
    t: 'tootay',
    u: 'yala',
    v: 'vooloo',
    w: 'waawaa',
    x: 'tumtum',
    y: 'yumyum',
    z: 'zooloola',
    A: 'SELU',
    B: 'SESELULU',
    C: 'SESESELULULU',
    D: 'DEDECUCU',
    E: 'LALALULU',
    F: 'FAFU',
    G: 'GOOGOOGAAGAA',
    H: 'HAHAHA',
    I: 'EIEI',
    J: 'JAJA',
    K: 'OK',
    L: 'LAGU',
    M: 'MOO',
    N: 'NO',
    O: 'OOGABOOGA',
    P: 'PEPE',
    Q: 'OOGALYBOOGALY',
    R: 'RAHROO',
    S: 'SOLAY',
    T: 'TOOTAY',
    U: 'YALA',
    V: 'VOOLOO',
    W: 'WAAWAA',
    X: 'TUMTUM',
    Y: 'YUMYUM',
    Z: 'ZOOLOOLA'
  }

  return (
    <div className='flex flex-col items-center h-full'>
      <button
        onClick={async () => (window.location.pathname = '/')}
        className={`absolute top-0 right-0 ${
          platform() == 'android' || platform() == 'ios' ? 'm-10' : 'm-2'
        } z-50`}
        style={{
          display: ['windows', 'macos', 'linux'].includes(platform())
            ? 'none'
            : 'block'
        }}
      >
        Back
      </button>
      <p
        className={`text-center text-3xl ${
          platform() == 'android' || platform() == 'ios' ? 'mt-20' : 'm-10'
        } mb-6`}
      >
        SeSe LuLu Alphabet
      </p>
      <p>Format is "English: SeSe LuLu"</p>
      <div
        className={`${
          platform() == 'android' || platform() == 'ios' ? 'mb-14' : 'mb-6'
        } mt-2 select-text text-center`}
      >
        {Object.entries(map).map(([key, value]) => (
          <p key={key}>
            {key}: {value}
          </p>
        ))}
      </div>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <App />
)

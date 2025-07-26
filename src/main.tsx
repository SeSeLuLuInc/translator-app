import { useState } from 'react'
import ReactDOM from 'react-dom/client'
import { WebviewWindow } from '@tauri-apps/api/webviewWindow'
import '@fontsource/lexend'
import './styles.css'
import { platform } from '@tauri-apps/plugin-os'

function App () {
  const [englishText, setEnglishText] = useState<string>('')
  const [seSeLuLuText, setSeSeLuLuText] = useState<string>('')
  const [alphabetOpen, setAlphabetOpen] = useState<boolean>(false)

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

  const reverseMap: Record<string, string> = Object.fromEntries(
    Object.entries(map).map(([k, v]) => [v, k])
  )

  function convertTo (input: string) {
    return input
      .split('')
      .map(c => (c === ' ' ? '' : map[c] ?? c))
      .join(' ')
  }

  function convertFrom (input: string) {
    return input
      .split(' ')
      .map(word => (word === '' ? ' ' : reverseMap[word] ?? ''))
      .join('')
  }

  return (
    <div className='flex flex-col items-center h-full'>
      <button
        onClick={async () => {
          if (['windows', 'macos', 'linux'].includes(platform())) {
            const exists = await WebviewWindow.getByLabel('alphabet')
            if (!exists) {
              setAlphabetOpen(true)
              const window = new WebviewWindow('alphabet', {
                title: 'SeSe LuLu Alphabet',
                url: '/alphabet.html',
                width: 800,
                height: 600,
                minWidth: 600,
                minHeight: 400,
                maxWidth: 1280,
                maxHeight: 720,
                maximizable: false
              })
              window.once('tauri://destroyed', function () {
                setAlphabetOpen(false)
              })
            }
          } else {
            window.location.pathname = '/alphabet.html'
          }
        }}
        className={`absolute top-0 right-0 ${
          platform() == 'android' || platform() == 'ios' ? 'm-10' : 'm-2'
        } z-50`}
        disabled={alphabetOpen}
      >
        Alphabet
      </button>
      <p
        className={`text-center text-3xl ${
          platform() == 'android' || platform() == 'ios' ? 'mt-20' : 'm-10'
        } mb-6`}
      >
        SeSe LuLu Translator
      </p>
      <p>English:</p>
      <textarea
        placeholder='Enter English text here...'
        value={englishText}
        onChange={e => {
          setEnglishText(e.target.value)
          setSeSeLuLuText(convertTo(e.target.value))
        }}
      ></textarea>
      <p>SeSe LuLu:</p>
      <textarea
        placeholder='Enter SeSe LuLu text here...'
        value={seSeLuLuText}
        onChange={e => {
          setSeSeLuLuText(e.target.value)
          setEnglishText(convertFrom(e.target.value))
        }}
      >
        {englishText}
      </textarea>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <App />
)

import '@mantine/core/styles.css'
import { MantineProvider, Text } from '@mantine/core'
import { createRoot } from 'react-dom/client'
import { useEffect } from 'react'

function App() {
  useEffect(() => {
    let index = 0
    let interval = 1000
    const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min
    const animate = (star) => {
      star.style.setProperty('--star-left', `${rand(-10, 100)}%`)
      star.style.setProperty('--star-top', `${rand(-40, 80)}%`)
      star.style.animation = 'none'
      star.offsetHeight
      star.style.animation = ''
    }
    for (const star of document.getElementsByClassName('magic-star')) {
      setTimeout(() => {
        animate(star)
        setInterval(() => animate(star), 1000)
      }, index++ * (interval / 3))
    }
  }, [])

  return (
    <MantineProvider>
      <Text component="span" fz="2vmax" ta="center" c="white">
        ¿Estáis preparados para
        <br />
        pasar
        <span className="magic">
          <span className="magic-star">
            <svg viewBox="0 0 512 512">
              <path d="M512 255.1c0 11.34-7.406 20.86-18.44 23.64l-171.3 42.78l-42.78 171.1C276.7 504.6 267.2 512 255.9 512s-20.84-7.406-23.62-18.44l-42.66-171.2L18.47 279.6C7.406 276.8 0 267.3 0 255.1c0-11.34 7.406-20.83 18.44-23.61l171.2-42.78l42.78-171.1C235.2 7.406 244.7 0 256 0s20.84 7.406 23.62 18.44l42.78 171.2l171.2 42.78C504.6 235.2 512 244.6 512 255.1z" />
            </svg>
          </span>
          <span className="magic-star">
            <svg viewBox="0 0 512 512">
              <path d="M512 255.1c0 11.34-7.406 20.86-18.44 23.64l-171.3 42.78l-42.78 171.1C276.7 504.6 267.2 512 255.9 512s-20.84-7.406-23.62-18.44l-42.66-171.2L18.47 279.6C7.406 276.8 0 267.3 0 255.1c0-11.34 7.406-20.83 18.44-23.61l171.2-42.78l42.78-171.1C235.2 7.406 244.7 0 256 0s20.84 7.406 23.62 18.44l42.78 171.2l171.2 42.78C504.6 235.2 512 244.6 512 255.1z" />
            </svg>
          </span>
          <span className="magic-star">
            <svg viewBox="0 0 512 512">
              <path d="M512 255.1c0 11.34-7.406 20.86-18.44 23.64l-171.3 42.78l-42.78 171.1C276.7 504.6 267.2 512 255.9 512s-20.84-7.406-23.62-18.44l-42.66-171.2L18.47 279.6C7.406 276.8 0 267.3 0 255.1c0-11.34 7.406-20.83 18.44-23.61l171.2-42.78l42.78-171.1C235.2 7.406 244.7 0 256 0s20.84 7.406 23.62 18.44l42.78 171.2l171.2 42.78C504.6 235.2 512 244.6 512 255.1z" />
            </svg>
          </span>
          <span className="magic-text">dos días inolvidables</span>?
        </span>
      </Text>
      <style>{`
        *,*::after,*::before{box-sizing:border-box;margin:0;padding:0;font-family:sans-serif,system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Open Sans','Helvetica Neue'}
        a,button,img{-webkit-tap-highlight-color:transparent;user-select:none}
        button{background-color:transparent;border:none;outline:none}
        html{scroll-behavior:smooth;scrollbar-width:thin;scrollbar-color:transparent transparent}
        body{height:100vh;width:100%;display:flex;flex-wrap:wrap;place-content:center;background-image:linear-gradient(to top,#5f72bd 0%,#9b23ea 100%)}
        .magic{position:relative;display:inline-block}
        .magic-star{--size:1.5vmax;animation:scale 700ms ease forwards;display:block;height:var(--size);left:var(--star-left);position:absolute;top:var(--star-top);width:var(--size)}
        .magic> .magic-star> svg{animation:rotate 1000ms linear infinite;display:block;opacity:0.7}
        .magic> .magic-star> svg> path{fill:#dfdf18}
        .magic> .magic-text{animation:background-pan 3s linear infinite;background:linear-gradient(to right,lime,#61e2e5,#383acf,red);background-size:200%;background-clip:text;-webkit-text-fill-color:transparent;white-space:nowrap}
        @keyframes background-pan{from{background-position:0% center}to{background-position:-200% center}}
        @keyframes scale{from,to{transform:scale(0)}50%{transform:scale(1)}}
        @keyframes rotate{from{transform:rotate(0deg)}to{transform:rotate(180deg)}}
      `}</style>
    </MantineProvider>
  )
}

const root = document.createElement('div')
document.body.appendChild(root)
createRoot(root).render(<App />)

export default App
